"use client";

import { useVideos } from "../hooks/All_hooks_use";

export default function TopPage() {

const {
  videos,
  loading,
  error,
  category,

  fetchCategoryVideos,
  fetchTopViewedVideos,
  fetchRecentVideos,

  handleSearchVideos,
  handleScrapeVideos,
  handleCleanupVideos,

} = useVideos();

  return (

    <div className="min-h-screen bg-[#f5e6d3] p-5 md:p-8 text-[#fff8f0]">

      {/* MAIN CONTAINER */}
      <div className="bg-[#5d4037] rounded-[40px] overflow-hidden shadow-2xl">

        {/* TOP SECTION */}
        <div className="bg-gradient-to-r from-[#6d4c41] via-[#8d6e63] to-[#bcaaa4] p-6 md:p-8">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row justify-between gap-6">

            {/* TITLE */}
            <div>

              <h1 className="text-3xl md:text-5xl font-black text-[#fff8f0]">

                Birds & Animals

                <span className="text-[#ffe0b2]">
                  {" "}· Telugu Animations
                </span>

              </h1>

              <p className="mt-3 text-[#fbe9e7] text-sm md:text-lg">
                Telugu Kids Content — Full Videos Only
              </p>

            </div>

            {/* SEARCH */}
            <div className="flex items-center gap-3">

              <input
                type="text"
                placeholder="Search videos..."
                onChange={(e) =>
                  handleSearchVideos(e.target.value)
                }
                className="bg-[#fff8f0] text-black rounded-2xl px-5 py-3 w-[240px] md:w-[300px] outline-none shadow-md"
              />

              <button
                onClick={handleScrapeVideos}
                className="bg-[#5d4037] border border-white/20 hover:bg-[#4e342e] text-white px-6 py-3 rounded-2xl font-bold shadow-lg transition-all"
              >
                Scrape
              </button>

            </div>

          </div>
{/* FILTER BUTTONS */}
<div className="flex flex-wrap gap-4 mt-8">

  {/* ALL */}
  <button
    onClick={() =>
      fetchCategoryVideos("all")
    }
    className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 border

    ${
      category === "all"
        ? "bg-[#fff8f0] text-[#5d4037] shadow-xl scale-105 border-[#fff8f0]"
        : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
    }`}
  >
    📋 All Videos
  </button>


  {/* BIRDS */}
  <button
    onClick={() =>
      fetchCategoryVideos(
        "birds_animals"
      )
    }
    className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 border

    ${
      category === "birds_animals"
        ? "bg-white text-[#5d4037] shadow-xl scale-105 border-white"
        : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
    }`}
  >
    🐦 Birds Stories
  </button>


  {/* ANIMATION */}
  <button
    onClick={() =>
      fetchCategoryVideos(
        "animation"
      )
    }
    className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 border

    ${
      category === "animation"
        ? "bg-white text-[#5d4037] shadow-xl scale-105 border-white"
        : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
    }`}
  >
    🎬 Animations
  </button>


  {/* TOP VIEWED */}
<button
  onClick={fetchTopViewedVideos}
  className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 border

  ${
    category === "top_viewed"
      ? "bg-white text-[#5d4037] shadow-xl scale-105 border-white"
      : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
  }`}
>
  🔥 Top Viewed
</button>


{/* RECENT */}
<button
  onClick={fetchRecentVideos}
  className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 border

  ${
    category === "recent"
      ? "bg-white text-[#5d4037] shadow-xl scale-105 border-white"
      : "bg-[#8d6e63] text-[#f5e6d3] border-[#a1887f]"
  }`}
>
  🕒 Recent
</button>

 {/* CLEANUP */}
<button
  onClick={() =>
    handleCleanupVideos(3)
  }
  className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 border

  ${
    category === "cleanup"
      ? "bg-white text-[#5d4037] shadow-xl scale-105 border-white"
      : "bg-[#4e342e] text-[#fff8f0] border-[#8d6e63]"
  }`}
>
  🗑 Cleanup
</button>

</div>

        </div>

        {/* TABLE */}
        <div className="bg-[#6d4c41] rounded-[35px] shadow-xl m-6 overflow-hidden border border-[#8d6e63]">

          {/* TABLE HEADER */}
          <div className="grid grid-cols-9 gap-4 bg-[#795548] px-6 py-5 text-[#fff8f0] font-bold text-sm">

            <div>#</div>

            <div className="col-span-2">
              TITLE
            </div>

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

          {/* VIDEOS */}
          {!loading &&
            videos?.map((video, index) => (

              <div
                key={video.id || index}
                className="grid grid-cols-9 gap-4 items-center px-6 py-5 border-t border-[#8d6e63] hover:bg-[#795548] transition-all"
              >

                {/* NUMBER */}
                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-full bg-[#d7ccc8] text-[#5d4037] flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  <a
                    href={video.url}
                    target="_blank"
                    className="w-10 h-10 rounded-full border-2 border-[#d7ccc8] text-[#fff8f0] flex items-center justify-center hover:bg-[#8d6e63]"
                  >
                    ▶
                  </a>

                </div>

                {/* TITLE */}
                <div className="col-span-2">

                  <h2 className="font-bold text-[16px] leading-snug text-white">
                    {video.title}
                  </h2>

                </div>

                {/* CHANNEL */}
                <div className="text-[#ffe0b2]">
                  {video.channel}
                </div>

                {/* VIEWS */}
                <div className="text-white font-bold">
                  {video.views}
                </div>

                {/* LIKES */}
                <div className="text-green-300 font-bold">
                  👍 {video.likes}
                </div>

                {/* DURATION */}
                <div>

                  <span className="bg-[#d7ccc8] text-[#5d4037] px-4 py-2 rounded-full text-sm font-bold">
                    {video.duration}
                  </span>

                </div>

                {/* AGE */}
                <div className="text-[#ffe0b2]">
                  {video.hours_ago}h ago
                </div>

                {/* PUBLISHED */}
                <div className="text-[#efebe9] text-sm">
                  {video.published_at}
                </div>

              </div>
            ))}

        </div>

      </div>

    </div>
  );
}