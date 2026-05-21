"use client";

export default function RefreshModal({

  show,
  onClose,
  onConfirm,

}) {

  if (!show) return null;

  return (

    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999] px-4">

      <div className="bg-[#fff8f0] w-full max-w-md rounded-3xl shadow-2xl p-8 text-center animate-[fadeIn_.3s_ease]">

        {/* ICON */}
        <div className="text-5xl mb-4">
          🔄
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-black text-[#5d4037]">
          Refresh Videos?
        </h2>

        {/* TEXT */}
        <p className="text-[#795548] mt-3 text-sm md:text-base leading-6">

          Do you want to refresh
          and fetch latest videos?

        </p>

        {/* BUTTONS */}
        <div className="flex items-center justify-center gap-4 mt-8">

          {/* CANCEL */}
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-2xl bg-[#d7ccc8] text-[#5d4037] font-bold hover:scale-105 hover:bg-[#bcaaa4] transition-all duration-300"
          >
            Cancel
          </button>

          {/* OK */}
          <button
            onClick={onConfirm}
            className="px-6 py-3 rounded-2xl bg-[#5d4037] text-white font-bold hover:scale-105 hover:bg-[#4e342e] transition-all duration-300 shadow-lg"
          >
            OK
          </button>

        </div>

      </div>

    </div>
  );
}