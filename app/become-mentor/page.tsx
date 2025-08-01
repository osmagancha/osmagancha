import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PremiumLogo } from "@/components/premium-logo"
import { GovernmentPartnership } from "@/components/government-partnership"
import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"
import { MentorRegistrationForm } from "@/components/mentor-registration-form"

export default function BecomeMentorPage() {



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm animate-slide-down">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-5 h-5 text-indigo-600 group-hover:-translate-x-1 transition-transform duration-300" />
              <PremiumLogo size="normal" />
            </Link>
            <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200">
              멘토 등록
            </Badge>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            CSCT 멘토 등록
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            대전의 미래 과학 인재들과 여러분의 전문 지식을 나누어주세요. 정부 인증 플랫폼에서 안전하고 체계적인 멘토링을
            제공합니다.
          </p>
          <GovernmentPartnership />
        </div>

        <MentorRegistrationForm />

        {/* Requirements Notice */}
        <Card
          className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 animate-fade-in-up"
          style={{ animationDelay: "800ms" }}
        >
          <CardContent className="p-6">
            <h3 className="font-semibold text-yellow-800 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              멘토 등록 요건 및 심사 과정
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-yellow-700">
              <div>
                <h4 className="font-medium mb-2">필수 요건</h4>
                <ul className="space-y-1">
                  <li>• 석사 이상 학위 소지자</li>
                  <li>• 관련 분야 3년 이상 경력</li>
                  <li>• 대전 지역 연구기관 소속</li>
                  <li>• 신원 확인 가능한 신분증</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">심사 과정</h4>
                <ul className="space-y-1">
                  <li>• 서류 심사 (3-5일)</li>
                  <li>• 화상 면접 (1시간)</li>
                  <li>• 신원 조회 및 확인</li>
                  <li>• 최종 승인 통보</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
