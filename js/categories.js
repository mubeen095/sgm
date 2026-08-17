/* ============================================================
   SKILLGARAGE — categories.js
   Category detail pages (/category.html?cat=<slug>).
   ============================================================ */
(function (window, document) {
  'use strict';

  var FESTIVAL = {
    round1: 'ONLINE QUALIFIERS — NOV 2026',
    finale: 'CAMPUS FINALE — DAY 1–3, DEC 2026'
  };

  window.SKILLGARAGE_CATEGORIES = [
    {
      slug: 'technology',
      name: 'TECHNOLOGY',
      num: '01',
      title: 'THE NATIONAL HACKATHON',
      tagline: 'Build with your team. Solve real problems. Get discovered.',
      meta: ['DAY 1–3', 'TEAM COMPETITION', 'CAMPUS + ONLINE'],
      quickFacts: [
        { k: 'FORMAT', v: '24-hour build sprint' },
        { k: 'TEAM SIZE', v: '1–4 members' },
        { k: 'ELIGIBILITY', v: 'Any student, any stream' },
        { k: 'ENTRY', v: 'Free with festival pass' },
        { k: 'WHERE', v: 'Campus + online qualifiers' }
      ],
      intro: [
        'SkillGarage\'s flagship technology track is a 24-hour build sprint across AI, software, robotics and cybersecurity. Teams of up to four take on challenges set by industry partners, with mentors on call through the night and a judging panel of founders and senior engineers.',
        'Round 01 is an online national qualification. Round 02 — the 3-day campus finale — ends with live demos on the main stage, prizes, and direct exposure to hiring partners scouting for builders.'
      ],
      experience: [
        { t: 'Round 01 — national online qualification', d: 'Solve challenges from your own campus. Top teams move to the finale.' },
        { t: 'Round 02 — 3-day campus finale', d: 'Qualified teams build live on campus with full tech support.' },
        { t: '24-hour build sprint', d: 'One continuous build window with challenges set by industry partners.' },
        { t: 'Mentors on call through the night', d: 'Senior engineers and founders on the floor, round the clock.' },
        { t: 'Live demo & judging on the main stage', d: 'Final demos in front of judges, investors and a live crowd.' },
        { t: 'Career opportunities with hiring partners', d: 'Recruiters scout directly from the showcase floor.' }
      ],
      schedule: [
        { day: 'DAY 01', items: [
          { t: 'Team onboarding & challenge briefs', time: '10:00', venue: 'Main arena' },
          { t: 'Sprint kickoff with mentors', time: '18:00', venue: 'Hack zone' },
          { t: 'Late-night hacking zones open', time: '22:00', venue: 'Hack zone' } ] },
        { day: 'DAY 02', items: [
          { t: 'Build day — mentor check-ins', time: '10:00', venue: 'Hack zone' },
          { t: 'Mid-sprint demos & feedback', time: '17:00', venue: 'Demo stage' },
          { t: 'Judges preview round', time: '22:00', venue: 'Judges room' } ] },
        { day: 'DAY 03', items: [
          { t: 'Final demos on the main stage', time: '10:00', venue: 'Main stage' },
          { t: 'Judging & awards ceremony', time: '16:00', venue: 'Main stage' },
          { t: 'Showcase to hiring partners', time: '18:00', venue: 'Expo hall' } ] }
      ],
      howTo: [
        { t: 'Create your SkillGarage profile', d: 'Takes 2 minutes with your college email.' },
        { t: 'Form your team — up to 4 members', d: 'Any college, any stream — or find teammates at the festival.' },
        { t: 'Pick a challenge & submit Round 01 online', d: 'Challenges open online for 48 hours.' },
        { t: 'Qualify and build live at the campus finale', d: 'Round 02 is the 3-day build on campus.' }
      ],
      prizes: [
        { tier: '1ST PLACE', v: '₹2,00,000' },
        { tier: '2ND PLACE', v: '₹1,00,000' },
        { tier: '3RD PLACE', v: '₹50,000' },
        { tier: 'SPECIAL AWARDS', v: 'Best of show · People\'s choice · Most innovative' }
      ],
      keyDates: [
        { k: 'REGISTRATION', v: 'OPEN NOW — SLOTS PER COLLEGE' },
        { k: 'ROUND 01', v: FESTIVAL.round1 },
        { k: 'ROUND 02', v: FESTIVAL.finale }
      ],
      bring: ['Laptop', 'Charger & power bank', 'Water bottle', 'Notebook for ideas', 'Comfortable shoes'],
      quote: { text: 'We came with an idea scrawled on a napkin. We left with a demo, an internship, and a team that feels like family.', who: '— HACKATHON WINNER, SG 2025' },
      qualify: { title: 'ROUND 1 — THE 12-POINT SYSTEM', rules: [
        'At least one member of your 4-person team must qualify.',
        'Every other member needs a minimum 6/12 points to stay on the team.',
        'Below the line? You drop out. Above it? The team carries on together.'
      ] },
      audience: ['Builders', 'Programmers', 'AI enthusiasts', 'Designers', 'Problem solvers'],
      chips: ['Team competition', 'Technical challenges', 'Mentors', 'Industry interaction', 'Career opportunities', 'Campus experience', 'Prizes', 'Recognition'],
      faq: [
        { q: 'Do I need a team to register?', a: 'No — you can register solo and form a team with other hackers at the festival. Teams can be 1–4 members.' },
        { q: 'Is coding experience required?', a: 'Challenges span multiple difficulty levels. First-timers get starter kits and mentor support through the sprint.' },
        { q: 'What do winners get besides prize money?', a: 'Direct introductions to hiring partners, incubation talks, and a showcase on the main stage.' }
      ]
    },
    {
      slug: 'sports',
      name: 'SPORTS',
      num: '02',
      title: 'NATIONAL SPORTS FESTIVAL',
      tagline: 'Represent your college. Compete nationally. Take the championship home.',
      meta: ['DAY 1–3', 'INTER-COLLEGE', 'CAMPUS ARENAS'],
      quickFacts: [
        { k: 'FORMAT', v: 'Tournament — 7 sports' },
        { k: 'TEAM SIZE', v: '3–12 per sport' },
        { k: 'ELIGIBILITY', v: 'College students' },
        { k: 'ENTRY', v: 'Free with festival pass' },
        { k: 'WHERE', v: 'On-campus arenas' }
      ],
      intro: [
        'The National Sports Festival brings inter-college competition in seven disciplines — Basketball, Football, Chess, Badminton, Boxing, Volleyball and Table Tennis. Teams qualify through online and regional rounds before the finals on campus.',
        'Every match runs with professional officiating, live scoreboards and a running college points table. The championship trophy goes to the strongest college across all disciplines.'
      ],
      experience: [
        { t: '7 sports — team & individual events', d: 'Basketball, football, chess, badminton, boxing, volleyball, table tennis.' },
        { t: 'Online qualifiers, campus finals', d: 'Regional qualifiers first — the biggest battles happen on campus.' },
        { t: 'Professional referees & officials', d: 'Certified officials and live scoreboards on every court.' },
        { t: 'Live results & college points table', d: 'Every result updates the national college standings.' },
        { t: 'National championship trophy', d: 'The strongest college across all sports takes it home.' },
        { t: 'Sports gear & prize pool', d: 'Equipment prizes, medals and a ₹2L+ pool across sports.' }
      ],
      schedule: [
        { day: 'DAY 01', items: [
          { t: 'Group-stage knockouts', time: '09:00', venue: 'Sports complex' },
          { t: 'Football qualifiers', time: '14:00', venue: 'Football ground' },
          { t: 'Chess rapid rounds', time: '18:00', venue: 'Chess hall' } ] },
        { day: 'DAY 02', items: [
          { t: 'Semifinals across arenas', time: '09:00', venue: 'All arenas' },
          { t: 'Badminton, boxing & TT brackets', time: '13:00', venue: 'Indoor courts' },
          { t: 'Semi-final chess & volleyball', time: '17:00', venue: 'Chess hall · court 2' } ] },
        { day: 'DAY 03', items: [
          { t: 'Finals across all sports', time: '09:00', venue: 'All arenas' },
          { t: 'Championship ceremony', time: '18:00', venue: 'Main stage' },
          { t: 'College points table reveal', time: '20:00', venue: 'Main stage' } ] }
      ],
      howTo: [
        { t: 'Pick your sport from the 7 on offer', d: 'Team or individual — there\'s a bracket for everyone.' },
        { t: 'Register your team or join one', d: 'Individual entries get matched with teams from your college.' },
        { t: 'Play qualifiers — online or regional', d: 'Earn your spot in the campus finals.' },
        { t: 'Play the finals on campus', d: 'Win matches, earn points, chase the championship.' }
      ],
      prizes: [
        { tier: 'CHAMPIONSHIP', v: '₹2,00,000 + trophy' },
        { tier: 'PER-SPORT WINNERS', v: '₹50,000 + medals & gear' },
        { tier: 'RUNNERS-UP', v: '₹25,000' },
        { tier: 'SPECIAL AWARDS', v: 'Best supporter contingent · Fair play' }
      ],
      keyDates: [
        { k: 'REGISTRATION', v: 'OPEN NOW — TEAM SLOTS' },
        { k: 'QUALIFIERS', v: 'ONLINE + REGIONAL — NOV 2026' },
        { k: 'FINALS', v: FESTIVAL.finale }
      ],
      bring: ['Sports shoes', 'Your jersey / college kit', 'Water bottle', 'Towel', 'Supporter energy'],
      quote: { text: 'We walked in as 12 strangers from one college. We walked out as a team with a national trophy and a year of bragging rights.', who: '— CAPTAIN, WINNING COLLEGE 2025' },
      audience: ['Athletes', 'College teams', 'Coaches', 'Supporters'],
      chips: ['Basketball', 'Football', 'Chess', 'Badminton', 'Boxing', 'Volleyball', 'Table Tennis', 'Championship'],
      faq: [
        { q: 'Can I play more than one sport?', a: 'Yes — fixture clashes permitting. You can register for multiple sports; the points table counts every entry.' },
        { q: 'Do we need a full team to register?', a: 'No. Register as an individual or partial team and we\'ll help you connect with other players from your college.' },
        { q: 'What are the participation rules?', a: 'Students enrolled in any college or university are eligible. Play in your college\'s name — no club or franchise entries.' }
      ]
    },
    {
      slug: 'entrepreneurship',
      name: 'ENTREPRENEURSHIP',
      num: '03',
      title: 'THE STARTUP PITCH ARENA',
      tagline: 'Bring your idea. Pitch it. Fund it.',
      meta: ['DAY 1–3', 'PITCH COMPETITION', 'MAIN STAGE'],
      quickFacts: [
        { k: 'FORMAT', v: 'Pitch competition' },
        { k: 'TEAM SIZE', v: '1–5 members' },
        { k: 'ELIGIBILITY', v: 'Student founders' },
        { k: 'ENTRY', v: 'Free with festival pass' },
        { k: 'WHERE', v: 'Main stage + startup floor' }
      ],
      intro: [
        'The Startup Pitch Arena gives student teams a stage, a judging panel of investors, and a shot at real funding. Across three days, founders and idea-stage teams workshop their pitches, meet mentors, and battle through semi-finals to the final stage.',
        'Alongside the competition: founder talks, workshops on funding, product and go-to-market, and a dedicated student-startup networking floor where the ecosystem comes to find its next bet.'
      ],
      experience: [
        { t: 'Pitch arena with investor judging', d: 'Real investors score every pitch — no clapping circuits.' },
        { t: 'Semi-finals & main-stage finals', d: 'Two rounds of competition, one main-stage finale.' },
        { t: 'Founder talks & keynotes', d: 'Builders share the mistakes you won\'t have to make.' },
        { t: 'Workshops — funding, product, go-to-market', d: 'Hands-on sessions that sharpen your deck and model.' },
        { t: '1-on-1 mentor hours', d: 'Book 15 minutes with founders and operators.' },
        { t: 'Student startup networking floor', d: 'Meet co-founders, first users and early believers.' }
      ],
      schedule: [
        { day: 'DAY 01', items: [
          { t: 'Founder keynotes', time: '10:00', venue: 'Main stage' },
          { t: 'Workshop day — funding & product', time: '13:00', venue: 'Workshop hall' },
          { t: 'Pitch bootcamp', time: '17:00', venue: 'Startup floor' } ] },
        { day: 'DAY 02', items: [
          { t: 'Semi-final pitches', time: '10:00', venue: 'Pitch room' },
          { t: 'Mentor hours', time: '14:00', venue: 'Startup floor' },
          { t: 'Startup networking floor', time: '18:00', venue: 'Expo hall' } ] },
        { day: 'DAY 03', items: [
          { t: 'Finals on the main stage', time: '11:00', venue: 'Main stage' },
          { t: 'Investor feedback session', time: '15:00', venue: 'Main stage' },
          { t: 'Funding intros & awards', time: '17:30', venue: 'Main stage' } ] }
      ],
      howTo: [
        { t: 'Register with your idea — any stage', d: 'Idea, prototype or live startup — all tracks welcome.' },
        { t: 'Sharpen it in the pitch bootcamp', d: 'Deck review, feedback loops, live practice.' },
        { t: 'Pitch in the semi-finals', d: '10 minutes to make the investors lean in.' },
        { t: 'Make finals & meet investors face to face', d: 'The finale decides the funding pool allocation.' }
      ],
      prizes: [
        { tier: '1ST PLACE', v: '₹3,00,000 investment pool' },
        { tier: '2ND PLACE', v: '₹1,50,000' },
        { tier: '3RD PLACE', v: '₹75,000' },
        { tier: 'SPECIAL AWARDS', v: 'Incubation seats · Investor office hours' }
      ],
      keyDates: [
        { k: 'REGISTRATION', v: 'OPEN NOW — PITCH SLOTS' },
        { k: 'DEADLINE', v: 'DECK SUBMISSION — NOV 2026' },
        { k: 'FINALS', v: FESTIVAL.finale }
      ],
      bring: ['Pitch deck (PDF)', 'Laptop', 'Business model notes', 'Open mind for feedback'],
      quote: { text: 'We pitched to investors at 22. Six months later our startup is live with their money behind it. That stage changes timelines.', who: '— FOUNDER, ARENA WINNER 2025' },
      audience: ['Founders', 'Student startups', 'Idea-stage teams', 'Aspiring entrepreneurs'],
      chips: ['Founder talks', 'Startup workshops', 'Mentorship', 'Student startup networking', 'Investor sessions', 'Startup pitches'],
      faq: [
        { q: 'My startup is just an idea — can I still pitch?', a: 'Yes. The arena has a separate track for idea-stage teams, and the bootcamp is designed to turn ideas into pitches in one day.' },
        { q: 'What should the pitch deck include?', a: 'Problem, solution, market, traction (if any) and team. You get deck review feedback during mentor hours.' },
        { q: 'Are investors actually investing?', a: 'Yes — a live investment pool is deployed from the arena, with term sheets drafted on the spot for winning teams.' }
      ]
    },
    {
      slug: 'investment',
      name: 'INVESTMENT',
      num: '04',
      title: 'THE INVESTMENT CHALLENGE',
      tagline: 'Trade. Build a portfolio. Think like a fund manager.',
      meta: ['DAY 1–3', 'SIMULATION', 'STRATEGY DESK'],
      quickFacts: [
        { k: 'FORMAT', v: 'Portfolio simulation' },
        { k: 'TEAM SIZE', v: 'Solo' },
        { k: 'ELIGIBILITY', v: 'All students' },
        { k: 'ENTRY', v: 'Free with festival pass' },
        { k: 'WHERE', v: 'Strategy desk, campus' }
      ],
      intro: [
        'The Investment Challenge is a portfolio-building simulation run on realistic market data. Participants build and defend a portfolio through the festival, with a live leaderboard updating through the weekend.',
        'Strategy sessions with fund managers and analysts unpack how real desks think — risk, allocation, conviction. Top-ranked participants walk away with intros to finance internships and analyst-track roles.'
      ],
      experience: [
        { t: 'Live portfolio-building simulation', d: 'Build a portfolio over 3 days of real market data.' },
        { t: 'Realistic market data feeds', d: 'Equities, indices and news events — no sugar-coating.' },
        { t: 'Strategy sessions with fund managers', d: 'How real desks think about risk and conviction.' },
        { t: 'Risk & allocation deep-dives', d: 'Position sizing, hedging and drawdown control.' },
        { t: 'Live leaderboard all weekend', d: 'Your rank updates with every trade.' },
        { t: 'Analyst-track & internship intros', d: 'Top finishers get direct intros to finance desks.' }
      ],
      schedule: [
        { day: 'DAY 01', items: [
          { t: 'Markets crash course', time: '10:00', venue: 'Strategy desk' },
          { t: 'Simulation kickoff', time: '12:00', venue: 'Strategy desk' },
          { t: 'Opening allocation', time: '16:00', venue: 'Online' } ] },
        { day: 'DAY 02', items: [
          { t: 'Strategy deep-dives', time: '10:00', venue: 'Strategy desk' },
          { t: 'Trading & rebalancing sessions', time: '13:00', venue: 'Strategy desk' },
          { t: 'Leaderboard checkpoint', time: '19:00', venue: 'Online' } ] },
        { day: 'DAY 03', items: [
          { t: 'Final portfolio valuation', time: '11:00', venue: 'Online' },
          { t: 'Leaderboard close', time: '14:00', venue: 'Online' },
          { t: 'Awards & analyst intros', time: '17:00', venue: 'Main stage' } ] }
      ],
      howTo: [
        { t: 'Register for the challenge — solo', d: 'No team required. No finance background required.' },
        { t: 'Learn the markets in the crash course', d: 'Candles, ratios, risk — the essentials in 90 minutes.' },
        { t: 'Trade & rebalance through the weekend', d: 'React to market moves and defend your portfolio.' },
        { t: 'Finish top of the leaderboard', d: 'The final valuation decides the rankings.' }
      ],
      prizes: [
        { tier: '1ST PLACE', v: '₹1,00,000' },
        { tier: '2ND PLACE', v: '₹50,000' },
        { tier: '3RD PLACE', v: '₹25,000' },
        { tier: 'SPECIAL AWARDS', v: 'Analyst-track intros · Paid internships' }
      ],
      keyDates: [
        { k: 'REGISTRATION', v: 'OPEN NOW' },
        { k: 'SIMULATION', v: 'LIVE — DAY 1–3' },
        { k: 'AWARDS', v: 'DAY 03 EVENING' }
      ],
      bring: ['Laptop', 'Market notes (optional)', 'Questions for the fund managers'],
      quote: { text: 'A weekend of simulated trading taught me more about risk than a semester of textbooks. And it landed me an analyst interview.', who: '— RANK #1, INVESTMENT CHALLENGE 2025' },
      audience: ['Finance students', 'Aspiring analysts', 'Traders', 'Quant enthusiasts'],
      chips: ['Simulation', 'Market data', 'Fund manager sessions', 'Live leaderboard', 'Analyst-track roles'],
      faq: [
        { q: 'I\'ve never traded before — is that OK?', a: 'Perfectly fine. The crash course covers everything from basics to allocation, and the simulation is beginner-friendly.' },
        { q: 'Is it real money?', a: 'No — it\'s a simulation with realistic market data. No risk, all learning, real leaderboard.' },
        { q: 'Do I need a finance background?', a: 'No. The best performers in 2025 included engineers, designers and data scientists.' }
      ]
    },
    {
      slug: 'careers',
      name: 'CAREERS',
      num: '05',
      title: 'THE CAREER SUMMIT',
      tagline: 'Meet recruiters. Build your profile. Land your next step.',
      meta: ['DAY 1–3', 'HIRING + WORKSHOPS', 'CAREER LOUNGE'],
      quickFacts: [
        { k: 'FORMAT', v: 'Hiring sessions + workshops' },
        { k: 'TEAM SIZE', v: 'Solo' },
        { k: 'ELIGIBILITY', v: 'All students' },
        { k: 'ENTRY', v: 'Free with festival pass' },
        { k: 'WHERE', v: 'Career lounge, campus' }
      ],
      intro: [
        'The Career Summit connects students with 100+ recruitment partners hiring for internships and full-time roles. The lounge runs continuous hiring sessions, technical interactions and talent discovery desks where recruiters meet students face to face.',
        'Support tracks run all weekend — resume clinics, mock interviews and career workshops — so every participant can sharpen their profile before walking into a recruiter conversation.'
      ],
      experience: [
        { t: 'Hiring sessions with 100+ partners', d: 'Continuous interview slots across 3 days.' },
        { t: 'Resume clinics & reviews', d: 'Recruiters give line-by-line feedback on your resume.' },
        { t: 'Mock interviews with recruiters', d: 'Real interview formats, zero consequences.' },
        { t: 'Technical interactions & talent discovery', d: 'Coding rounds and portfolio reviews on the floor.' },
        { t: 'Career workshops every day', d: 'Salary negotiation, personal branding, portfolio builds.' },
        { t: 'Full-time & internship opportunities', d: 'Offers made on the spot by partner companies.' }
      ],
      schedule: [
        { day: 'DAY 01', items: [
          { t: 'Career workshops', time: '10:00', venue: 'Career lounge' },
          { t: 'Resume clinics', time: '13:00', venue: 'Career lounge' },
          { t: 'Partner booths open', time: '12:00', venue: 'Expo hall' } ] },
        { day: 'DAY 02', items: [
          { t: 'Hiring sessions', time: '10:00', venue: 'Interview rooms' },
          { t: 'Technical interactions', time: '13:00', venue: 'Tech desks' },
          { t: 'Mock interview slots', time: '16:00', venue: 'Career lounge' } ] },
        { day: 'DAY 03', items: [
          { t: 'Recruiter networking', time: '11:00', venue: 'Expo hall' },
          { t: 'Offer & follow-up desk', time: '14:00', venue: 'Career lounge' },
          { t: 'Summit close', time: '18:00', venue: 'Career lounge' } ] }
      ],
      howTo: [
        { t: 'Register and upload your profile', d: 'Your profile is pre-shared with partners.' },
        { t: 'Fix your resume at a clinic', d: 'Line-by-line feedback from active recruiters.' },
        { t: 'Book hiring-session slots', d: 'Slots open right after registration — first come, first served.' },
        { t: 'Interview, network, and follow up', d: 'Every recruiter desk ends with a next step.' }
      ],
      prizes: [
        { tier: 'ON-THE-SPOT OFFERS', v: 'Internships & full-time roles' },
        { tier: 'TOP CANDIDATES', v: '₹50,000 in scholarships' },
        { tier: 'EVERY PARTICIPANT', v: 'Resume review + profile report' }
      ],
      keyDates: [
        { k: 'REGISTRATION', v: 'OPEN NOW — PROFILE REVIEWS' },
        { k: 'PARTNER LIST', v: '100+ COMPANIES — RELEASING SOON' },
        { k: 'HIRING DAYS', v: FESTIVAL.finale }
      ],
      bring: ['Printed resumes', 'Portfolio / GitHub link', 'A story about yourself', 'Confidence'],
      quote: { text: 'I walked into the lounge with a resume I was unsure about. I walked out three days later with an internship offer from a dream company.', who: '— CAREER SUMMIT ATTENDEE, 2025' },
      audience: ['Final-year students', 'Internship seekers', 'All skill levels'],
      chips: ['Recruitment partners', 'Talent discovery', 'Technical interactions', 'Hiring sessions', 'Career workshops', 'Industry networking'],
      faq: [
        { q: 'Which companies are hiring?', a: '100+ recruitment partners across tech, finance, consulting, media and more. The full list drops closer to the festival.' },
        { q: 'I\'m a first-year student — is this for me?', a: 'Yes. Workshops and mock interviews are open to all years, and several partners hire first-year interns.' },
        { q: 'How do I get hiring-session slots?', a: 'Slots open after registration on a first-come basis. Register early — the best slots go fast.' }
      ]
    },
    {
      slug: 'networking',
      name: 'NETWORKING',
      num: '06',
      title: 'CONNECT. COLLABORATE. BUILD.',
      tagline: 'The festival is the network. Come meet it.',
      meta: ['DAY 1–3', 'ALL-DAY', 'EVERYWHERE'],
      quickFacts: [
        { k: 'FORMAT', v: 'Mixers & themed tables' },
        { k: 'TEAM SIZE', v: 'Solo' },
        { k: 'ELIGIBILITY', v: 'Everyone' },
        { k: 'ENTRY', v: 'Free with festival pass' },
        { k: 'WHERE', v: 'Campus-wide' }
      ],
      intro: [
        'Networking at SkillGarage is the connective tissue of the whole festival — speed networking rounds, themed tables, and the founder × investor hour where the ecosystem does business in the open.',
        'Students, founders, investors, recruiters, creators and athletes share one campus. The conversations that start at a networking table tend to end up on stage, in a pitch, or at a hiring desk.'
      ],
      experience: [
        { t: 'Speed networking rounds', d: '8 minutes, 10 conversations, zero awkwardness.' },
        { t: 'Founder × investor hour', d: 'The ecosystem does business in the open, hourly.' },
        { t: 'Community & club booths', d: '100+ student communities and collectives on the floor.' },
        { t: 'Themed networking tables', d: 'Design, AI, climate, fintech — pick your table.' },
        { t: 'Late-night conversation zones', d: 'The best conversations happen after midnight.' },
        { t: 'Cross-discipline collaboration', d: 'Builders meet marketers. Athletes meet creators.' }
      ],
      schedule: [
        { day: 'DAY 01', items: [
          { t: 'Opening mixer', time: '17:00', venue: 'Main lawn' },
          { t: 'Community booths open', time: '12:00', venue: 'Expo hall' },
          { t: 'Speed networking round 01', time: '19:00', venue: 'Network hall' } ] },
        { day: 'DAY 02', items: [
          { t: 'Themed networking tables', time: '11:00', venue: 'Network hall' },
          { t: 'Founder × investor hour', time: '17:00', venue: 'Startup floor' },
          { t: 'Late-night zones', time: '22:00', venue: 'Night zone' } ] },
        { day: 'DAY 03', items: [
          { t: 'Showcase & collab hour', time: '14:00', venue: 'Expo hall' },
          { t: 'Closing connections', time: '19:00', venue: 'Main lawn' },
          { t: 'Festival wrap', time: '21:00', venue: 'Main stage' } ] }
      ],
      howTo: [
        { t: 'Register — networking comes with every pass', d: 'No separate sign-up needed.' },
        { t: 'Grab a speed-networking round', d: 'Rounds run hourly through the weekend.' },
        { t: 'Find your themed table', d: 'Topics rotate every 2 hours.' },
        { t: 'Keep the conversation going after the festival', d: 'Every table has a shared group — stay in it.' }
      ],
      prizes: [
        { tier: 'MOST-CONNECTED', v: '₹30,000 + featured profile' },
        { tier: 'BEST COLLAB', v: 'Awarded at the closing show' },
        { tier: 'COMMUNITY AWARDS', v: 'Clubs & collectives recognised' }
      ],
      keyDates: [
        { k: 'REGISTRATION', v: 'OPEN NOW' },
        { k: 'SPEED ROUNDS', v: 'DAY 1–3, HOURLY' },
        { k: 'FOUNDER × INVESTOR HOUR', v: 'DAY 02 EVENING' }
      ],
      bring: ['Business cards (if you have them)', 'A 30-second intro', 'Openness', 'Energy'],
      quote: { text: 'I came for the hackathon and stayed for the people. One table conversation became my co-founder, my first customer and my best friend.', who: '— NETWORKING HALL ATTENDEE, 2025' },
      audience: ['Students', 'Founders', 'Investors', 'Recruiters', 'Creators', 'Athletes'],
      chips: ['Speed networking', 'Founder × investor networking', 'Community interactions', 'Live sessions', 'Meet & greets'],
      faq: [
        { q: 'I\'m an introvert. Will this be overwhelming?', a: 'The tables are small by design — 6–8 people, guided prompts, and no pressure. You can also just observe at first.' },
        { q: 'What if I don\'t know anyone?', a: 'That\'s exactly who this is for. Everyone at a table is there to meet someone new. That\'s the point.' },
        { q: 'Can I bring my college club?', a: 'Yes — clubs and communities get booth space. Register your club and claim your spot on the floor.' }
      ]
    },
    {
      slug: 'creators',
      name: 'CREATORS',
      num: '07',
      title: 'THE CREATOR STAGE',
      tagline: 'Record, create, publish — in front of a live audience.',
      meta: ['DAY 1–3', 'BOOTCAMPS + LIVE', 'CREATOR LOUNGE'],
      quickFacts: [
        { k: 'FORMAT', v: 'Bootcamps + live challenges' },
        { k: 'TEAM SIZE', v: 'Solo or duo' },
        { k: 'ELIGIBILITY', v: 'Creators at any level' },
        { k: 'ENTRY', v: 'Free with festival pass' },
        { k: 'WHERE', v: 'Creator lounge, campus' }
      ],
      intro: [
        'The Creator Stage is a production floor for the next generation of Indian creators — bootcamps on short-form, podcasting and live production, collab rooms to film with new partners, and live sessions published from the festival itself.',
        'Across the weekend, podcasts are taped on stage, meet & greets bring creators face to face with their communities, and a content challenge gives every participant a reason to publish by day three.'
      ],
      experience: [
        { t: 'Creator bootcamps — short-form, podcast, live', d: 'Craft, distribution and monetization — taught by working creators.' },
        { t: 'Collab rooms & production kits', d: 'Lights, mics, backdrops — walk in, film in 10 minutes.' },
        { t: 'Podcasts & live sessions taped at the festival', d: 'Guests, stages and a live audience to perform for.' },
        { t: 'Meet & greets with top creators', d: 'Face-to-face with the creators you follow.' },
        { t: 'Content challenges with awards', d: 'Publish by day three — judged on craft, not followers.' },
        { t: 'Premiere screenings on the main stage', d: 'Your work on the big screen in front of everyone.' }
      ],
      schedule: [
        { day: 'DAY 01', items: [
          { t: 'Creator bootcamp', time: '11:00', venue: 'Creator lounge' },
          { t: 'Content challenge brief', time: '15:00', venue: 'Creator lounge' },
          { t: 'Collab room setup', time: '17:00', venue: 'Collab rooms' } ] },
        { day: 'DAY 02', items: [
          { t: 'Filming day', time: '10:00', venue: 'Campus-wide' },
          { t: 'Podcast tapings', time: '13:00', venue: 'Podcast stage' },
          { t: 'Meet & greets', time: '18:00', venue: 'Creator lounge' } ] },
        { day: 'DAY 03', items: [
          { t: 'Premieres', time: '15:00', venue: 'Main stage' },
          { t: 'Creator showcase', time: '17:00', venue: 'Expo hall' },
          { t: 'Content awards', time: '20:00', venue: 'Main stage' } ] }
      ],
      howTo: [
        { t: 'Register for the creator track', d: 'Solo or duo — any craft, any level.' },
        { t: 'Pick the bootcamp that fits your craft', d: 'Short-form, podcast, live production.' },
        { t: 'Film, write, record — with collab partners', d: 'Production kits and release-form templates ready.' },
        { t: 'Publish by day three & premiere on stage', d: 'The audience decides. The judges score.' }
      ],
      prizes: [
        { tier: 'BEST CONTENT', v: '₹1,00,000' },
        { tier: 'RUNNERS-UP', v: '₹40,000' },
        { tier: 'SPECIAL AWARDS', v: 'Creator gear · Brand collab intros' }
      ],
      keyDates: [
        { k: 'REGISTRATION', v: 'OPEN NOW' },
        { k: 'CHALLENGE BRIEF', v: 'DAY 01 MORNING' },
        { k: 'PREMIERES', v: 'DAY 03 EVENING' }
      ],
      bring: ['Camera or phone', 'Mic (if you have one)', 'Laptop', 'Ideas for your next video'],
      quote: { text: 'I filmed my first podcast on that stage with zero experience. The audience laughed, the guests stayed, and the episode crossed a million views.', who: '— CREATOR STAGE ALUM, 2025' },
      audience: ['Creators', 'Filmmakers', 'Writers', 'Podcasters', 'Photographers'],
      chips: ['Keynotes', 'Workshops', 'Meet & greets', 'Podcasts', 'Live sessions', 'Community interactions'],
      faq: [
        { q: 'I have 0 followers. Is this for me?', a: 'Absolutely — the challenge is judged on craft, not audience size. The 2025 winner started with 0 followers.' },
        { q: 'Can I use festival content for my channel?', a: 'Yes — with a simple credit tag. Collab rooms even have release-form templates ready.' },
        { q: 'Do I need my own gear?', a: 'Production kits — lights, mics, stands — are available in the collab rooms. Bring your camera or phone.' }
      ]
    },
    {
      slug: 'music',
      name: 'MUSIC',
      num: '08',
      title: 'THE MUSIC & CULTURE ARENA',
      tagline: 'Battle of the bands. Open mics. One unforgettable night.',
      meta: ['DAY 1–3', 'LIVE + COMPETITIONS', 'OUTDOOR STAGE'],
      quickFacts: [
        { k: 'FORMAT', v: 'Live performances + competition' },
        { k: 'TEAM SIZE', v: 'Bands 3–8, solo OK' },
        { k: 'ELIGIBILITY', v: 'All musicians' },
        { k: 'ENTRY', v: 'Free with festival pass' },
        { k: 'WHERE', v: 'Outdoor stage, campus' }
      ],
      intro: [
        'When the sun goes down, the campus becomes a venue. The Battle of the Bands runs across two nights, open mics give solo artists their shot, and the EDM night closes the festival under the stars.',
        'Production workshops through the day — sound, stagecraft, DJing — mean the stage isn\'t just watched, it\'s learned. Bonfire sets and acoustic corners keep the culture going late.'
      ],
      experience: [
        { t: 'Battle of the Bands — qualifiers to finals', d: 'Two nights of eliminations, one champion band.' },
        { t: 'Open mic & acoustic evenings', d: 'Every voice gets a stage. Sign up at the desk.' },
        { t: 'EDM night under the stars', d: 'Headliners, lasers and the whole campus jumping.' },
        { t: 'Music production & DJ workshops', d: 'Sound, stagecraft and decks — learn from pros.' },
        { t: 'Bonfire sets every night', d: 'Acoustic jams and late-night crowds.' },
        { t: 'Grand closing show', d: 'The final night belongs to the musicians.' }
      ],
      schedule: [
        { day: 'DAY 01', items: [
          { t: 'Open mic night', time: '19:00', venue: 'Outdoor stage' },
          { t: 'Acoustic corner', time: '22:00', venue: 'Bonfire zone' },
          { t: 'Production workshop 01', time: '14:00', venue: 'Music hall' } ] },
        { day: 'DAY 02', items: [
          { t: 'Battle of the Bands qualifiers', time: '17:00', venue: 'Outdoor stage' },
          { t: 'DJ & production workshop', time: '13:00', venue: 'Music hall' },
          { t: 'EDM night', time: '20:00', venue: 'Outdoor stage' } ] },
        { day: 'DAY 03', items: [
          { t: 'Battle finals', time: '18:00', venue: 'Outdoor stage' },
          { t: 'Grand closing show', time: '20:00', venue: 'Main stage' },
          { t: 'Festival afterglow', time: '23:00', venue: 'Bonfire zone' } ] }
      ],
      howTo: [
        { t: 'Register as a band or solo act', d: 'Bands of 3–8, solo artists, DJs — all welcome.' },
        { t: 'Submit your setlist for the qualifiers', d: '10-minute set for qualifiers, 20 for finals.' },
        { t: 'Play the open mic or battle nights', d: 'Warm up on the open mic first, if you want.' },
        { t: 'Make the finals & own the main stage', d: 'Original music gets extra marks from the judges.' }
      ],
      prizes: [
        { tier: 'BATTLE WINNERS', v: '₹75,000 + studio time' },
        { tier: 'RUNNERS-UP', v: '₹30,000' },
        { tier: 'SPECIAL AWARDS', v: 'Best original · Crowd favourite · Best DJ' }
      ],
      keyDates: [
        { k: 'REGISTRATION', v: 'OPEN NOW — SETLIST SLOTS' },
        { k: 'BATTLE QUALIFIERS', v: 'DAY 02' },
        { k: 'FINALS', v: 'DAY 03 NIGHT' }
      ],
      bring: ['Your instrument', 'Your voice', 'Setlist printed', 'Stage energy'],
      quote: { text: 'Our band had never played a crowd bigger than a college canteen. Two nights later we closed the festival on the main stage.', who: '— BAND, BATTLE FINALISTS 2025' },
      audience: ['Bands', 'Musicians', 'DJs', 'Singers', 'Music lovers'],
      chips: ['Battle of the Bands', 'Open mic', 'Live sets', 'Bonfire', 'Late-night culture'],
      faq: [
        { q: 'Do we need our own equipment?', a: 'No — the stage provides amps, drums and a PA system. Bring your instruments and any effects you like.' },
        { q: 'Can solo artists enter the battle?', a: 'Yes, there\'s a solo category, or you can join a band forming at the festival.' },
        { q: 'Is there a limit on setlist length?', a: 'Qualifiers are 10 minutes, finals 20 minutes. Original music is rewarded in judging.' }
      ]
    },
    {
      slug: 'campus',
      name: 'CAMPUS',
      num: '09',
      title: 'THE 3-DAY CAMPUS EXPERIENCE',
      tagline: 'Camp, compete, hack, connect — all on campus.',
      meta: ['3 DAYS', 'LIVE-IN', 'FULL CAMPUS'],
      quickFacts: [
        { k: 'FORMAT', v: 'Live-in festival experience' },
        { k: 'TEAM SIZE', v: 'Everyone' },
        { k: 'ELIGIBILITY', v: 'All participants' },
        { k: 'ENTRY', v: 'Festival pass' },
        { k: 'WHERE', v: 'Full campus' }
      ],
      intro: [
        'SkillGarage is not an event you attend — it\'s a campus you live in. Camping zones, food courts and snack stalls run around the clock, with a bonfire every night and late-night hacking rooms for teams that refuse to sleep.',
        'Everything — tournaments, pitches, keynotes, concerts — happens within a two-minute walk of your tent. Register for any track and the whole campus experience comes with it.'
      ],
      experience: [
        { t: 'Campus camping zones', d: 'Gender-segregated, monitored zones with charging points.' },
        { t: 'Food courts & snack stalls 24/7', d: 'Everything included with your pass — day and night.' },
        { t: 'Bonfire & night zones', d: 'Live sets, acoustic corners and late-night crowds.' },
        { t: 'Late-night hacking rooms', d: 'Open all night for teams that refuse to sleep.' },
        { t: 'Community competitions', d: 'Tug of war, quizzes, treasure hunts — everything counts.' },
        { t: 'One festival, one campus', d: 'Every track within a two-minute walk of your tent.' }
      ],
      schedule: [
        { day: 'DAY 01', items: [
          { t: 'Check-in & camp setup', time: '09:00', venue: 'Camping zones' },
          { t: 'Opening ceremony', time: '18:00', venue: 'Main stage' },
          { t: 'Night zone opens', time: '20:00', venue: 'Night zone' } ] },
        { day: 'DAY 02', items: [
          { t: 'Full day of events', time: '09:00', venue: 'Campus-wide' },
          { t: 'Food festival', time: '12:00', venue: 'Food court' },
          { t: 'Bonfire + late-night hacking', time: '21:00', venue: 'Bonfire zone' } ] },
        { day: 'DAY 03', items: [
          { t: 'Finals & awards', time: '10:00', venue: 'Main stage' },
          { t: 'Closing ceremony', time: '21:00', venue: 'Main stage' },
          { t: 'Camp wrap', time: '22:30', venue: 'Camping zones' } ] }
      ],
      howTo: [
        { t: 'Register for any track with a festival pass', d: 'One pass, every track, the full campus.' },
        { t: 'Get your camping zone assignment', d: 'Zone maps and gate details arrive 2 weeks before.' },
        { t: 'Live the festival around the clock', d: 'Events run from morning until after midnight.' },
        { t: 'Wrap with the closing ceremony', d: 'Leave with the merch drop and a lot of stories.' }
      ],
      prizes: [
        { tier: 'BEST CAMP', v: 'Trophy + ₹25,000' },
        { tier: 'BEST COLLEGE', v: 'Overall points trophy' },
        { tier: 'EVERYONE', v: 'Memories + merch drop' }
      ],
      keyDates: [
        { k: 'CHECK-IN', v: 'DAY 01 MORNING' },
        { k: 'CAMPING', v: 'DAY 1–3, ON CAMPUS' },
        { k: 'CLOSING', v: 'DAY 03 NIGHT' }
      ],
      bring: ['Tent (optional — zones provided)', 'Sleeping bag / bedsheet', 'Toiletries', 'Power bank', 'Extra energy'],
      quote: { text: 'Three days of camping, hacking and shouting at football finals. I left exhausted, wired, and already booking next year.', who: '— CAMPUS PASS HOLDER, 2025' },
      audience: ['Every participant', 'Teams', 'Supporters', 'Anyone showing up'],
      chips: ['Camping', 'Food', 'Snacks', 'Bonfire', 'Late-night hacking', 'Competitions', 'Community events'],
      faq: [
        { q: 'Do I need to camp to attend?', a: 'No — day passes exist. But campers get night-zone access, late-night hacking rooms and the bonfire experience.' },
        { q: 'What\'s the food situation?', a: 'Food courts, snack stalls and late-night counters run around the clock. Everything is included with the pass.' },
        { q: 'Is the campus safe?', a: 'Yes — security, medical and help desks operate 24/7, and camping zones are gender-segregated and monitored.' }
      ]
    }
  ];

  var CATS = window.SKILLGARAGE_CATEGORIES;

  function $(sel) { return document.querySelector(sel); }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function bySlug(slug) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i].slug === slug) return CATS[i];
    return null;
  }

  function renderCategory(cat) {
    document.title = cat.name + ' — ' + cat.title + ' | SkillGarage 2026';
    $('[data-kicker]').textContent = cat.num + ' / ' + cat.name;
    $('[data-title]').textContent = cat.title;
    $('[data-tagline]').textContent = cat.tagline;
    $('[data-catname]').textContent = cat.name;

    var metaChips = $('[data-meta]');
    cat.meta.forEach(function (m) { metaChips.appendChild(el('span', 'chip', m)); });

    var facts = $('[data-facts]');
    cat.quickFacts.forEach(function (f) {
      var card = el('div', 'fact-card');
      card.appendChild(el('span', 'fact-k', f.k));
      card.appendChild(el('span', 'fact-v', f.v));
      facts.appendChild(card);
    });

    var intro = $('[data-intro]');
    cat.intro.forEach(function (p) { intro.appendChild(el('p', 'body-copy', p)); });

    var qualify = $('[data-qualify]');
    if (qualify) {
      if (cat.qualify) {
        qualify.appendChild(el('b', '', cat.qualify.title));
        cat.qualify.rules.forEach(function (r) { qualify.appendChild(el('span', '', '\u2726 ' + r)); });
      } else {
        qualify.parentNode.removeChild(qualify);
      }
    }

    var expGrid = $('[data-experience]');
    cat.experience.forEach(function (x) {
      var item = el('div', 'exp-item');
      item.appendChild(el('span', 'exp-tick', '\u2713'));
      var txt = el('div', 'exp-txt');
      txt.appendChild(el('b', '', typeof x === 'string' ? x : x.t));
      if (typeof x !== 'string' && x.d) txt.appendChild(el('small', '', x.d));
      item.appendChild(txt);
      expGrid.appendChild(item);
    });

    var sched = $('[data-schedule]');
    cat.schedule.forEach(function (d) {
      var block = el('div', 'day-block');
      block.appendChild(el('div', 'day-block-head', d.day));
      d.items.forEach(function (it) {
        var row = el('div', 'day-row');
        row.appendChild(el('span', 'day-dot', ''));
        var txt = el('div', 'dr-txt');
        txt.appendChild(el('b', '', typeof it === 'string' ? it : it.t));
        if (typeof it !== 'string') txt.appendChild(el('small', '', it.time + ' \u00B7 ' + it.venue));
        row.appendChild(txt);
        block.appendChild(row);
      });
      sched.appendChild(block);
    });

    var howto = $('[data-howto]');
    cat.howTo.forEach(function (h, i) {
      var step = el('div', 'howto-step');
      step.appendChild(el('span', 'howto-num', '0' + (i + 1)));
      var txt = el('div', 'howto-txt');
      txt.appendChild(el('b', '', typeof h === 'string' ? h : h.t));
      if (typeof h !== 'string' && h.d) txt.appendChild(el('small', '', h.d));
      step.appendChild(txt);
      howto.appendChild(step);
    });

    var prizes = $('[data-prizes]');
    cat.prizes.forEach(function (p) {
      var row = el('div', 'prize-row');
      row.appendChild(el('span', 'prize-tier', p.tier));
      row.appendChild(el('span', 'prize-amt', p.v));
      prizes.appendChild(row);
    });

    var dates = $('[data-keydates]');
    cat.keyDates.forEach(function (d) {
      var row = el('div', 'keydate-row');
      row.appendChild(el('span', 'keydate-k', d.k));
      row.appendChild(el('span', 'keydate-v', d.v));
      dates.appendChild(row);
    });

    var bring = $('[data-bring]');
    cat.bring.forEach(function (b) { bring.appendChild(el('span', 'chip', b)); });

    var quoteBox = $('[data-quote]');
    quoteBox.appendChild(el('p', 'quote-text', '\u201C' + cat.quote.text + '\u201D'));
    quoteBox.appendChild(el('span', 'quote-who', cat.quote.who));

    var faqBox = $('[data-faq]');
    cat.faq.forEach(function (f) {
      var item = el('div', 'faq-item');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'faq-q';
      btn.textContent = f.q;
      btn.addEventListener('click', function () {
        item.classList.toggle('open');
        btn.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
      });
      item.appendChild(btn);
      item.appendChild(el('div', 'faq-a', f.a));
      faqBox.appendChild(item);
    });

    var aud = $('[data-audience]');
    cat.audience.forEach(function (a) { aud.appendChild(el('span', 'chip', a)); });

    var chips = $('[data-catchips]');
    cat.chips.forEach(function (c) { chips.appendChild(el('span', 'chip', c)); });

    var trail = $('[data-trail]');
    trail.innerHTML = 'SKILLGARAGE / ' + cat.name;

    var prev = $('[data-prev]');
    if (prev) {
      for (var i = 0; i < CATS.length; i++) {
        if (CATS[i].slug === cat.slug) {
          var p = CATS[(i + CATS.length - 1) % CATS.length];
          var n = CATS[(i + 1) % CATS.length];
          prev.textContent = '\u2190 ' + p.name;
          prev.href = 'category.html?cat=' + p.slug;
          var next = $('[data-next]');
          next.textContent = n.name + ' \u2192';
          next.href = 'category.html?cat=' + n.slug;
          break;
        }
      }
    }
    document.body.classList.add('cat-ready');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var params = new URLSearchParams(window.location.search);
    var slug = (params.get('cat') || '').toLowerCase();
    var cat = bySlug(slug) || CATS[0];
    renderCategory(cat);
  });
})(window, document);
