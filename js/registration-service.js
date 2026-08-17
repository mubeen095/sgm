/* ============================================================
   SKILLGARAGE — registration-service.js
   Submission layer, cleanly separated from UI.
   UI talks to window.SkillGarageRegistration only.

   Architecture:
   - UI builds a payload and calls SkillGarageRegistration.submit()
   - Service POSTs to SKILLGARAGE_CONFIG.apiEndpoint
   - Backend not deployed yet -> config.fallbackLocalSubmission
     completes the flow locally with a server-style response
     (demo mode, never claims a real backend write or payment).
   - Razorpay/Stripe can be attached via config.payment later.
   ============================================================ */
(function (window, document) {
  'use strict';

  var CFG = window.SKILLGARAGE_CONFIG || {};

  function track(name, data) {
    try {
      window.dispatchEvent(new CustomEvent('skillgarage:' + name, { detail: data || {} }));
    } catch (e) { /* analytics listeners are optional */ }
  }

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((v || '').trim());
  }

  function isValidPhone(v) {
    return /^[6-9]\d{9}$/.test((v || '').trim().replace(/\s+/g, ''));
  }

  function required(v) {
    return !!(v && String(v).trim());
  }

  function validate(payload) {
    var errors = [];
    if (!payload.type) errors.push('Select the experience you want to join.');

    if (payload.hackathon) {
      var h = payload.hackathon;
      if (!required(h.teamName)) errors.push('Hackathon: team name is required.');
      var cap = h.captain || {};
      if (!required(cap.name)) errors.push('Hackathon: captain name is required.');
      if (!required(cap.email)) errors.push('Hackathon: captain email is required.');
      else if (!isValidEmail(cap.email)) errors.push('Hackathon: captain email is invalid.');
      if (!required(cap.phone)) errors.push('Hackathon: captain phone is required.');
      else if (!isValidPhone(cap.phone)) errors.push('Hackathon: captain phone is invalid.');
      var members = h.members || [];
      if (members.length < (CFG.minTeamMembers || 1)) errors.push('Hackathon: add at least one team member.');
      if (members.length > (CFG.maxTeamMembers || 4)) errors.push('Hackathon: team size exceeds the maximum of ' + (CFG.maxTeamMembers || 4) + '.');
      members.forEach(function (m, i) {
        if (!required(m.name)) errors.push('Member ' + (i + 1) + ': name is required.');
        if (!required(m.email)) errors.push('Member ' + (i + 1) + ': email is required.');
        else if (!isValidEmail(m.email)) errors.push('Member ' + (i + 1) + ': email is invalid.');
        if (!required(m.phone)) errors.push('Member ' + (i + 1) + ': phone is required.');
        else if (!isValidPhone(m.phone)) errors.push('Member ' + (i + 1) + ': phone is invalid.');
        if (!required(m.college)) errors.push('Member ' + (i + 1) + ': college is required.');
        if (!required(m.course)) errors.push('Member ' + (i + 1) + ': course is required.');
        if (!required(m.year)) errors.push('Member ' + (i + 1) + ': year is required.');
        if (!required(m.city)) errors.push('Member ' + (i + 1) + ': city is required.');
      });
    }

    if (payload.sports) {
      var sp = payload.sports;
      if (!required(sp.collegeName)) errors.push('Sports: college name is required.');
      if (!required(sp.collegeCity)) errors.push('Sports: college city is required.');
      if (!required(sp.repName)) errors.push('Sports: representative name is required.');
      if (!required(sp.repPhone)) errors.push('Sports: representative phone is required.');
      else if (!isValidPhone(sp.repPhone)) errors.push('Sports: representative phone is invalid.');
      if (!required(sp.repEmail)) errors.push('Sports: representative email is required.');
      else if (!isValidEmail(sp.repEmail)) errors.push('Sports: representative email is invalid.');
      if (!sp.sportsList || !sp.sportsList.length) errors.push('Sports: select at least one sport.');
    }

    if (payload.college) {
      var c = payload.college;
      if (!required(c.collegeName)) errors.push('College: college name is required.');
      if (!required(c.city)) errors.push('College: city is required.');
      if (!required(c.state)) errors.push('College: state is required.');
      if (!required(c.contactName)) errors.push('College: contact person is required.');
      if (!required(c.designation)) errors.push('College: designation is required.');
      if (!required(c.email)) errors.push('College: email is required.');
      else if (!isValidEmail(c.email)) errors.push('College: email is invalid.');
      if (!required(c.phone)) errors.push('College: phone is required.');
      else if (!isValidPhone(c.phone)) errors.push('College: phone is invalid.');
    }

    if (payload.partner) {
      var p = payload.partner;
      if (!required(p.company)) errors.push('Partner: company name is required.');
      if (!required(p.contactName)) errors.push('Partner: contact person is required.');
      if (!required(p.email)) errors.push('Partner: business email is required.');
      else if (!isValidEmail(p.email)) errors.push('Partner: business email is invalid.');
      if (!required(p.phone)) errors.push('Partner: phone is required.');
      else if (!isValidPhone(p.phone)) errors.push('Partner: phone is invalid.');
    }

    return { ok: errors.length === 0, errors: errors };
  }

  function makeId() {
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var code = '';
    for (var i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return 'SG' + new Date().getFullYear() + '-' + code;
  }

  function withTimeout(promise, ms) {
    return new Promise(function (resolve, reject) {
      var done = false;
      var t = setTimeout(function () { if (!done) { done = true; reject(new Error('request timed out')); } }, ms);
      promise.then(function (v) { if (!done) { done = true; clearTimeout(t); resolve(v); } },
                   function (e) { if (!done) { done = true; clearTimeout(t); reject(e); } });
    });
  }

  function submit(payload) {
    track('registration_submitted', payload);

    var endpoint = CFG.apiEndpoint || '/api/register';
    var body;
    try {
      body = JSON.stringify(payload);
    } catch (e) {
      return Promise.reject(e);
    }

    var req = fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: body
    });

    return withTimeout(req, CFG.requestTimeoutMs || 8000)
      .then(function (response) {
        if (!response.ok) throw new Error('Server returned ' + response.status);
        return response.json();
      })
      .then(function (result) {
        var res = { id: result.id || makeId(), demo: false, data: result };
        track('registration_completed', res);
        return res;
      })
      .catch(function (err) {
        if (CFG.fallbackLocalSubmission) {
          var res = { id: makeId(), demo: true, data: { payload: payload, reason: String(err.message || err) } };
          track('registration_completed', res);
          return res;
        }
        throw err;
      });
  }

  window.SkillGarageRegistration = {
    isValidEmail: isValidEmail,
    isValidPhone: isValidPhone,
    track: track,
    validate: validate,
    submit: submit
  };
})(window, document);