"use client";

const videos = [
  {
    id: "01",
    title: "పిట్టల కథలు | Telugu Moral Stories Telugu Kathalu",
    channel: "Kids Telugu Stories",
    views: "50K",
    likes: "0.6K",
    duration: "19m 31s",
    age: "52h ago",
    published: "17 May 2026 01:30",
  },
  {
    id: "02",
    title: "కుందేలు మరియు తాబేలు కథ | Rabbit & Turtle Story",
    channel: "Telugu Kids World",
    views: "39K",
    likes: "0.4K",
    duration: "21m 32s",
    age: "66h ago",
    published: "16 May 2026 11:45",
  },
  {
    id: "03",
    title: "తెలుగు కార్టూన్ కథలు | Funny Animal Stories",
    channel: "Bujji Birds TV",
    views: "36K",
    likes: "0.5K",
    duration: "28m 16s",
    age: "66h ago",
    published: "16 May 2026 11:38",
  },
];

export default function TopPage() {
  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#222] p-4 md:p-6">

      {/* TOP SECTION */}
      <div className="rounded-[35px] overflow-hidden bg-gradient-to-r from-[#7b61ff] via-[#8ec5ff] to-[#ffd4e5] p-6 md:p-8 shadow-xl">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">

          {/* TITLE */}
          <div>

            <h1 className="text-3xl md:text-5xl font-black">

              <span className="text-green-700">
                🐦 Birds & Animals
              </span>

              <span className="text-yellow-500">
                {" "}· Telugu Animations
              </span>

            </h1>

            <p className="mt-3 text-sm md:text-lg text-white font-medium">
              Telugu Kids Content — 2 Focused Categories · Full Videos Only
            </p>

          </div>

          {/* SEARCH */}
          <div className="flex items-center gap-3">

            <input
              type="text"
              placeholder="Search videos..."
              className="bg-white rounded-2xl px-5 py-3 w-[250px] outline-none shadow-md"
            />

            <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-6 py-3 rounded-2xl font-bold shadow-lg transition-all">
              Subscribe
            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">

          {[
            ["📹", "75", "Total Videos"],
            ["📺", "64", "Channels"],
            ["👁", "80K", "Max Views"],
            ["📈", "8K", "Avg Views"],
            ["🕒", "17m 48s", "Avg Duration"],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 shadow-lg"
            >

              <div className="text-3xl">
                {item[0]}
              </div>

              <h2 className="text-3xl font-black mt-2">
                {item[1]}
              </h2>

              <p className="text-gray-500 mt-1">
                {item[2]}
              </p>

            </div>
          ))}

        </div>

        {/* DATE BAR */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl mt-8 p-5 flex flex-wrap gap-6 justify-center shadow-lg">

          <div>📅 Last 3 Days</div>

          <div>⏱ Duration &gt;180s</div>

          <div>📆 19 May 2026</div>

          <div>🕐 Generated: 11:48 AM</div>

        </div>

      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-4 mt-8">

        <button className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white px-6 py-3 rounded-2xl font-bold shadow-lg">
          📋 All Videos
        </button>

        <button className="bg-white px-6 py-3 rounded-2xl shadow-md font-semibold">
          🐦 Birds & Animals Stories
        </button>

        <button className="bg-white px-6 py-3 rounded-2xl shadow-md font-semibold">
          🎬 Telugu Animations & Cartoons
        </button>

        <button className="bg-white px-6 py-3 rounded-2xl shadow-md font-semibold">
          🔥 Charts
        </button>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[35px] shadow-xl mt-8 overflow-hidden">

        {/* HEADER */}
        <div className="grid grid-cols-7 gap-4 bg-[#f5f0ff] p-5 font-bold text-gray-500 text-sm">

          <div>#</div>

          <div className="col-span-2">TITLE</div>

          <div>CHANNEL</div>

          <div>VIEWS</div>

          <div>DURATION</div>

          <div>PUBLISHED</div>

        </div>

        {/* ROWS */}
        {videos.map((video) => (
          <div
            key={video.id}
            className="grid grid-cols-7 gap-4 items-center p-5 border-t border-gray-100 hover:bg-[#faf7ff] transition-all"
          >

            {/* ID */}
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center font-bold">
                {video.id}
              </div>

            </div>

            {/* TITLE */}
            <div className="col-span-2">

              <h2 className="font-bold text-lg">
                ▶ {video.title}
              </h2>

            </div>

            {/* CHANNEL */}
            <div className="text-gray-600">
              {video.channel}
            </div>

            {/* VIEWS */}
            <div className="text-blue-600 font-bold">
              {video.views}
            </div>

            {/* DURATION */}
            <div>

              <span className="bg-[#f3e8ff] text-[#8b5cf6] px-4 py-2 rounded-full text-sm font-bold">
                {video.duration}
              </span>

            </div>

            {/* PUBLISHED */}
            <div className="text-gray-500 text-sm">
              {video.published}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}