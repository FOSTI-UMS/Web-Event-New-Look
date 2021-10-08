import CONFIG from './config';

export default {
  getAllEvents: () => `${CONFIG.BASE_API_URL}/events`,
  getEventDetail: (slug) => `${CONFIG.BASE_API_URL}/event/${slug}`,
  createEvent: () => `${CONFIG.BASE_API_URL}/event`,
  joinEvent: () => `${CONFIG.BASE_API_URL}/join-event`,
};
