"use client"

import { witches } from "@/lib/quiz-data"
import Image from "next/image"

interface QuizResultProps {
  scores: Record<string, number>
  onRetry: () => void
}

export default function QuizResult({ scores, onRetry }: QuizResultProps) {
  const resultWitch = witches.reduce((prev, current) => (scores[current.id] > scores[prev.id] ? current : prev))

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-black">
      <div className="w-full max-w-2xl">
        {/* Result reveal */}
        <div className="text-center mb-12 space-y-6">
          <div>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold mb-4">Your Witch Identity</p>
            <div className="flex justify-center gap-3 mb-8 opacity-60">
              <span className="text-2xl text-white">✦</span>
              <span className="text-2xl text-white">✦</span>
              <span className="text-2xl text-white">✦</span>
            </div>
          </div>

          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">{resultWitch.name}</h2>
            <p className="text-2xl text-slate-300 font-semibold">{resultWitch.witchName}</p>
          </div>

          <div className="flex justify-center mt-8">
            <div className="relative w-48 h-64 rounded-2xl overflow-hidden border border-slate-700 shadow-lg shadow-slate-900/30">
              <Image
                src={resultWitch.image || "/placeholder.svg"}
                alt={resultWitch.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Result card */}
        <div className={`bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8 md:p-10 mb-8 space-y-8`}>
          {/* Symbol and Power */}
          <div className="grid md:grid-cols-2 gap-6 pb-8 border-b border-slate-700/30">
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Symbol</p>
              <p className="text-slate-100 text-lg font-semibold">{resultWitch.symbol}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Power</p>
              <p className="text-slate-100 text-lg font-semibold">{resultWitch.power}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">About You</p>
            <p className="text-slate-300 leading-relaxed">{resultWitch.description}</p>
          </div>

          {/* Traits */}
          <div className="space-y-3">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Your Traits</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {resultWitch.traits.map((trait) => (
                <div key={trait} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 text-center">
                  <p className="text-slate-200 text-sm font-medium">{trait}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onRetry}
            className="flex-1 py-4 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600 hover:shadow-lg hover:shadow-slate-900/30 active:scale-95 transition-all"
          >
            Take Quiz Again
          </button>
          <button
            onClick={() => {
              const text = `I'm ${resultWitch.name}, the ${resultWitch.witchName}! Which witch are you? 🔮✨`
              if (navigator.share) {
                navigator.share({ title: "Which Witch Are You?", text })
              } else {
                alert("Share: " + text)
              }
            }}
            className="flex-1 py-4 bg-slate-800 border border-slate-700 text-slate-300 font-bold rounded-xl hover:bg-slate-700 hover:text-slate-100 hover:shadow-lg hover:shadow-slate-900/30 active:scale-95 transition-all"
          >
            Share Result ✦
          </button>
        </div>
      </div>
    </div>
  )
}
