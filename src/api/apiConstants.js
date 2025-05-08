export const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const API_ENDPOINTS = {
  register: '/students',
  login: '/students/login',
  studentSearch: '/students/search',
  verifyOTP: '/students/verify-otp',
  createStaff: '/staffs',
  createIssues: '/issues',
  roomAvailability: '/rooms',
  fees: '/fees',
  changeRequest: '/change_request',
};
