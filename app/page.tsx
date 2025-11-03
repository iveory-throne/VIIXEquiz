"use client"

import { useState } from "react"
import QuizStart from "@/components/quiz-start"
import QuizQuestions from "@/components/quiz-questions"
import QuizResult from "@/components/quiz-result"

type QuizState = "start" | "questions" | "result"

export default function Page() {
  const [state, setState] = useState<QuizState>("start")
  const [scores, setScores] = useState<Record<string, number>>({})

  const handleStartQuiz = () => {
    setState("questions")
  }

  const handleComplete = (finalScores: Record<string, number>) => {
    setScores(finalScores)
    setState("result")
  }

  const handleRetry = () => {
    setScores({})
    setState("start")
  }

  return (
    <main className="min-h-screen bg-black">
      {state === "start" && <QuizStart onStart={handleStartQuiz} />}
      {state === "questions" && <QuizQuestions onComplete={handleComplete} />}
      {state === "result" && <QuizResult scores={scores} onRetry={handleRetry} />}
    </main>
  )
}
