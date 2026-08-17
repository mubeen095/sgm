/* ============================================================
   SKILLGARAGE — register.js
   Multi-step registration wizard.
   01 EXPERIENCE -> 02 DETAILS -> 03 REVIEW -> 04 COMPLETE
   ============================================================ */
(function (window, document) {
  'use strict';

  var CFG = window.SKILLGARAGE_CONFIG || {};
  var Svc = window.SkillGarageRegistration;

  var state = {
    step: 1,
    type: null,                      // hackathon | sports | both | college | partner
    data: {
      hackathon: { teamName: '', captainName: '', captainEmail: '', captainPhone: '', members: [] },
      sports: { collegeName: '', collegeCity: '', repName: '', repPhone: '', repEmail: '', sportsList: [] },
      college: { collegeName: '', city: '', state: '', contactName: '', designation: '', email: '', phone: '', students: '', website: '', message: '' },
      partner: { company: '', contactName: '', designation: '', email: '', phone: '', website: '', interests: [], message: '' }
    },
    submitted: null                   // service response
  };

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------------- step navigation ---------------- */
  function setStep(n, opts) {
    opts = opts || {};
    state.step = n;
    $$('.step-panel').forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-step') === String(n)); });
    $$('.step-dot').forEach(function (d) {
      var s = parseInt(d.getAttribute('data-step'), 10);
      d.classList.toggle('active', s === n);
      d.classList.toggle('done', s < n);
    });
    if (n === 2) renderStep2();
    if (n === 3) renderReview();
    if (n === 4) renderSuccess();
    window.scrollTo({ top: 0, behavior: 'auto' });
    var focusEl = $('.step-panel.active [data-autofocus]');
    if (focusEl) focusEl.focus();
    if (!opts.silent) Svc && Svc.track('registration_step_completed', { step: n });
  }

  function goTo(n) { setStep(n); }

  /* ---------------- step 1: experience ---------------- */
  function initExperienceCards() {
    $$('.exp-card').forEach(function (card) {
      card.addEventListener('click', function () {
        $$('.exp-card').forEach(function (c) { c.classList.remove('active'); });
        card.classList.add('active');
        state.type = card.getAttribute('data-type');
        var label = card.getAttribute('data-label') || state.type;
        Svc && Svc.track('registration_type_selected', { type: state.type });
        document.getElementById('chooseCt').classList.remove('show');
        $('#nextBtn').textContent = 'CONTINUE — ' + label.toUpperCase();
        $('#nextBtn').disabled = false;
      });
    });
  }

  /* ---------------- step 2: details ---------------- */
  function renderStep2() {
    var inner = $('#detailsInner');
    var type = state.type;
    inner.innerHTML = '';

    if (type === 'hackathon' || type === 'both') {
      var h = state.data.hackathon;
      inner.appendChild(buildHackathonForm(h));
    }
    if (type === 'sports' || type === 'both') {
      var sp = state.data.sports;
      inner.appendChild(buildSportsForm(sp));
    }
    if (type === 'college') inner.appendChild(buildCollegeForm(state.data.college));
    if (type === 'partner') inner.appendChild(buildPartnerForm(state.data.partner));

    bindStep2Events(type);
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function fieldHTML(name, label, opts) {
    opts = opts || {};
    var req = opts.required === false ? '' : '<span class="req">*</span>';
    var id = 'f_' + name;
    var tag = opts.textarea ? 'textarea' : (opts.select ? 'select' : 'input');
    var value = opts.value === undefined || opts.value === null ? '' : String(opts.value);
    var attrs = 'id="' + id + '" name="' + name + '" data-field="' + name + '"';
    if (opts.placeholder) attrs += ' placeholder="' + opts.placeholder + '"';
    if (!opts.required) attrs += ' data-opt="1"';
    if (opts.type) attrs += ' type="' + opts.type + '"';
    else if (!opts.textarea && !opts.select) attrs += ' type="text"';
    if (opts.maxlength) attrs += ' maxlength="' + opts.maxlength + '"';
    var inner;
    if (opts.textarea) {
      inner = '<textarea ' + attrs + '>' + (opts.value ? escapeHtml(String(opts.value)) : '') + '</textarea>';
    } else if (opts.select) {
      var options = (opts.options || []).map(function (o) {
        var sel = String(o) === String(value) ? ' selected' : '';
        return '<option value="' + o + '"' + sel + '>' + o + '</option>';
      }).join('');
      inner = '<select ' + attrs + '><option value="">Select…</option>' + options + '</select>';
    } else {
      var val = value ? ' value="' + escapeHtml(value) + '"' : '';
      inner = '<input ' + attrs + val + '>';
    }
    return '<div class="field' + (opts.required === false ? '' : '') + '" data-wrap="' + name + '">' +
           '<label for="' + id + '">' + label + ' ' + req + '</label>' + inner +
           '<p class="fmsg" data-msg="' + name + '"></p></div>';
  }

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function buildHackathonForm(h) {
    var wrap = el('div', 'form-card');
    var h3 = el('h3', null, 'TEAM INFORMATION');
    var sub = el('p', 'step-sub', 'HACKATHON · ' + CFG.eventName);
    wrap.appendChild(h3); wrap.appendChild(sub);

    var grid = el('div', 'form-grid');
    grid.appendChild(el('div', 'full', fieldHTML('hackathon_teamName', 'Team name', { value: h.teamName, placeholder: 'e.g. Null Pointers' })));
    grid.appendChild(el('div', '', fieldHTML('hackathon_captainName', 'Team captain — full name', { value: h.captainName })));
    grid.appendChild(el('div', 'full', fieldHTML('hackathon_captainEmail', 'Captain email', { type: 'email', value: h.captainEmail })));
    grid.appendChild(el('div', 'full', fieldHTML('hackathon_captainPhone', 'Captain phone (10 digits)', { type: 'tel', maxlength: 10, value: h.captainPhone })));
    wrap.appendChild(grid);

    var mh = el('div', 'member-head', '<b>Team members</b><span class="mono">max ' + CFG.maxTeamMembers + '</span>');
    var membersBox = el('div', 'members-box');
    var addBtn = el('button', 'add-member', '+ ADD TEAM MEMBER');
    addBtn.type = 'button';
    addBtn.addEventListener('click', function () {
      h.members.push({ name: '', email: '', phone: '', college: '', course: '', year: '', city: '' });
      renderMembers();
    });

    function renderMembers() {
      membersBox.innerHTML = '';
      h.members.forEach(function (m, i) {
        var card = el('div', 'member-card');
        var head = el('div', 'member-head', '<b>Member ' + (i + 1) + '</b>');
        if (h.members.length > CFG.minTeamMembers) {
          var rm = el('button', '', 'REMOVE');
          rm.type = 'button';
          rm.addEventListener('click', function () {
            h.members.splice(i, 1);
            renderMembers();
          });
          head.appendChild(rm);
        }
        card.appendChild(head);
        var g = el('div', 'form-grid');
        g.appendChild(el('div', '', fieldHTML('hackathon_m' + i + '_name', 'Full name', { value: m.name })));
        g.appendChild(el('div', '', fieldHTML('hackathon_m' + i + '_email', 'Email', { type: 'email', value: m.email })));
        g.appendChild(el('div', '', fieldHTML('hackathon_m' + i + '_phone', 'Phone', { type: 'tel', maxlength: 10, value: m.phone })));
        g.appendChild(el('div', '', fieldHTML('hackathon_m' + i + '_college', 'College', { value: m.college })));
        g.appendChild(el('div', '', fieldHTML('hackathon_m' + i + '_course', 'Course', { value: m.course })));
        g.appendChild(el('div', '', fieldHTML('hackathon_m' + i + '_year', 'Year', { select: true, options: ['1st year', '2nd year', '3rd year', '4th year', '5th year'], value: m.year })));
        g.appendChild(el('div', 'full', fieldHTML('hackathon_m' + i + '_city', 'City', { value: m.city })));
        card.appendChild(g);
        membersBox.appendChild(card);
      });
      addBtn.style.display = h.members.length >= CFG.maxTeamMembers ? 'none' : '';
    }

    wrap.appendChild(mh);
    wrap.appendChild(membersBox);
    wrap.appendChild(addBtn);
    if (h.members.length === 0) h.members.push({ name: '', email: '', phone: '', college: '', course: '', year: '', city: '' });
    renderMembers();
    return wrap;
  }

  function buildSportsForm(sp) {
    var wrap = el('div', 'form-card');
    wrap.appendChild(el('h3', null, 'COLLEGE INFORMATION'));
    wrap.appendChild(el('p', 'step-sub', 'SPORTS · ' + CFG.eventName));
    var grid = el('div', 'form-grid');
    grid.appendChild(el('div', 'full', fieldHTML('sports_collegeName', 'College name', { value: sp.collegeName })));
    grid.appendChild(el('div', 'full', fieldHTML('sports_collegeCity', 'College city', { value: sp.collegeCity })));
    grid.appendChild(el('div', '', fieldHTML('sports_repName', 'College representative', { value: sp.repName })));
    grid.appendChild(el('div', '', fieldHTML('sports_repPhone', 'Representative phone', { type: 'tel', maxlength: 10, value: sp.repPhone })));
    grid.appendChild(el('div', 'full', fieldHTML('sports_repEmail', 'Representative email', { type: 'email', value: sp.repEmail })));
    wrap.appendChild(grid);

    var sTitle = el('div', 'member-head', '<b>Sport selection</b><span class="mono">choose any</span>');
    var grid2 = el('div', 'sport-grid');
    CFG.sports.concat(['Other']).forEach(function (sport) {
      var b = el('button', 'sport-card' + (sp.sportsList.indexOf(sport) !== -1 ? ' active' : ''), '');
      b.type = 'button';
      b.setAttribute('data-sport', sport);
      b.setAttribute('aria-pressed', sp.sportsList.indexOf(sport) !== -1 ? 'true' : 'false');
      b.innerHTML = '<span class="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4-9 5 6 4-4 2 7"/><circle cx="9" cy="20" r="2"/></svg></span>' + sport.toUpperCase();
      b.addEventListener('click', function () {
        var i = sp.sportsList.indexOf(sport);
        if (i === -1) sp.sportsList.push(sport);
        else sp.sportsList.splice(i, 1);
        b.classList.toggle('active', sp.sportsList.indexOf(sport) !== -1);
        b.setAttribute('aria-pressed', sp.sportsList.indexOf(sport) !== -1 ? 'true' : 'false');
      });
      grid2.appendChild(b);
    });
    wrap.appendChild(sTitle);
    wrap.appendChild(grid2);
    return wrap;
  }

  function buildCollegeForm(c) {
    var wrap = el('div', 'form-card');
    wrap.appendChild(el('h3', null, 'COLLEGE / INSTITUTION'));
    wrap.appendChild(el('p', 'step-sub', 'BRING YOUR COLLEGE TO SKILLGARAGE'));
    var grid = el('div', 'form-grid');
    grid.appendChild(el('div', 'full', fieldHTML('college_collegeName', 'College name', { value: c.collegeName })));
    grid.appendChild(el('div', '', fieldHTML('college_city', 'City', { value: c.city })));
    grid.appendChild(el('div', '', fieldHTML('college_state', 'State', { value: c.state })));
    grid.appendChild(el('div', '', fieldHTML('college_contactName', 'Contact person', { value: c.contactName })));
    grid.appendChild(el('div', '', fieldHTML('college_designation', 'Designation', { value: c.designation })));
    grid.appendChild(el('div', '', fieldHTML('college_email', 'Email', { type: 'email', value: c.email })));
    grid.appendChild(el('div', '', fieldHTML('college_phone', 'Phone', { type: 'tel', maxlength: 10, value: c.phone })));
    grid.appendChild(el('div', '', fieldHTML('college_students', 'Number of students expected', { type: 'number', value: c.students })));
    grid.appendChild(el('div', 'full', fieldHTML('college_website', 'Website', { value: c.website })));
    grid.appendChild(el('div', 'full', fieldHTML('college_message', 'Message', { textarea: true, value: c.message })));
    wrap.appendChild(grid);
    return wrap;
  }

  var PARTNER_INTERESTS = ['Hiring', 'Sponsorship', 'Sports', 'Food', 'Technology', 'Internet',
                           'Banking', 'Camping', 'Hospitality', 'Security', 'Production', 'Media', 'Other'];

  function buildPartnerForm(p) {
    var wrap = el('div', 'form-card');
    wrap.appendChild(el('h3', null, 'PARTNER / COMPANY'));
    wrap.appendChild(el('p', 'step-sub', 'SPONSOR · HIRE · COLLABORATE'));
    var grid = el('div', 'form-grid');
    grid.appendChild(el('div', '', fieldHTML('partner_company', 'Company name', { value: p.company })));
    grid.appendChild(el('div', '', fieldHTML('partner_contactName', 'Contact person', { value: p.contactName })));
    grid.appendChild(el('div', '', fieldHTML('partner_designation', 'Designation', { value: p.designation })));
    grid.appendChild(el('div', '', fieldHTML('partner_email', 'Business email', { type: 'email', value: p.email })));
    grid.appendChild(el('div', '', fieldHTML('partner_phone', 'Phone', { type: 'tel', maxlength: 10, value: p.phone })));
    grid.appendChild(el('div', '', fieldHTML('partner_website', 'Website', { value: p.website })));
    wrap.appendChild(grid);

    var sTitle = el('div', 'member-head', '<b>Partnership interest</b><span class="mono">choose any</span>');
    var chips = el('div', 'chips');
    PARTNER_INTERESTS.forEach(function (it) {
      var b = el('button', 'chip' + (p.interests.indexOf(it) !== -1 ? ' gold' : ''), '<span class="dot"></span>' + it);
      b.type = 'button';
      b.setAttribute('aria-pressed', p.interests.indexOf(it) !== -1 ? 'true' : 'false');
      b.addEventListener('click', function () {
        var i = p.interests.indexOf(it);
        if (i === -1) p.interests.push(it);
        else p.interests.splice(i, 1);
        b.classList.toggle('gold', p.interests.indexOf(it) !== -1);
        b.setAttribute('aria-pressed', p.interests.indexOf(it) !== -1 ? 'true' : 'false');
      });
      chips.appendChild(b);
    });
    wrap.appendChild(sTitle);
    wrap.appendChild(chips);
    wrap.appendChild(el('div', 'field', fieldHTML('partner_message', 'Message', { textarea: true, value: p.message })));
    return wrap;
  }

  function bindStep2Events(type) {
    function collectField(elm) {
      var name = elm.getAttribute('data-field') || '';
      var value = elm.value;
      if (name.indexOf('hackathon_') === 0 && name.indexOf('_m') !== -1) {
        var parts = name.split('_');          // hackathon_m{idx}_{field}
        var idx = parseInt(parts[1].slice(1), 10);
        var key = parts[2];
        if (parts[1].charAt(0) === 'm' && !isNaN(idx) && state.data.hackathon.members[idx]) {
          state.data.hackathon.members[idx][key] = value;
        }
        return;
      }
      if (name.indexOf('hackathon_') === 0) {
        state.data.hackathon[name.replace('hackathon_', '')] = value;
        return;
      }
      if (name.indexOf('sports_') === 0) {
        state.data.sports[name.replace('sports_', '')] = value;
        return;
      }
      if (name.indexOf('college_') === 0) {
        state.data.college[name.replace('college_', '')] = value;
        return;
      }
      if (name.indexOf('partner_') === 0) {
        state.data.partner[name.replace('partner_', '')] = value;
      }
    }

    $$('#detailsInner input, #detailsInner select, #detailsInner textarea').forEach(function (elm) {
      elm.addEventListener('input', function () { collectField(elm); });
      elm.addEventListener('change', function () { collectField(elm); });
    });
  }

/* ---------------- validation helpers (UI inline) ---------------- */
  function markError(name, msg) {
    var wrap = $('[data-wrap="' + name + '"]');
    if (!wrap) return;
    wrap.classList.add('err');
    var msgEl = $('[data-msg="' + name + '"]', wrap);
    if (msgEl && msg) msgEl.textContent = msg;
  }
  function clearError(name) {
    var wrap = $('[data-wrap="' + name + '"]');
    if (!wrap) return;
    wrap.classList.remove('err');
  }
  function clearAllErrors(scope) {
    $$('.field.err', scope || document).forEach(function (f) { f.classList.remove('err'); });
  }

  function readStep2Values() {
    $$('#detailsInner [data-field]').forEach(function (input) {
      var name = input.getAttribute('data-field');
      input.dispatchEvent(new Event('input', { bubbles: false }));
    });
  }

  function validateStep2() {
    clearAllErrors();
    readStep2Values();
    var type = state.type;
    var ok = true;

    function req(name, label, isEmail, isPhone) {
      var wrap = $('[data-wrap="' + name + '"]');
      var input = wrap && $('[data-field="' + name + '"]', wrap);
      var v = input ? input.value.trim() : '';
      if (!v) { markError(name, label + ' is required.'); ok = false; return; }
      if (isEmail && !Svc.isValidEmail(v)) { markError(name, 'Enter a valid email.'); ok = false; return; }
      if (isPhone && !Svc.isValidPhone(v)) { markError(name, 'Enter a valid 10-digit phone.'); ok = false; return; }
    }

    if (type === 'hackathon' || type === 'both') {
      req('hackathon_teamName', 'Team name');
      req('hackathon_captainName', 'Captain name');
      req('hackathon_captainEmail', 'Captain email', true);
      req('hackathon_captainPhone', 'Captain phone', false, true);
      var members = state.data.hackathon.members;
      if (members.length === 0) { ok = false; }
      members.forEach(function (m, i) {
        ['name', 'email', 'phone', 'college', 'course', 'year', 'city'].forEach(function (k) {
          var wrap = $('[data-wrap="hackathon_m' + i + '_' + k + '"]');
          var input = wrap && $('[data-field="hackathon_m' + i + '_' + k + '"]', wrap);
          var v = input ? input.value.trim() : '';
          if (k === 'city') {
            // city allowed but still required per rules
          }
          if (!v) { markError('hackathon_m' + i + '_' + k, 'Required.'); ok = false; return; }
          if (k === 'email' && !Svc.isValidEmail(v)) { markError('hackathon_m' + i + '_' + k, 'Invalid email.'); ok = false; }
          if (k === 'phone' && !Svc.isValidPhone(v)) { markError('hackathon_m' + i + '_' + k, 'Invalid phone.'); ok = false; }
        });
      });
    }

    if (type === 'sports' || type === 'both') {
      req('sports_collegeName', 'College name');
      req('sports_collegeCity', 'College city');
      req('sports_repName', 'Representative name');
      req('sports_repPhone', 'Representative phone', false, true);
      req('sports_repEmail', 'Representative email', true);
      if (!state.data.sports.sportsList.length) { ok = false; }
    }

    if (type === 'college') {
      req('college_collegeName', 'College name');
      req('college_city', 'City');
      req('college_state', 'State');
      req('college_contactName', 'Contact person');
      req('college_designation', 'Designation');
      req('college_email', 'Email', true);
      req('college_phone', 'Phone', false, true);
    }

    if (type === 'partner') {
      req('partner_company', 'Company name');
      req('partner_contactName', 'Contact person');
      req('partner_email', 'Business email', true);
      req('partner_phone', 'Phone', false, true);
    }

    if (!ok) {
      var firstErr = $('.field.err');
      if (firstErr && firstErr.scrollIntoView) firstErr.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    return ok;
  }

  /* ---------------- step 3: review ---------------- */
  function reviewItem(label, value) {
    var d = el('div', 'row');
    d.innerHTML = '<label>' + label + '</label><p>' + (value || '—') + '</p>';
    return d;
  }
  function reviewGroup(title, editTarget, rows) {
    var g = el('div', 'review-group');
    var t = el('div', 'review-title', '<b>' + title + '</b>');
    var edit = el('button', 'review-edit', 'EDIT');
    edit.type = 'button';
    edit.setAttribute('data-edit', editTarget);
    edit.addEventListener('click', function () { goTo(editTarget); });
    t.appendChild(edit);
    var r = el('div', 'review-rows');
    rows.forEach(function (row) { r.appendChild(reviewItem(row[0], row[1])); });
    g.appendChild(t);
    g.appendChild(r);
    return g;
  }

  function renderReview() {
    var box = $('#reviewBox');
    if (!box) return;
    box.innerHTML = '';
    var type = state.type;
    var d = state.data;

    box.appendChild(el('div', 'review-group', '<div class="review-title"><b>Experience</b></div>' +
      '<div class="review-rows"><div class="row"><label>Selected</label><p>' +
      String(type || '—').toUpperCase() + '</p></div></div>'));

    if (type === 'hackathon' || type === 'both') {
      var h = d.hackathon;
      box.appendChild(reviewGroup('Hackathon — team', 2, [
        ['Team name', h.teamName],
        ['Captain', h.captainName],
        ['Captain email', h.captainEmail],
        ['Captain phone', h.captainPhone]
      ]));
      box.appendChild(reviewGroup('Hackathon — members (' + h.members.length + ')', 2,
        h.members.map(function (m, i) {
          return ['Member ' + (i + 1), m.name + ' · ' + m.email + ' · ' + m.phone + ' · ' + m.college + ' · ' + m.course + ' · ' + m.year + ' · ' + m.city];
        })));
    }
    if (type === 'sports' || type === 'both') {
      var sp = d.sports;
      box.appendChild(reviewGroup('Sports — college', 2, [
        ['College', sp.collegeName],
        ['City', sp.collegeCity],
        ['Representative', sp.repName],
        ['Phone', sp.repPhone],
        ['Email', sp.repEmail],
        ['Sports', sp.sportsList.join(', ')]
      ]));
    }
    if (type === 'college') {
      var c = d.college;
      box.appendChild(reviewGroup('College / institution', 2, [
        ['College', c.collegeName], ['City', c.city], ['State', c.state],
        ['Contact', c.contactName], ['Designation', c.designation],
        ['Email', c.email], ['Phone', c.phone],
        ['Students expected', c.students], ['Website', c.website],
        ['Message', c.message]
      ]));
    }
    if (type === 'partner') {
      var p = d.partner;
      box.appendChild(reviewGroup('Partner / company', 2, [
        ['Company', p.company], ['Contact', p.contactName], ['Designation', p.designation],
        ['Email', p.email], ['Phone', p.phone], ['Website', p.website],
        ['Interests', p.interests.join(', ')], ['Message', p.message]
      ]));
    }
    $$('[data-edit]', box).forEach(function (b) {
      b.addEventListener('click', function () { goTo(2); });
    });
  }

  /* ---------------- submit ---------------- */
  function buildPayload() {
    var payload = { type: state.type, submittedAt: new Date().toISOString() };
    if (state.type === 'hackathon' || state.type === 'both') {
      var h = state.data.hackathon;
      payload.hackathon = {
        teamName: h.teamName,
        captain: { name: h.captainName, email: h.captainEmail, phone: h.captainPhone },
        members: h.members
      };
    }
    if (state.type === 'sports' || state.type === 'both') {
      var sp = state.data.sports;
      payload.sports = {
        college: sp.collegeName, city: sp.collegeCity,
        representative: { name: sp.repName, phone: sp.repPhone, email: sp.repEmail },
        sportsList: sp.sportsList
      };
    }
    if (state.type === 'college') payload.college = state.data.college;
    if (state.type === 'partner') payload.partner = state.data.partner;
    return payload;
  }

  function initSubmit() {
    $('#submitBtn').addEventListener('click', function () {
      var btn = $('#submitBtn');
      btn.disabled = true;
      btn.classList.add('loading');
      btn.innerHTML = '<span class="mono">SUBMITTING…</span>';
      $('#submitErr').classList.remove('show');

      var payload = buildPayload();
      var check = Svc.validate(payload);
      var errBox = $('#submitErr');
      if (!check.ok) {
        errBox.textContent = check.errors.join(' ');
        errBox.classList.add('show');
        btn.disabled = false;
        btn.classList.remove('loading');
        btn.innerHTML = 'SUBMIT REGISTRATION';
        return;
      }

      Svc.submit(payload).then(function (res) {
        state.submitted = res;
        setStep(4);
      }).catch(function (err) {
        errBox.textContent = 'We could not reach the server. Please try again.';
        errBox.classList.add('show');
        btn.disabled = false;
        btn.classList.remove('loading');
        btn.innerHTML = 'SUBMIT REGISTRATION';
      });
    });
  }

  /* ---------------- step 4: success ---------------- */
  function renderSuccess() {
    var box = $('#successBox');
    if (!box) return;
    var res = state.submitted || {};
    var payload = (res.data && res.data.payload) || {};
    var name = payload.type === 'hackathon' || payload.type === 'both'
      ? (payload.hackathon || {}).captain && payload.hackathon.captain.name
      : '';
    if (!name && payload.sports) name = payload.sports.representative.name;
    if (!name && payload.college) name = payload.college.contactName;
    if (!name && payload.partner) name = payload.partner.contactName;
    var college = '';
    var team = '';
    if (payload.hackathon) { college = (payload.hackathon.members[0] || {}).college; team = payload.hackathon.teamName; }
    if (payload.sports && !college) college = payload.sports.college;

    var demoNote = res.demo ? '<p class="notice"><b>PREVIEW MODE</b> — the submission backend is not connected yet. ' +
      'You are viewing the full flow with a locally generated reference. ' +
      'No server write or payment has taken place.</p>' : '';

    var paymentNote = '<p class="notice"><b>' + (CFG.payment.previewMessage || 'PAYMENT COMING SOON') + '</b> — ' +
      'fees and payment will open on an official gateway once enabled. No payment was charged during this registration.</p>';

    box.innerHTML =
      '<div class="success-mark"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg></div>' +
      '<p class="mono">REGISTRATION COMPLETE</p>' +
      '<h2 class="h2" style="margin:14px 0 8px">YOU’RE IN.</h2>' +
      '<p class="lead" style="font-size:17px">Your SkillGarage journey starts here.</p>' +
      '<div class="reg-id">' + res.id + '</div>' +
      '<div class="summary-line">' +
      (name ? '<b>' + name + '</b><br>' : '') +
      '<b>' + String(state.type || '').toUpperCase() + '</b>' +
      (college ? ' — ' + college : '') +
      (team ? ' — Team ' + team : '') +
      '</div>' +
      demoNote + paymentNote +
      '<div class="cta-actions"><a class="btn btn-blue" href="index.html">BACK TO SKILLGARAGE</a>' +
      '<a class="btn btn-ghost" href="events.html">EXPLORE THE EXPERIENCE</a></div>';
  }

  /* ---------------- boot ---------------- */
  function boot() {
    if (!Svc) {
      // service missing -> fail loudly rather than fake success
      console.error('SkillGarageRegistration service not loaded.');
      return;
    }
    initExperienceCards();
    initSubmit();
    $('#nextBtn').addEventListener('click', function () {
      if (state.step === 1 && !state.type) {
        $('#chooseCt').classList.add('show');
        return;
      }
      if (state.step === 1) {
        setStep(2);
        return;
      }
      if (state.step === 2) {
        if (!validateStep2()) return;
        setStep(3);
        return;
      }
      if (state.step === 3) {
        $('#submitBtn').click();
        return;
      }
    });
    $('#backBtn').addEventListener('click', function () {
      if (state.step === 2) { setStep(1); return; }
      if (state.step === 3) { setStep(2); return; }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && state.step === 2) setStep(1);
    });
    Svc.track('registration_started', { page: location.pathname });
  }

  document.addEventListener('DOMContentLoaded', boot);
})(window, document);