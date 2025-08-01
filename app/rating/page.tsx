"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { PremiumLogo } from "@/components/premium-logo"
import { Star, ArrowLeft, ThumbsUp, MessageCircle, Award, Send } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function RatingPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const mentor = {
    name: "김연구 박사",
    title: "KAIST 컴퓨터공학과 교수",
    image: "/placeholder.svg?height=80&width=80",
    sessionDuration: "45분",
    sessionTopic: "인공지능 진로 상담",
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmitRating = () => {
    if (rating === 0) return
    setIsSubmitted(true)
  }

  const ratingLabels = ["", "매우 불만족", "불만족", "보통", "만족", "매우 만족"]

  if (isSubmitted) {
    return (
      <div
        className={`min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/mentoring" className="flex items-center space-x-3 group">
                <ArrowLeft className="w-5 h-5 text-emerald-600 group-hover:-translate-x-1 transition-transform duration-300" />
                <PremiumLogo size="small" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <Card className="text-center animate-fade-in-up">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-slate-800 mb-4">평가 완료!</h1>
              <p className="text-gray-600 mb-8">
                소중한 피드백 감사합니다. 더 나은 멘토링 서비스를 위해 활용하겠습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/mentoring">
                  <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                    다른 멘토 찾기
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline">홈으로 돌아가기</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm animate-slide-down">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/mentoring" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-5 h-5 text-indigo-600 group-hover:-translate-x-1 transition-transform duration-300" />
              <PremiumLogo size="small" />
              <div className="text-sm text-gray-600">멘토링 평가</div>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Session Summary */}
        <Card className="mb-8 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-slate-800">멘토링 세션이 완료되었습니다</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <img
                src={mentor.image || "/placeholder.svg"}
                alt={mentor.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800">{mentor.name}</h3>
                <p className="text-indigo-600 text-sm">{mentor.title}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                  <span>세션 시간: {mentor.sessionDuration}</span>
                  <span>주제: {mentor.sessionTopic}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rating Section */}
        <Card className="mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <CardHeader>
            <CardTitle className="text-xl text-slate-800 flex items-center">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              멘토링 만족도를 평가해주세요
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className="flex justify-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-all duration-200 hover:scale-110"
                  >
                    <Star
                      className={`w-12 h-12 ${
                        star <= (hoverRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {(hoverRating || rating) > 0 && (
                <p className="text-lg font-medium text-slate-700 animate-fade-in">
                  {ratingLabels[hoverRating || rating]}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Feedback Section */}
        <Card className="mb-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <CardHeader>
            <CardTitle className="text-xl text-slate-800 flex items-center">
              <MessageCircle className="w-6 h-6 text-blue-500 mr-2" />
              추가 피드백 (선택사항)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="멘토링에 대한 구체적인 피드백을 남겨주세요. 좋았던 점, 개선할 점 등을 자유롭게 작성해주세요."
              className="min-h-32 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <div className="text-sm text-gray-500 mt-2">
              여러분의 소중한 의견은 멘토와 서비스 개선에 큰 도움이 됩니다.
            </div>
          </CardContent>
        </Card>

        {/* Quick Feedback Options */}
        <Card className="mb-8 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <CardHeader>
            <CardTitle className="text-xl text-slate-800 flex items-center">
              <ThumbsUp className="w-6 h-6 text-green-500 mr-2" />
              이런 점이 좋았어요 (복수 선택 가능)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {["전문적인 지식", "친근한 설명", "진로 방향 제시", "실무 경험 공유", "질문 답변", "시간 준수"].map(
                (option, index) => (
                  <button
                    key={index}
                    className="p-3 text-sm border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 text-left"
                  >
                    {option}
                  </button>
                ),
              )}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <Button
            onClick={handleSubmitRating}
            disabled={rating === 0}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 px-8 py-3 text-lg"
          >
            <Send className="w-5 h-5 mr-2" />
            평가 제출하기
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            평가는 익명으로 처리되며, 멘토 개선과 서비스 품질 향상에 활용됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}
