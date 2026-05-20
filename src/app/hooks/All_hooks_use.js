// hooks/All_hooks_use.js

"use client";

import { useEffect, useState } from "react";

import {
  getAllVideos,
  getBirdsVideos,
  getAnimationVideos,
  searchVideos,
  getTopViewedVideos,
  getRecentVideos,
  scrapeVideos,
  cleanupVideos,
} from "../services/all_services";

export const useVideos = () => {

  // =========================
  // STATES
  // =========================

  const [videos, setVideos] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("all");


  // =========================
  // GET ALL VIDEOS
  // =========================

  const fetchVideos = async () => {

    try {

      setLoading(true);

      setError(null);

      setCategory("all");

      const data =
        await getAllVideos();

      setVideos(
        data?.videos || []
      );

    } catch (err) {

      console.error(err);

      setError(
        "Failed to fetch videos"
      );

    } finally {

      setLoading(false);

    }
  };


  // =========================
  // CATEGORY FILTER
  // =========================

  const fetchCategoryVideos =
  async (selectedCategory) => {

    try {

      setLoading(true);

      setCategory(
        selectedCategory
      );

      // GET ALL VIDEOS
      const data =
        await getAllVideos();

      const allVideos =
        data.videos || [];

      // ALL
      if (
        selectedCategory ===
        "all"
      ) {

        setVideos(allVideos);

      }

      // BIRDS
      else if (
        selectedCategory ===
        "birds"
      ) {

        const filtered =
          allVideos.filter(
            (video) =>
              video.group_category ===
              "birds"
          );

        setVideos(filtered);

      }

      // CARTOON
      else if (
        selectedCategory ===
        "cartoon"
      ) {

        const filtered =
          allVideos.filter(
            (video) =>
              video.group_category ===
              "cartoon"
          );

        setVideos(filtered);

      }

    } catch (err) {

      console.error(err);

      setError(
        "Failed to filter videos"
      );

    } finally {

      setLoading(false);

    }
  };

  // =========================
  // SEARCH VIDEOS
  // =========================

  const handleSearchVideos =
    async (searchText) => {

      try {

        setLoading(true);

        setSearch(searchText);

        // EMPTY SEARCH
        if (
          searchText.trim() === ""
        ) {

          fetchVideos();

          return;
        }

        const data =
          await searchVideos(
            searchText
          );

        setVideos(
          data?.videos || []
        );

      } catch (err) {

        console.error(err);

        setError(
          "Search failed"
        );

      } finally {

        setLoading(false);

      }
    };


  // =========================
  // TOP VIEWED VIDEOS
  // =========================

  const fetchTopViewedVideos =
    async () => {

      try {

        setLoading(true);

        // ACTIVE BUTTON
        setCategory(
          "top_viewed"
        );

        const data =
          await getTopViewedVideos();

        setVideos(
          data?.videos || []
        );

      } catch (err) {

        console.error(err);

        setError(
          "Failed to fetch top viewed videos"
        );

      } finally {

        setLoading(false);

      }
    };


  // =========================
  // RECENT VIDEOS
  // =========================

  const fetchRecentVideos =
    async () => {

      try {

        setLoading(true);

        // ACTIVE BUTTON
        setCategory(
          "recent"
        );

        const data =
          await getRecentVideos();

        setVideos(
          data?.videos || []
        );

      } catch (err) {

        console.error(err);

        setError(
          "Failed to fetch recent videos"
        );

      } finally {

        setLoading(false);

      }
    };


  // =========================
  // SCRAPE VIDEOS
  // =========================

  const handleScrapeVideos =
    async () => {

      try {

        setLoading(true);

        setCategory(
          "scrape"
        );

        const response =
          await scrapeVideos();

        console.log(response);

        // REFRESH VIDEOS
        const updatedVideos =
          await getAllVideos();

        setVideos(
          updatedVideos?.videos || []
        );

      } catch (err) {

        console.error(err);

        setError(
          "Scraping failed"
        );

      } finally {

        setLoading(false);

      }
    };


  // =========================
  // CLEANUP VIDEOS
  // =========================

  const handleCleanupVideos =
    async (days = 3) => {

      try {

        setLoading(true);

        // ACTIVE BUTTON
        setCategory(
          "cleanup"
        );

        const response =
          await cleanupVideos(days);

        console.log(response);

        // REFRESH VIDEOS
        const updatedVideos =
          await getAllVideos();

        setVideos(
          updatedVideos?.videos || []
        );

      } catch (err) {

        console.error(err);

        setError(
          "Cleanup failed"
        );

      } finally {

        setLoading(false);

      }
    };


  // =========================
  // INITIAL LOAD
  // =========================

  useEffect(() => {

    fetchVideos();

  }, []);


  // =========================
  // RETURN
  // =========================

  return {

    videos,

    loading,

    error,

    search,

    category,

    setSearch,

    fetchVideos,

    fetchCategoryVideos,

    handleSearchVideos,

    fetchTopViewedVideos,

    fetchRecentVideos,

    handleScrapeVideos,

    handleCleanupVideos,

  };
};