"use client"

interface QuizStartProps {
  onStart: () => void
}

export default function QuizStart({ onStart }: QuizStartProps) {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-black">
      <div className="w-full max-w-2xl text-center space-y-8">
        {/* VIIXE Logo */}
        <div className="flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aa67540d65e95f11c47b1855947f07b6-4je6UuuxV0llf59QNyvZuDyOYhnwa3.png"
            alt="VIIXE"
            className="h-20 hover:opacity-80 transition-opacity"
          />
        </div>

        <div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight text-white">
            Which <span className="text-slate-300">Witch</span> Are You?
          </h1>
          <p className="text-lg text-slate-300">Discover your inner witch from VIIXE</p>
          <p className="text-sm text-slate-400 mt-2">Seven witches. Seven destinies. Which one calls to you?</p>
        </div>

        <div className="bg-slate-900/50 border border-slate-700/60 rounded-2xl p-8 space-y-3">
          <p className="text-white font-semibold">✨ Answer 7 mystical questions</p>
          <p className="text-slate-300 text-sm">Each choice reveals which VIIXE witch resonates with your soul</p>
        </div>

        {/* Start button */}
        <button
          onClick={onStart}
          className="w-full py-4 bg-gradient-to-r from-slate-700 to-cyan-600 text-white font-bold rounded-xl text-lg uppercase tracking-wide transition-all hover:shadow-lg hover:shadow-slate-900/50 active:scale-95"
        >
          Begin Your Journey
        </button>

        {/* Decorative elements */}
        <div className="flex justify-center gap-4 opacity-40 pt-4">
          <span className="text-2xl text-white">◆</span>
          <span className="text-2xl text-white">◆</span>
          <span className="text-2xl text-white">◆</span>
        </div>
      </div>
    </div>
  )
}
