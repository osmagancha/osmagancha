"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Brain } from "lucide-react"
import { useState, useEffect } from "react"
import { Mentor } from "@/lib/database"
import { MentorCard } from "@/components/mentor-card"

interface MentorSearchProps {
  initialMentors: Mentor[]
}

export function MentorSearch({ initialMentors }: MentorSearchProps) {
  const [mentors, setMentors] = useState<Mentor[]>(initialMentors)
  const [searchTerm, setSearchTerm] = useState("")
  const [institutionFilter, setInstitutionFilter] = useState("모든 기관")
  const [availableFilter, setAvailableFilter] = useState("모든 상태")
  const [isLoading, setIsLoading] = useState(false)
  const [displayedMentors, setDisplayedMentors] = useState<Mentor[]>(initialMentors)

  const fetchMentors = async () => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams()
      if (institutionFilter !== "모든 기관") {
        params.append("institution", institutionFilter)
      }
      if (availableFilter === "온라인") {
        params.append("available", "true")
      } else if (availableFilter === "오프라인") {
        params.append("available", "false")
      }
      if (searchTerm) {
        params.append("search", searchTerm)
      }

      const response = await fetch(`/api/mentors?${params.toString()}`)
      const data = await response.json()
      
      if (data.mentors) {
        setMentors(data.mentors)
        setDisplayedMentors(data.mentors)
      }
    } catch (error) {
      console.error("Error fetching mentors:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMentors()
  }, [institutionFilter, availableFilter])

  const handleSearch = () => {
    fetchMentors()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <>
      {/* Search Section */}
      <div
        className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8 animate-fade-in-up"
        style={{ animationDelay: "200ms" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">어떤 분야에 관심이 있으신가요?</h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="관심 분야, 진로 목표, 궁금한 점을 자유롭게 입력하세요 (예: 인공지능으로 의료 분야에서 일하고 싶어요)"
                className="pl-12 py-4 text-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 px-8 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={handleSearch}
              disabled={isLoading}
            >
              <Brain className="w-5 h-5 mr-2" />
              {isLoading ? "검색 중..." : "AI 추천"}
            </Button>
          </div>

          {/* Quick Categories */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">인기 분야</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "인공지능",
                "우주항공",
                "생명과학",
                "로봇공학",
                "화학공학",
                "물리학",
                "수학",
                "컴퓨터공학",
                "바이오테크",
                "나노기술",
                "환경공학",
                "재료공학",
              ].map((tag, index) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 transition-all duration-300 px-3 py-1 hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => {
                    setSearchTerm(tag)
                    handleSearch()
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div
        className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white rounded-lg p-4 shadow-sm border border-gray-200 animate-fade-in-up"
        style={{ animationDelay: "400ms" }}
      >
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <span className="text-sm font-medium text-gray-700">필터:</span>
          <select 
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm hover:border-emerald-300 transition-colors duration-300"
            value={institutionFilter}
            onChange={(e) => setInstitutionFilter(e.target.value)}
          >
            <option>모든 기관</option>
            <option>KAIST</option>
            <option>항공우주연구원</option>
            <option>대덕연구단지</option>
            <option>충남대학교</option>
          </select>
          <select 
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm hover:border-emerald-300 transition-colors duration-300"
            value={availableFilter}
            onChange={(e) => setAvailableFilter(e.target.value)}
          >
            <option>모든 상태</option>
            <option>온라인</option>
            <option>오프라인</option>
          </select>
        </div>
        <div className="text-sm text-gray-600">
          총 <span className="font-semibold text-emerald-600">{displayedMentors.length}</span>명의 멘토
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {displayedMentors.map((mentor, index) => (
          <MentorCard key={mentor.id} mentor={mentor} index={index} />
        ))}
      </div>
    </>
  )
} 