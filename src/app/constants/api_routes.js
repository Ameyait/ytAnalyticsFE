// constants/apiroutes.js

export const API_ROUTES_VIDEOS = {

  // =========================
  // Scraping
  // =========================

  // Trigger Scraping
  SCRAPE: "/scrape/",

  // Cleanup old videos
  CLEANUP_VIDEOS: (days = 3) =>
    `/cleanup?days=${days}`,


  // =========================
  // Videos
  // =========================

  // Get all videos
  GET_ALL_VIDEOS: "/videos",

  // Get paginated videos
  GET_PAGINATED_VIDEOS: (page = 1, limit = 50) =>
    `/videos?page=${page}&limit=${limit}`,

  // =========================
  // Categories
  // =========================

  // Birds & Animals videos
  GET_BIRDS_VIDEOS:
    "/videos?category=birds_animals",

  // Telugu Animations
  GET_ANIMATION_VIDEOS:
    "/videos?category=animation",


  // =========================
  // Search
  // =========================

  // Search videos
  SEARCH_VIDEOS: (search) =>
    `/videos?search=${search}`,


  // =========================
  // Filters
  // =========================

  // Top viewed videos
  GET_TOP_VIEWED: (limit = 10) =>
    `/videos?limit=${limit}&sort_by=views&sort_order=desc`,

  // Videos uploaded within hours
  GET_RECENT_VIDEOS: (hours = 48) =>
    `/videos?hours_ago_max=${hours}`,

  // Minimum views
  GET_HIGH_VIEW_VIDEOS: (views = 10000) =>
    `/videos?min_views=${views}`,

  // Minimum duration
  GET_LONG_VIDEOS: (seconds = 600) =>
    `/videos?min_duration=${seconds}`,

  // Channel specific videos
  GET_CHANNEL_VIDEOS: (channel) =>
    `/videos?channel=${channel}`,


  // =========================
  // Combined Filters
  // =========================

  // Birds videos sorted by views
  GET_TOP_BIRDS_VIDEOS:
    "/videos?category=birds_animals&sort_by=views&sort_order=desc",

  // Animation search
  SEARCH_ANIMATION_VIDEOS: (search) =>
    `/videos?category=animation&search=${search}`,

};