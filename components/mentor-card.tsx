"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MessageCircle, Clock } from "lucide-react"
import { Mentor } from "@/lib/database"
import { useRouter } from "next/navigation"

interface MentorCardProps {
  mentor: Mentor
  index: number
}

export function MentorCard({ mentor, index }: MentorCardProps) {
  const router = useRouter()

  const handleStartChat = () => {
    if (mentor.available) {
      // 멘토 정보를 URL 파라미터로 전달하여 채팅 페이지로 이동
      router.push(`/chat?mentorId=${mentor.id}&mentorName=${encodeURIComponent(mentor.name)}`)
    }
  }

  return (
    <Card
      className="group hover:shadow-2xl transition-all duration-500 border border-gray-200 bg-white overflow-hidden hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${600 + index * 200}ms` }}
    >
      <CardHeader className="p-6 pb-4">
        <div className="flex items-start space-x-4">
          <Avatar className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
            <AvatarImage src={mentor.image || "/placeholder.svg"} alt={mentor.name} />
            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-slate-600 text-white text-lg font-semibold">
              {mentor.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-lg text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
              {mentor.name}
            </CardTitle>
            <CardDescription className="text-emerald-600 font-medium text-sm mb-1">
              {mentor.title}
            </CardDescription>
            <div className="text-xs text-gray-500">{mentor.department}</div>
          </div>
          <div
            className={`w-3 h-3 rounded-full ${mentor.available ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
          ></div>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6 space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">전문 분야</p>
          <div className="flex flex-wrap gap-1">
            {mentor.specialty.split(", ").map((spec, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors duration-300"
              >
                {spec}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-600 bg-gray-50 rounded-lg p-3 group-hover:bg-emerald-50 transition-colors duration-300">
          <div>
            <div className="flex items-center justify-center mb-1">
              <Star className="w-3 h-3 text-yellow-500 mr-1" />
              <span className="font-semibold">{mentor.rating}</span>
            </div>
            <div>평점</div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-1">
              <MessageCircle className="w-3 h-3 text-emerald-500 mr-1" />
              <span className="font-semibold">{mentor.sessions}</span>
            </div>
            <div>멘토링</div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-1">
              <Clock className="w-3 h-3 text-blue-500 mr-1" />
              <span className="font-semibold">{mentor.experience}</span>
            </div>
            <div>경력</div>
          </div>
        </div>

        <div className="text-xs text-gray-600">
          <p>
            <span className="font-medium">학력:</span> {mentor.education}
          </p>
          <p>
            <span className="font-medium">소속:</span> {mentor.institution}
          </p>
        </div>

        <Button
          onClick={handleStartChat}
          className={`w-full transition-all duration-300 ${
            mentor.available
              ? "bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 hover:shadow-lg"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!mentor.available}
        >
          {mentor.available ? (
            <>
              <MessageCircle className="w-4 h-4 mr-2" />
              멘토링 시작하기
            </>
          ) : (
            "현재 오프라인"
          )}
        </Button>
      </CardContent>
    </Card>
  )
} 