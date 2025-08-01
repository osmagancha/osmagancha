"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PremiumLogo } from "@/components/premium-logo"
import { GovernmentPartnership } from "@/components/government-partnership"
import { ArrowLeft, Shield, Award, Users, Target, Zap, CheckCircle, Building, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
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
              문의하기
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200 mb-4">
            <Award className="w-4 h-4 mr-2" />
            행정사무 민간위탁업체
          </Badge>
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            CSCT 서비스 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            대한민국 정부와 대전광역시 교육청이 공식 인증한{" "}
            <strong className="text-indigo-600">행정사무 민간위탁업체</strong>로서, 대전의 세계적 과학 인프라를 활용한
            체계적인 진로 탐색 플랫폼을 제공합니다.
          </p>
        </div>



        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card
            className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-indigo-800">우리의 미션</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                대전의 풍부한 과학 인프라(KAIST, 항공우주연구원, 대덕연구단지)를 활용하여 미래 과학 인재들에게{" "}
                <strong>체계적이고 전문적인 진로 탐색 기회</strong>를 제공하고, 정부 정책에 부합하는 인재 양성 생태계를
                구축합니다.
              </p>
            </CardContent>
          </Card>

          <Card
            className="bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-emerald-800">우리의 비전</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                <strong>대전을 아시아 최고의 과학 교육 허브</strong>로 만들고, 전 세계 학생들이 찾는 과학 진로 탐색의
                메카로 발전시켜 대한민국의 과학기술 경쟁력 강화에 기여합니다.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-12 text-slate-800 animate-fade-in-up"
            style={{ animationDelay: "800ms" }}
          >
            핵심 서비스 특징
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "정부 공인 신뢰성",
                description: "행정사무 민간위탁업체로서 정부의 엄격한 심사를 통과한 공신력 있는 서비스",
                color: "blue",
              },
              {
                icon: Users,
                title: "전문가 네트워크",
                description: "KAIST, 항공우주연구원, 대덕연구단지 소속 박사급 전문가들의 직접 멘토링",
                color: "purple",
              },
              {
                icon: Zap,
                title: "AI 기반 매칭",
                description: "개인의 관심사와 적성을 분석하여 최적의 멘토와 진로 경로를 추천",
                color: "emerald",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${1000 + index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className={`text-xl text-${feature.color}-800`}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Model */}
        <Card
          className="bg-gradient-to-r from-slate-800 to-indigo-800 text-white mb-16 animate-fade-in-up"
          style={{ animationDelay: "1600ms" }}
        >
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <Building className="w-16 h-16 mx-auto mb-4 text-indigo-300" />
              <h2 className="text-3xl font-bold mb-4">행정사무 민간위탁업체란?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">정부 인증 과정</h3>
                <ul className="space-y-2">
                  {[
                    "정부 공개입찰을 통한 엄격한 선정",
                    "사업 계획서 및 운영 능력 심사",
                    "정기적인 성과 평가 및 감독",
                    "투명한 회계 및 운영 시스템",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">사용자 혜택</h3>
                <ul className="space-y-2">
                  {[
                    "정부 예산 지원으로 합리적인 가격",
                    "공공성과 전문성의 완벽한 조화",
                    "안정적이고 지속가능한 서비스",
                    "개인정보 보호 및 보안 강화",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "160,000+", label: "대전 지역 학생", icon: Users },
            { number: "38개", label: "협력 연구기관", icon: Building },
            { number: "90,000+", label: "연구진", icon: Award },
            { number: "98%", label: "만족도", icon: TrendingUp },
          ].map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${1800 + index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-800 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center animate-fade-in-up"
          style={{ animationDelay: "2200ms" }}
        >
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4">신뢰할 수 있는 진로 파트너</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              정부가 인증한 전문 기관에서 제공하는 체계적인 진로 탐색 서비스를 경험해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mentoring">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  멘토링 시작하기
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-indigo-600 bg-transparent hover:scale-105 transition-all duration-300"
                >
                  요금제 보기
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
