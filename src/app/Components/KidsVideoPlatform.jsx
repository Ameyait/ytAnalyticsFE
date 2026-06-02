"use client";

import React, { useState } from "react";


export default function KidsVideoPlatform() {
  const videos = [
    {
      id: 1,
      category: 'birds',
      title: 'Chinna Pitta Telugu Story',
      image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=1200&auto=format&fit=crop',
      views: '50K',
      likes: '0.6K',
      duration: '19:31',
    },
    {
      id: 2,
      category: 'animals',
      title: 'Rabbit & Turtle Story',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
      views: '39K',
      likes: '0.4K',
      duration: '21:32',
    },
    {
      id: 3,
      category: 'animations',
      title: 'Telugu Kids Animation',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      views: '36K',
      likes: '0.5K',
      duration: '28:16',
    },
    {
      id: 4,
      category: 'birds',
      title: 'Bird Adventure Forest',
      image: 'https://images.unsplash.com/photo-1501706362039-c6e13b4c4c1c?q=80&w=1200&auto=format&fit=crop',
      views: '28K',
      likes: '0.4K',
      duration: '22:15',
    },
    {
      id: 5,
      category: 'animals',
      title: 'Cute Animal Story',
      image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1200&auto=format&fit=crop',
      views: '24K',
      likes: '0.3K',
      duration: '20:44',
    },
    {
      id: 6,
      category: 'animations',
      title: 'Fun Telugu Cartoons',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
      views: '31K',
      likes: '0.5K',
      duration: '17:52',
    },
  ]

  const filters = [
    { key: 'all', label: '📋 All Videos' },
    { key: 'birds', label: '🐦 Birds Stories' },
    { key: 'animals', label: '🦁 Animals Stories' },
    { key: 'animations', label: '🎬 Telugu Animations' },
  ]

  const [active, setActive] = useState("all");

  const filteredVideos =
    active === 'all'
      ? videos
      : videos.filter((video) => video.category === active)

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-black to-slate-950 opacity-90" />

      <div className="relative z-10 px-4 md:px-8 lg:px-12 py-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-green-300 to-yellow-400 bg-clip-text text-transparent">
              🐦 Birds & Animals · 🎬 Telugu Animations
            </h1>
            <p className="text-gray-300 mt-3 text-sm md:text-lg">
              Telugu Kids Content — 2 Focused Categories · Full Videos Only
            </p>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full lg:w-80 bg-white/10 border border-white/10 rounded-2xl px-5 py-3 outline-none backdrop-blur-xl"
            />

            <button className="bg-gradient-to-r from-pink-500 to-orange-500 px-5 py-3 rounded-2xl font-semibold shadow-xl">
              Subscribe
            </button>
          </div>
        </div>

        {/* HERO */}
        <div className="relative rounded-[35px] overflow-hidden mb-8 border border-white/10 backdrop-blur-2xl bg-white/5">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center p-8 md:p-14">
            <div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Welcome to
                <span className="block bg-gradient-to-r from-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                  Kids Story World ✨
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-8 mb-8 max-w-xl">
                Watch colorful Telugu animations, bird stories, moral tales,
                and fun animal adventures for kids.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition">
                  ▶ Watch Latest Video
                </button>

                <button className="bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-semibold backdrop-blur-xl hover:bg-white/20 transition">
                  About Channel
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1501706362039-c6e13b4c4c1c?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
              ].map((img, i) => (
                <div
                  key={i}
                  className="rounded-3xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl"
                >
                  <img
                    src={img}
                    className="w-full h-36 md:h-44 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          {[
            ['🎥', '75', 'Total Videos'],
            ['📺', '64', 'Channels'],
            ['👁', '80K', 'Max Views'],
            ['📊', '8K', 'Avg Views'],
            ['⏱', '17m 48s', 'Avg Duration'],
            ['🕐', '11:48 AM', 'Generated'],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-2xl hover:bg-white/10 transition shadow-2xl"
            >
              <div className="text-3xl mb-3">{item[0]}</div>
              <h3 className="text-3xl font-black">{item[1]}</h3>
              <p className="text-gray-400 mt-2 text-sm">{item[2]}</p>
            </div>
          ))}
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActive(filter.key)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                active === filter.key
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* VIDEOS GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white/5 border border-white/10 rounded-[28px] overflow-hidden backdrop-blur-2xl hover:bg-white/10 transition-all duration-500 shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.image}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm font-semibold">
                  {video.duration}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {video.title}
                </h3>

                <div className="flex items-center justify-between mb-5 text-sm text-gray-400">
                  <span>👁 {video.views}</span>
                  <span>👍 {video.likes}</span>
                  <span>⭐ 4.9</span>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-2xl">
                  ▶ Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-2xl flex flex-wrap gap-6 justify-center text-center">
          <div>
            <h4 className="font-bold text-pink-400">🎬 Full Videos Only</h4>
            <p className="text-gray-400 text-sm mt-1">Long-form safe content</p>
          </div>

          <div>
            <h4 className="font-bold text-green-400">🛡 Safe & Kid Friendly</h4>
            <p className="text-gray-400 text-sm mt-1">Educational & Fun</p>
          </div>

          <div>
            <h4 className="font-bold text-yellow-400">😊 Moral Learning</h4>
            <p className="text-gray-400 text-sm mt-1">Stories with values</p>
          </div>
        </div>
      </div>
    </div>
  )
}
