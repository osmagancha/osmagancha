"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TourApplyPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    groupSize: "",
    preferredDate: "",
    preferredTime: "",
    purpose: "",
    specialRequests: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 견학 신청 로직 추가
    alert("견학 신청이 완료되었습니다! 확인 후 연락드리겠습니다.")
    router.push("/tour")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/tour" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="text-lg font-semibold text-slate-800">견학 신청</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">견학 신청하기</h1>
            <p className="text-gray-600">
              KAIST, 항공우주연구원, 대덕연구단지의 연구 현장을 직접 체험해보세요
            </p>
          </div>

          {/* Available Tours */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "KAIST",
                description: "한국과학기술원",
                icon: "🏛️",
                duration: "2-3시간",
                capacity: "20명",
                location: "대전 유성구"
              },
              {
                title: "항공우주연구원",
                description: "한국항공우주연구원",
                icon: "🚀",
                duration: "2-3시간",
                capacity: "15명",
                location: "대전 유성구"
              },
              {
                title: "대덕연구단지",
                description: "대덕연구개발특구",
                icon: "🔬",
                duration: "3-4시간",
                capacity: "25명",
                location: "대전 유성구"
              }
            ].map((tour, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="text-3xl mb-2">{tour.icon}</div>
                  <CardTitle className="text-lg">{tour.title}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    최대 {tour.capacity}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {tour.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <CardTitle>견학 신청서</CardTitle>
              <CardDescription>
                아래 정보를 입력하여 견학을 신청해주세요. 확인 후 담당자가 연락드리겠습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">신청자명 *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">이메일 *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">연락처 *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="institution">소속 기관/학교</Label>
                    <Input
                      id="institution"
                      value={formData.institution}
                      onChange={(e) => handleInputChange("institution", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="groupSize">참여 인원 *</Label>
                    <Select value={formData.groupSize} onValueChange={(value) => handleInputChange("groupSize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="참여 인원을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5명</SelectItem>
                        <SelectItem value="6-10">6-10명</SelectItem>
                        <SelectItem value="11-15">11-15명</SelectItem>
                        <SelectItem value="16-20">16-20명</SelectItem>
                        <SelectItem value="20+">20명 이상</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="preferredDate">희망 날짜 *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="preferredTime">희망 시간대</Label>
                  <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="희망 시간대를 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">오전 (9:00-12:00)</SelectItem>
                      <SelectItem value="afternoon">오후 (13:00-17:00)</SelectItem>
                      <SelectItem value="flexible">시간 조율 가능</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="purpose">견학 목적 *</Label>
                  <Textarea
                    id="purpose"
                    value={formData.purpose}
                    onChange={(e) => handleInputChange("purpose", e.target.value)}
                    placeholder="견학을 통해 얻고자 하는 것, 관심 있는 분야 등을 작성해주세요"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="specialRequests">특별 요청사항</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    placeholder="장애인 편의시설, 특별한 관심 분야, 기타 요청사항이 있다면 작성해주세요"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                    견학 신청하기
                  </Button>
                  <Link href="/tour">
                    <Button type="button" variant="outline" className="flex-1">
                      취소
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 