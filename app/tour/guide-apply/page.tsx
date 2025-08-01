"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, User, Award, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function GuideApplyPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    position: "",
    degree: "",
    experience: "",
    specialty: "",
    availableDays: "",
    motivation: "",
    researchAreas: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("가이드 신청이 완료되었습니다! 심사 후 연락드리겠습니다.")
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
              <span className="text-lg font-semibold text-slate-800">가이드 신청</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">견학 가이드 신청</h1>
            <p className="text-gray-600">
              대전의 미래 과학 인재들과 여러분의 전문 지식을 나누어주세요
            </p>
          </div>

          {/* Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="text-center">
              <CardContent className="p-4">
                <Award className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                <h3 className="font-semibold mb-1">박사 학위</h3>
                <p className="text-sm text-gray-600">석사 이상 필수</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-4">
                <User className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                <h3 className="font-semibold mb-1">3년 이상 경력</h3>
                <p className="text-sm text-gray-600">관련 분야 경험</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-4">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                <h3 className="font-semibold mb-1">대전 소속</h3>
                <p className="text-sm text-gray-600">연구기관 근무</p>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <CardTitle>가이드 신청서</CardTitle>
              <CardDescription>
                아래 정보를 입력하여 가이드 신청을 해주세요. 심사 후 결과를 연락드리겠습니다.
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
                    <Label htmlFor="institution">소속 기관 *</Label>
                    <Input
                      id="institution"
                      value={formData.institution}
                      onChange={(e) => handleInputChange("institution", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="position">직책 *</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange("position", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="degree">최고 학위 *</Label>
                    <Select value={formData.degree} onValueChange={(value) => handleInputChange("degree", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="학위를 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="석사">석사</SelectItem>
                        <SelectItem value="박사">박사</SelectItem>
                        <SelectItem value="박사후연구원">박사후연구원</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">경력 연수 *</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="경력을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-5년">3-5년</SelectItem>
                      <SelectItem value="5-10년">5-10년</SelectItem>
                      <SelectItem value="10-15년">10-15년</SelectItem>
                      <SelectItem value="15년 이상">15년 이상</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="specialty">전문 분야 *</Label>
                  <Input
                    id="specialty"
                    value={formData.specialty}
                    onChange={(e) => handleInputChange("specialty", e.target.value)}
                    placeholder="예: 인공지능, 로봇공학, 생명과학 등"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="researchAreas">연구 분야</Label>
                  <Textarea
                    id="researchAreas"
                    value={formData.researchAreas}
                    onChange={(e) => handleInputChange("researchAreas", e.target.value)}
                    placeholder="현재 연구하고 있는 분야나 관심 있는 연구 주제를 설명해주세요"
                  />
                </div>

                <div>
                  <Label htmlFor="availableDays">가능한 요일</Label>
                  <Select value={formData.availableDays} onValueChange={(value) => handleInputChange("availableDays", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="가능한 요일을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="평일">평일</SelectItem>
                      <SelectItem value="주말">주말</SelectItem>
                      <SelectItem value="평일+주말">평일+주말</SelectItem>
                      <SelectItem value="협의 가능">협의 가능</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="motivation">신청 동기 *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="가이드 신청 동기와 학생들과 나누고 싶은 지식이나 경험을 작성해주세요"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                    가이드 신청하기
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