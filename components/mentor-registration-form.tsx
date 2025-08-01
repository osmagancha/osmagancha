"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  User,
  GraduationCap,
  Phone,
  BadgeIcon as IdCard,
  Building,
  FileText,
  Shield,
  CheckCircle,
} from "lucide-react"
import { useState } from "react"

export function MentorRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // 개인정보
    name: "",
    phone: "",
    email: "",
    residentNumber: "",

    // 학력정보
    university: "",
    department: "",
    degree: "",
    graduationYear: "",

    // 경력정보
    currentPosition: "",
    institution: "",
    experience: "",
    specialties: "",

    // 추가정보
    motivation: "",
    availableTime: "",
    preferredSubjects: [] as string[],
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/mentors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          title: formData.currentPosition,
          department: formData.department,
          specialty: formData.specialties,
          education: `${formData.university} ${formData.degree}`,
          experience: formData.experience,
          institution: formData.institution,
        }),
      })

      if (response.ok) {
        alert('멘토 등록이 완료되었습니다!')
        // 폼 초기화
        setFormData({
          name: "",
          phone: "",
          email: "",
          residentNumber: "",
          university: "",
          department: "",
          degree: "",
          graduationYear: "",
          currentPosition: "",
          institution: "",
          experience: "",
          specialties: "",
          motivation: "",
          availableTime: "",
          preferredSubjects: [],
        })
        setCurrentStep(1)
      } else {
        alert('멘토 등록 중 오류가 발생했습니다.')
      }
    } catch (error) {
      console.error('Error submitting mentor registration:', error)
      alert('멘토 등록 중 오류가 발생했습니다.')
    }
  }

  const steps = [
    { id: 1, title: "개인정보", icon: User },
    { id: 2, title: "학력정보", icon: GraduationCap },
    { id: 3, title: "경력정보", icon: Building },
    { id: 4, title: "추가정보", icon: FileText },
  ]

  const subjects = [
    "인공지능",
    "컴퓨터공학",
    "전자공학",
    "기계공학",
    "화학공학",
    "생명과학",
    "물리학",
    "수학",
    "화학",
    "우주항공",
    "로봇공학",
    "바이오테크",
  ]

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  성명 *
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="홍길동"
                  className="border-gray-300 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  연락처 *
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="010-1234-5678"
                  className="border-gray-300 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이메일 주소 *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="example@email.com"
                className="border-gray-300 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <IdCard className="w-4 h-4 inline mr-1" />
                주민등록번호 *
              </label>
              <Input
                value={formData.residentNumber}
                onChange={(e) => handleInputChange("residentNumber", e.target.value)}
                placeholder="000000-0000000"
                className="border-gray-300 focus:border-indigo-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                <Shield className="w-3 h-3 inline mr-1" />
                개인정보는 암호화되어 안전하게 보관됩니다
              </p>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">출신 대학교 *</label>
                <Input
                  value={formData.university}
                  onChange={(e) => handleInputChange("university", e.target.value)}
                  placeholder="KAIST"
                  className="border-gray-300 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">학과/전공 *</label>
                <Input
                  value={formData.department}
                  onChange={(e) => handleInputChange("department", e.target.value)}
                  placeholder="컴퓨터공학과"
                  className="border-gray-300 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">최종 학위 *</label>
                <select
                  value={formData.degree}
                  onChange={(e) => handleInputChange("degree", e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">선택하세요</option>
                  <option value="학사">학사</option>
                  <option value="석사">석사</option>
                  <option value="박사">박사</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">졸업년도 *</label>
                <Input
                  value={formData.graduationYear}
                  onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                  placeholder="2020"
                  className="border-gray-300 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">현재 직책 *</label>
              <Input
                value={formData.currentPosition}
                onChange={(e) => handleInputChange("currentPosition", e.target.value)}
                placeholder="선임연구원, 교수, 연구소장 등"
                className="border-gray-300 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">소속 기관 *</label>
              <Input
                value={formData.institution}
                onChange={(e) => handleInputChange("institution", e.target.value)}
                placeholder="KAIST, 항공우주연구원, 대덕연구단지 등"
                className="border-gray-300 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">경력 사항 *</label>
              <Textarea
                value={formData.experience}
                onChange={(e) => handleInputChange("experience", e.target.value)}
                placeholder="주요 연구 경력, 프로젝트, 논문, 특허 등을 간략히 작성해주세요"
                className="min-h-32 border-gray-300 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">전문 분야 *</label>
              <Textarea
                value={formData.specialties}
                onChange={(e) => handleInputChange("specialties", e.target.value)}
                placeholder="인공지능, 머신러닝, 딥러닝, 자연어처리 등"
                className="border-gray-300 focus:border-indigo-500"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">멘토 지원 동기 *</label>
              <Textarea
                value={formData.motivation}
                onChange={(e) => handleInputChange("motivation", e.target.value)}
                placeholder="CSCT 멘토로 활동하고자 하는 이유와 학생들에게 전하고 싶은 메시지를 작성해주세요"
                className="min-h-32 border-gray-300 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">멘토링 가능 시간대</label>
              <Textarea
                value={formData.availableTime}
                onChange={(e) => handleInputChange("availableTime", e.target.value)}
                placeholder="평일 오후 2-6시, 주말 오전 등 멘토링 가능한 시간대를 작성해주세요"
                className="border-gray-300 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">멘토링 희망 분야 (복수 선택 가능)</label>
              <div className="grid grid-cols-3 gap-3">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    onClick={() => {
                      const current = formData.preferredSubjects
                      const updated = current.includes(subject)
                        ? current.filter((s) => s !== subject)
                        : [...current, subject]
                      setFormData((prev) => ({ ...prev, preferredSubjects: updated }))
                    }}
                    className={`p-3 text-sm border rounded-lg transition-all duration-200 ${
                      formData.preferredSubjects.includes(subject)
                        ? "bg-indigo-50 border-indigo-300 text-indigo-700"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      {/* Progress Steps */}
      <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        <div className="flex justify-center">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.id
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 border-indigo-500 text-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                </div>
                <div className="ml-2 text-sm font-medium text-gray-700">{step.title}</div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${currentStep > step.id ? "bg-indigo-500" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <Card className="mb-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
        <CardHeader>
          <CardTitle className="text-2xl text-slate-800 flex items-center">
            {steps[currentStep - 1].icon({ className: "w-6 h-6 mr-2 text-indigo-600" })}
            {steps[currentStep - 1].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">{renderStepContent()}</CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between animate-fade-in-up" style={{ animationDelay: "600ms" }}>
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="px-8"
        >
          이전
        </Button>

        {currentStep < steps.length ? (
          <Button
            onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8"
          >
            다음
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 px-8"
          >
            등록 신청하기
          </Button>
        )}
      </div>
    </>
  )
} 