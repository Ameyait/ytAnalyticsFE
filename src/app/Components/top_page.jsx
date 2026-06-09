"use client";

import { useState } from "react";

import { useVideos } from "../hooks/All_hooks_use";

import RefreshModal from "./RefreshModal";

export default function TopPage() {

  const {
    videos,
    loading,
    error,
    category,

    fetchCategoryVideos,
    fetchTopViewedVideos,
    fetchRecentVideos,

    lastRefreshed,

    handleSearchVideos,
    handleScrapeVideos,

  } = useVideos();


  // =========================
  // MODAL STATE
  // =========================

  const [showRefreshModal,
    setShowRefreshModal] =
    useState(false);


  // =========================
  // CONFIRM REFRESH
  // =========================

  const confirmRefresh =
  () => {

    // CLOSE MODAL IMMEDIATELY
    setShowRefreshModal(false);

    // RUN SCRAPE IN BACKGROUND
    handleScrapeVideos();

  };


  return (

    <>

      {/* REFRESH MODAL */}
      <RefreshModal

        show={showRefreshModal}

        onClose={() =>
          setShowRefreshModal(false)
        }

        onConfirm={confirmRefresh}

      />


      <div className="min-h-screen bg-[#f5e6d3] p-2 md:p-8 text-[#fff8f0] overflow-x-hidden">

        {/* MAIN CONTAINER */}
        <div className="bg-[#5d4037] rounded-[20px] md:rounded-[40px] overflow-visible shadow-2xl">

          {/* TOP SECTION */}
          <div className="bg-gradient-to-r from-[#6d4c41] via-[#8d6e63] to-[#bcaaa4] p-4 md:p-8 overflow-visible">

            {/* HEADER */}
            <div className="flex flex-col gap-5">

              {/* TITLE */}
              <div>

                <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#fff8f0] leading-tight">

                  Youtube

                  <span className="text-[#ffe0b2] block sm:inline">
                    {" "}· Analysis
                  </span>

                </h1>

              <p className="mt-3 text-[#fbe9e7] text-sm md:text-lg leading-6">

  Last Refreshed :

  {" "}

  {lastRefreshed
    ?.replace("IST", "")
    ?.replace("at", "•")
    ?.trim() ||

    "Not Available"}

</p>

              </div>


              {/* SEARCH + REFRESH */}
              <div className="flex items-center gap-3 w-full">

                <input
                  type="text"
                  placeholder="Search videos..."
                  onChange={(e) =>
                    handleSearchVideos(
                      e.target.value
                    )
                  }
                  className="flex-1 bg-[#fff8f0] text-black rounded-2xl px-5 py-4 text-sm md:text-base outline-none shadow-md"
                />

               {/* REFRESH BUTTON */}
<button
  type="button"
  onClick={() => {
    console.log(
      "REFRESH CLICKED"
    );

    setShowRefreshModal(true);
  }}
  className="bg-[#5d4037] border border-white/20 hover:bg-[#4e342e] text-white px-5 py-3 rounded-2xl text-xs md:text-sm font-semibold tracking-wide shadow-lg transition-all duration-300 whitespace-nowrap hover:scale-105 hover:-translate-y-1 hover:shadow-2xl active:scale-95 cursor-pointer relative z-50"
>
  Refresh
</button>


              </div>

            </div>


            {/* FILTER BUTTONS */}
            <div className="flex gap-5 mt-6 overflow-x-auto overflow-y-visible py-5 px-2 whitespace-nowrap scrollbar-hide relative">

              {/* ALL */}
              <button
                onClick={() =>
                  fetchCategoryVideos("all")
                }
                className={`px-4 md:px-6 py-3 rounded-2xl shrink-0 relative text-xs sm:text-sm md:text-base font-bold transition-all duration-300 border hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:z-50 hover:border-white/60

                ${
                  category === "all"
                    ? "bg-[#fff8f0] text-[#5d4037] shadow-xl scale-105 border-[#fff8f0]"
                    : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
                }`}
              >
                All Videos 📋
              </button>


              {/* MORAL */}
              <button
                onClick={() =>
                  fetchCategoryVideos(
                    "moral"
                  )
                }
                className={`px-4 md:px-6 py-3 rounded-2xl shrink-0 relative text-xs sm:text-sm md:text-base font-bold transition-all duration-300 border hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:z-50 hover:border-white/60

                ${
                  category ===
                  "moral"
                    ? "bg-white text-[#5d4037] shadow-xl scale-105 border-white"
                    : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
                }`}
              >
                Moral 🎬
              </button>


              {/* BIRDS */}
              <button
                onClick={() =>
                  fetchCategoryVideos(
                    "birds"
                  )
                }
                className={`px-4 md:px-6 py-3 rounded-2xl shrink-0 relative text-xs sm:text-sm md:text-base font-bold transition-all duration-300 border hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:z-50 hover:border-white/60

                ${
                  category ===
                  "birds"
                    ? "bg-white text-[#5d4037] shadow-xl scale-105 border-white"
                    : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
                }`}
              >
                Birds 🐦
              </button>
              {/* KIDS */}
<button
  onClick={() =>
    fetchCategoryVideos(
      "kids"
    )
  }
  className={`px-4 md:px-6 py-3 rounded-2xl shrink-0 relative text-xs sm:text-sm md:text-base font-bold transition-all duration-300 border hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:z-50 hover:border-white/60

  ${
    category ===
    "kids"
      ? "bg-white text-[#5d4037] shadow-xl scale-105 border-white"
      : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
  }`}
>
  Kids 🎈
</button>

{/* RHYMES */}
<button
  onClick={() =>
    fetchCategoryVideos(
      "rhymes"
    )
  }
  className={`px-4 md:px-6 py-3 rounded-2xl shrink-0 relative text-xs sm:text-sm md:text-base font-bold transition-all duration-300 border hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:z-50 hover:border-white/60

  ${
    category ===
    "rhymes"
      ? "bg-white text-[#5d4037] shadow-xl scale-105 border-white"
      : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
  }`}
>
  Rhymes 🎵
</button>

{/*
              {/* TOP VIEWED 
              <button
                onClick={
                  fetchTopViewedVideos
                }
                className={`px-4 md:px-6 py-3 rounded-2xl shrink-0 relative text-xs sm:text-sm md:text-base font-bold transition-all duration-300 border hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:z-50 hover:border-white/60

                ${
                  category ===
                  "top_viewed"
                    ? "bg-white text-[#5d4037] shadow-xl scale-105 border-white"
                    : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
                }`}
              >
                Top Viewed 🔥
              </button>


               {/* RECENT 
                <button
                onClick={
                  fetchRecentVideos
                }
                className={`px-4 md:px-6 py-3 rounded-2xl shrink-0 relative text-xs sm:text-sm md:text-base font-bold transition-all duration-300 border hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:z-50 hover:border-white/60

                ${
                  category ===
                  "recent"
                    ? "bg-white text-[#5d4037] shadow-xl scale-105 border-white"
                    : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
                }`}
              >
                Recent 🕒.
              </button> */}

            </div>

          </div>


          {/* TABLE SECTION */}
          <div className="bg-[#6d4c41] rounded-[20px] md:rounded-[35px] shadow-xl m-2 md:m-6 border border-[#8d6e63] overflow-hidden">

            {/* HORIZONTAL SCROLL */}
            <div className="overflow-x-auto scroll-smooth">

              <div className="min-w-[1200px] md:min-w-[1400px]">

                {/* TABLE HEADER */}
                <div className="grid grid-cols-[80px_320px_220px_90px_90px_130px_110px_180px] gap-6 bg-[#795548] px-4 md:px-6 py-4 md:py-5 text-[#fff8f0] font-bold text-xs md:text-sm whitespace-nowrap">

                  <div>#</div>

                  <div>TITLE</div>

                  <div>CHANNEL</div>

                  <div>VIEWS</div>

                  <div>LIKES</div>

                  <div>DURATION</div>

                  <div>AGE</div>

                  <div>PUBLISHED</div>

                </div>


                {/* LOADING */}
                {loading && (
                  <div className="p-10 text-center text-white">
                    Loading videos...
                  </div>
                )}


                {/* ERROR */}
                {error && (
                  <div className="p-10 text-center text-red-300">
                    {error}
                  </div>
                )}


                {/* VIDEO ROWS */}
                {!loading &&
                  Array.isArray(videos) &&
                  videos.map((video, index) => (

                    <div
                      key={video.id || index}
                      className="grid grid-cols-[80px_320px_220px_90px_90px_130px_110px_180px] gap-6 items-center px-4 md:px-6 py-4 md:py-5 border-t border-[#8d6e63] hover:bg-[#7b5a50] hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                    >

                      {/* NUMBER + PLAY */}
                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-full bg-[#d7ccc8] text-[#5d4037] flex items-center justify-center font-bold text-sm transition-all duration-300 hover:rotate-12 hover:scale-110">
                          {index + 1}
                        </div>

                        <a
                          href={video.url}
                          target="_blank"
                          className="w-10 h-10 rounded-full border-2 border-[#d7ccc8] text-[#fff8f0] flex items-center justify-center hover:bg-[#8d6e63] hover:scale-110 transition-all duration-300"
                        >
                          ▶
                        </a>

                      </div>


                      {/* TITLE */}
                      <div className="pr-10 min-w-[320px]">

                        <h2 className="font-bold text-xs sm:text-sm md:text-[16px] leading-6 text-white break-words">
                          {video.title}
                        </h2>

                      </div>


                    {/* CHANNEL */}
<div className="pl-4 min-w-[220px]">

  <a
    href={video.channel_url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#ffe0b2] text-xs md:text-sm font-semibold leading-5 hover:text-white transition-all duration-300 hover:underline"
  >

    {video.channel}

  </a>

</div>
                      {/* VIEWS */}
                      <div className="text-white font-bold text-xs md:text-sm">
                        {video.views}
                      </div>


                      {/* LIKES */}
                      <div className="text-green-300 font-bold text-xs md:text-sm">
                        👍 {video.likes}
                      </div>


                      {/* DURATION */}
                      <div>

                        <span className="bg-[#d7ccc8] text-[#5d4037] px-4 py-2 rounded-full text-xs md:text-sm font-bold">
                          {video.duration}
                        </span>

                      </div>


                      {/* AGE */}
                      <div className="text-[#ffe0b2] text-xs md:text-sm">
                        {video.hours_ago}h ago
                      </div>


                      {/* PUBLISHED */}
                      <div className="text-[#efebe9] text-xs md:text-sm leading-5">

                        {new Date(video.published_at)
                          .toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}

                        <div className="text-[#d7ccc8] text-[11px] md:text-xs mt-1">

                          {new Date(video.published_at)
                            .toLocaleTimeString(
                              "en-US",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )}

                        </div>

                      </div>

                    </div>
                  ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}