"use client"

import { useState, useEffect } from "react"
import { questions, witches } from "@/lib/quiz-data"

interface QuizQuestionsProps {
  onComplete: (scores: Record<string, number>) => void
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function QuizQuestions({ onComplete }: QuizQuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>(Object.fromEntries(witches.map((w) => [w.id, 0])))
  const [shuffledAnswers, setShuffledAnswers] = useState<(typeof questions)[0]["answers"][]>([])

  useEffect(() => {
    // Shuffle answers for all questions on component mount
    const allShuffled = questions.map((q) => shuffleArray(q.answers || []))
    setShuffledAnswers(allShuffled)
  }, [])

  const handleAnswer = (witchId: string) => {
    const newScores = { ...scores, [witchId]: scores[witchId] + 1 }
    setScores(newScores)

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      onComplete(newScores)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const question = questions[currentQuestion]
  const currentAnswers = shuffledAnswers[currentQuestion] || []

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-black">
      <div className="w-full max-w-3xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-slate-300 text-sm font-bold uppercase">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-slate-400 text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-700">
            <div
              className="h-full bg-gradient-to-r from-slate-600 to-cyan-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question card */}
        <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{question.question}</h2>
        </div>

        {/* Answers */}
        <div className="space-y-3">
          {currentAnswers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.witchId)}
              className="w-full text-left p-5 bg-slate-900/40 border border-slate-700/60 hover:border-slate-600 rounded-xl transition-all hover:bg-slate-800/60 hover:shadow-lg hover:shadow-slate-900/30 active:scale-95 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border-2 border-slate-600 mt-1 group-hover:bg-slate-700 transition-all flex-shrink-0"></div>
                <span className="text-slate-300 group-hover:text-slate-100 transition-colors font-medium">
                  {answer.text}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-4 mt-12 opacity-25">
          <span className="text-lg text-white">✦</span>
          <span className="text-lg text-white">✦</span>
          <span className="text-lg text-white">✦</span>
        </div>
      </div>
    </div>
  )
}
