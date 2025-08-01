"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PremiumLogo } from "@/components/premium-logo"
import { Check, X, Star, Zap, Crown, ArrowLeft, Sparkles, Users, Brain, Shield, Headphones, Award } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function PricingPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("창의형")
  const [isAnnual, setIsAnnual] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const plans = [
    {
      id: "기본형",
      name: "기본형",
      description: "CSCT를 처음 시작하는 분들을 위한 기본 플랜",
      price: { monthly: 0, annual: 0 },
      badge: null,
      features: ["3일에 1번 멘토링 (10분)", "기본 견학 프로그램 예약", "커뮤니티 접근", "이메일 지원"],
      limitations: ["채팅 저장 불가", "알림 기능 제한", "고급 멘토 접근 제한"],
      buttonText: "무료로 시작하기",
      popular: false,
      icon: Users,
      color: "gray",
    },
    {
      id: "응답형",
      name: "응답형",
      description: "정기적인 멘토링이 필요한 학생들을 위한 플랜",
      price: { monthly: 4900, annual: 49000 },
      badge: null,
      features: ["2일에 1번 멘토링 (20분)", "모든 견학 프로그램 예약", "기본 AI 진로 분석", "이메일 지원"],
      limitations: ["채팅 저장 불가", "알림 기능 제한"],
      buttonText: "응답형 시작하기",
      popular: false,
      icon: Zap,
      color: "blue",
    },
    {
      id: "창의형",
      name: "창의형",
      description: "진지하게 진로를 탐색하는 학생들을 위한 완전한 솔루션",
      price: { monthly: 9900, annual: 99000 },
      badge: "가장 인기",
      features: [
        "무제한 멘토링 세션",
        "모든 견학 프로그램 우선 예약",
        "고급 AI 진로 분석 및 로드맵",
        "전문 멘토 1:1 매칭",
        "채팅 저장 가능",
        "실시간 알림",
        "멘토 먼저 확인",
      ],
      limitations: [],
      buttonText: "창의형 시작하기",
      popular: true,
      icon: Brain,
      color: "emerald",
    },
    {
      id: "인재형",
      name: "인재형",
      description: "최고 수준의 멘토링과 개인 맞춤 서비스",
      price: { monthly: 14900, annual: 149000 },
      badge: "프리미엄",
      features: [
        "창의형의 모든 기능",
        "전담 멘토 배정",
        "VIP 견학 프로그램",
        "개인 맞춤 진로 컨설팅",
        "우선 알림 + 낙내일 강조",
        "공동 탐구 신청 가능",
        "이전 채팅 다시 보기 가능",
      ],
      limitations: [],
      buttonText: "인재형 시작하기",
      popular: false,
      icon: Crown,
      color: "purple",
    },
  ]

  const sponsors = [
    {
      id: 1,
      company: "KAIST",
      logo: "/placeholder.svg?height=60&width=120&text=KAIST",
      title: "AI 대학원 입학설명회",
      description: "2025년 AI대학원 신입생 모집! 전액 장학금 지원",
      cta: "자세히 보기",
      color: "blue",
      featured: true,
    },
    {
      id: 2,
      company: "삼성전자",
      logo: "/placeholder.svg?height=60&width=120&text=SAMSUNG",
      title: "삼성 청년 SW 아카데미",
      description: "소프트웨어 개발자 양성 과정 8기 모집",
      cta: "지원하기",
      color: "indigo",
      featured: false,
    },
    {
      id: 3,
      company: "LG화학",
      logo: "/placeholder.svg?height=60&width=120&text=LG",
      title: "화학공학 인턴십",
      description: "2025 하계 인턴십 프로그램 참가자 모집",
      cta: "신청하기",
      color: "red",
      featured: false,
    },
    {
      id: 4,
      company: "네이버",
      logo: "/placeholder.svg?height=60&width=120&text=NAVER",
      title: "부스트캠프 AI Tech",
      description: "AI 엔지니어 양성 부트캠프 7기 모집",
      cta: "지원하기",
      color: "green",
      featured: true,
    },
  ]

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm animate-slide-down">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-5 h-5 text-indigo-600 group-hover:-translate-x-1 transition-transform duration-300" />
              <PremiumLogo size="normal" />
            </Link>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:scale-105 transition-all duration-300">
              로그인
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Pricing Section */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                CSCT 멘토링 이용권
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                대전의 세계적 연구진과 함께하는 맞춤형 멘토링. 정부 지원으로 합리적인 가격에 제공됩니다.
              </p>

              {/* Annual/Monthly Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`text-sm ${!isAnnual ? "text-slate-800 font-medium" : "text-gray-500"}`}>월간</span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                    isAnnual ? "bg-gradient-to-r from-indigo-500 to-purple-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                      isAnnual ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className={`text-sm ${isAnnual ? "text-slate-800 font-medium" : "text-gray-500"}`}>
                  연간
                  <Badge className="ml-2 bg-emerald-100 text-emerald-700 text-xs">2개월 무료</Badge>
                </span>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              {plans.map((plan, index) => (
                <Card
                  key={plan.id}
                  className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-2 animate-fade-in-up ${
                    plan.popular
                      ? "border-2 border-emerald-500 shadow-2xl scale-105"
                      : "border border-gray-200 hover:shadow-xl"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {plan.badge && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-center py-2 text-sm font-medium">
                        <Sparkles className="w-4 h-4 inline mr-1" />
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <CardHeader className={`text-center ${plan.badge ? "pt-16" : "pt-8"} pb-4`}>
                    <div className="flex justify-center mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-${plan.color}-500 to-${plan.color}-600 rounded-xl flex items-center justify-center`}
                      >
                        <plan.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2 text-sm">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold text-slate-800">
                          {(isAnnual ? plan.price.annual : plan.price.monthly).toLocaleString()}
                        </span>
                        <span className="text-gray-600 ml-1">원</span>
                        {plan.price.monthly > 0 && (
                          <span className="text-gray-500 ml-1">/{isAnnual ? "년" : "월"}</span>
                        )}
                      </div>
                      {isAnnual && plan.price.monthly > 0 && (
                        <div className="text-sm text-emerald-600 mt-1">
                          월 {Math.floor(plan.price.annual / 12).toLocaleString()}원 (17% 할인)
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-8">
                    <Button
                      className={`w-full mb-6 transition-all duration-300 hover:scale-105 ${
                        plan.popular
                          ? "bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg"
                          : `bg-gradient-to-r from-${plan.color}-600 to-${plan.color}-700 hover:from-${plan.color}-700 hover:to-${plan.color}-800 text-white`
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.buttonText}
                    </Button>

                    <div className="space-y-2">
                      <div className="text-sm font-medium text-slate-800 mb-3">포함된 기능:</div>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.length > 0 && (
                        <>
                          <div className="text-sm font-medium text-slate-800 mt-4 mb-3">제한사항:</div>
                          {plan.limitations.map((limitation, limitIndex) => (
                            <div key={limitIndex} className="flex items-start space-x-2">
                              <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-500">{limitation}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 animate-fade-in-up"
              style={{ animationDelay: "800ms" }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">자주 묻는 질문</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    q: "무료 체험 후 자동 결제되나요?",
                    a: "아니요. 무료 체험 기간이 끝나도 자동으로 결제되지 않습니다. 원하실 때 언제든 업그레이드하세요.",
                  },
                  {
                    q: "언제든지 플랜을 변경할 수 있나요?",
                    a: "네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경사항은 다음 결제 주기부터 적용됩니다.",
                  },
                  {
                    q: "환불 정책은 어떻게 되나요?",
                    a: "구매 후 7일 이내에 100% 환불이 가능합니다. 그 이후에는 사용하지 않은 기간에 대해 비례 환불해드립니다.",
                  },
                  {
                    q: "정부 지원은 어떻게 받나요?",
                    a: "행정사무 민간위탁업체로서 정부 예산 지원을 받아 합리적인 가격으로 서비스를 제공합니다.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-slate-800">{faq.q}</h4>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sponsor Ads Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="text-center mb-6 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                <h2 className="text-xl font-bold text-slate-800 mb-2">🎯 추천 기회</h2>
                <p className="text-sm text-gray-600">CSCT가 엄선한 진로 기회들</p>
              </div>

              {sponsors.map((sponsor, index) => (
                <Card
                  key={sponsor.id}
                  className={`group hover:shadow-xl transition-all duration-500 border overflow-hidden animate-fade-in-up ${
                    sponsor.featured
                      ? "border-yellow-300 bg-gradient-to-br from-yellow-50 to-white"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  style={{ animationDelay: `${600 + index * 150}ms` }}
                >
                  {sponsor.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-center py-1 text-xs font-medium">
                      <Star className="w-3 h-3 inline mr-1" />
                      추천 기회
                    </div>
                  )}

                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={sponsor.company}
                        className="h-8 w-16 object-contain bg-white rounded border p-1"
                      />
                      <div className="text-xs text-gray-500">{sponsor.company}</div>
                    </div>

                    <h3 className="font-semibold text-slate-800 mb-2 text-sm group-hover:text-emerald-600 transition-colors duration-300">
                      {sponsor.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">{sponsor.description}</p>

                    <Button
                      size="sm"
                      className={`w-full text-xs transition-all duration-300 hover:scale-105 ${
                        sponsor.featured
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                          : `bg-gradient-to-r from-${sponsor.color}-600 to-${sponsor.color}-700 hover:from-${sponsor.color}-700 hover:to-${sponsor.color}-800 text-white`
                      }`}
                    >
                      {sponsor.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}

              {/* Ad Banner */}
              <Card
                className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-0 animate-fade-in-up"
                style={{ animationDelay: "1200ms" }}
              >
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-bold mb-2">광고 문의</h3>
                  <p className="text-sm text-indigo-100 mb-4">CSCT와 함께 미래 인재들에게 기회를 제공하세요</p>
                  <Button size="sm" className="bg-white text-indigo-600 hover:bg-gray-100 text-xs">
                    광고 문의하기
                  </Button>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div
                className="bg-white rounded-lg p-4 border border-gray-200 animate-fade-in-up"
                style={{ animationDelay: "1400ms" }}
              >
                <div className="text-center space-y-3">
                  <div className="flex justify-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-gray-600">정부 인증</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Headphones className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-gray-600">24/7 지원</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">행정사무 민간위탁업체 | 개인정보보호 | 7일 환불보장</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
