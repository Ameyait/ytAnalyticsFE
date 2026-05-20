// services/videos_service.js

import axiosInstance from "../lib/axios";
import { API_ROUTES_VIDEOS } from "../constants/api_routes";


// ==============================
// SCRAPE VIDEOS
// ==============================

export const scrapeVideos = async () => {
  try {

    const response = await axiosInstance.post(
      API_ROUTES_VIDEOS.SCRAPE_VIDEOS
    );

    return response.data;

  } catch (error) {

    console.error("SCRAPE VIDEOS ERROR:", error);

    throw error;
  }
};


// ==============================
// CLEANUP VIDEOS
// ==============================

export const cleanupVideos = async (days = 3) => {
  try {

    const response = await axiosInstance.post(
      API_ROUTES_VIDEOS.CLEANUP_VIDEOS(days)
    );

    return response.data;

  } catch (error) {

    console.error("CLEANUP VIDEOS ERROR:", error);

    throw error;
  }
};


// ==============================
// GET ALL VIDEOS
// ==============================

export const getAllVideos = async () => {
  try {

    const response = await axiosInstance.get(
      API_ROUTES_VIDEOS.GET_ALL_VIDEOS
    );

    return response.data;

  } catch (error) {

    console.error("GET VIDEOS ERROR:", error);

    throw error;
  }
};


// ==============================
// GET PAGINATED VIDEOS
// ==============================

export const getPaginatedVideos = async (
  page = 1,
  limit = 20
) => {
  try {

    const response = await axiosInstance.get(
      API_ROUTES_VIDEOS.GET_PAGINATED_VIDEOS(
        page,
        limit
      )
    );

    return response.data;

  } catch (error) {

    console.error("PAGINATED VIDEOS ERROR:", error);

    throw error;
  }
};


// ==============================
// GET BIRDS VIDEOS
// ==============================

export const getBirdsVideos = async () => {
  try {

    const response = await axiosInstance.get(
      API_ROUTES_VIDEOS.GET_BIRDS_VIDEOS
    );

    return response.data;

  } catch (error) {

    console.error("BIRDS VIDEOS ERROR:", error);

    throw error;
  }
};


// ==============================
// GET ANIMATION VIDEOS
// ==============================

export const getAnimationVideos = async () => {
  try {

    const response = await axiosInstance.get(
      API_ROUTES_VIDEOS.GET_ANIMATION_VIDEOS
    );

    return response.data;

  } catch (error) {

    console.error("ANIMATION VIDEOS ERROR:", error);

    throw error;
  }
};


// ==============================
// SEARCH VIDEOS
// ==============================

export const searchVideos = async (search) => {
  try {

    const response = await axiosInstance.get(
      API_ROUTES_VIDEOS.SEARCH_VIDEOS(search)
    );

    return response.data;

  } catch (error) {

    console.error("SEARCH VIDEOS ERROR:", error);

    throw error;
  }
};


// ==============================
// GET TOP VIEWED VIDEOS
// ==============================

export const getTopViewedVideos = async (
  limit = 10
) => {
  try {

    const response = await axiosInstance.get(
      API_ROUTES_VIDEOS.GET_TOP_VIEWED(limit)
    );

    return response.data;

  } catch (error) {

    console.error("TOP VIEWED VIDEOS ERROR:", error);

    throw error;
  }
};


// ==============================
// GET RECENT VIDEOS
// ==============================

export const getRecentVideos = async (
  hours = 48
) => {
  try {

    const response = await axiosInstance.get(
      API_ROUTES_VIDEOS.GET_RECENT_VIDEOS(hours)
    );

    return response.data;

  } catch (error) {

    console.error("RECENT VIDEOS ERROR:", error);

    throw error;
  }
};


// ==============================
// GET HIGH VIEW VIDEOS
// ==============================

export const getHighViewVideos = async (
  views = 10000
) => {
  try {

    const response = await axiosInstance.get(
      API_ROUTES_VIDEOS.GET_HIGH_VIEW_VIDEOS(
        views
      )
    );

    return response.data;

  } catch (error) {

    console.error("HIGH VIEW VIDEOS ERROR:", error);

    throw error;
  }
};


// ==============================
// GET LONG VIDEOS
// ==============================

export const getLongVideos = async (
  seconds = 600
) => {
  try {

    const response = await axiosInstance.get(
      API_ROUTES_VIDEOS.GET_LONG_VIDEOS(
        seconds
      )
    );

    return response.data;

  } catch (error) {

    console.error("LONG VIDEOS ERROR:", error);

    throw error;
  }
};


// ==============================
// GET CHANNEL VIDEOS
// ==============================

export const getChannelVideos = async (
  channel
) => {
  try {

    const response = await axiosInstance.get(
      API_ROUTES_VIDEOS.GET_CHANNEL_VIDEOS(
        channel
      )
    );

    return response.data;

  } catch (error) {

    console.error("CHANNEL VIDEOS ERROR:", error);

    throw error;
  }
};