/* ============================================================
   SKILLGARAGE — site-config.js
   Single configuration source for registration business rules.
   ============================================================ */
window.SKILLGARAGE_CONFIG = {
  eventName: 'SkillGarage 2026',
  maxTeamMembers: 4,
  minTeamMembers: 1,
  teamSizes: [1, 2, 3, 4],
  sports: ['Basketball', 'Football', 'Chess', 'Badminton', 'Boxing', 'Volleyball', 'Table Tennis'],
  apiEndpoint: '/api/register',
  requestTimeoutMs: 8000,
  fallbackLocalSubmission: true,
  payment: {
    enabled: false,
    gateway: 'razorpay',
    previewMessage: 'PAYMENT COMING SOON'
  },
  analytics: {
    enabled: true,
    hooks: ['registration_started', 'registration_type_selected',
            'registration_step_completed', 'registration_submitted',
            'registration_completed']
  }
};