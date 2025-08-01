"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PremiumLogo } from "@/components/premium-logo"
import { Calendar, MapPin, Users, Clock, ArrowLeft, Star, Award, Brain, User } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function TourPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const tours = [
    {
      id: 1,
      title: "KAIST 캠퍼스 투어",
      description: "AI 연구실과 로봇공학과 견학",
      location: "KAIST 대전캠퍼스",
      duration: "3시간",
      capacity: 20,
      available: 15,
      date: "2025.08.15",
      time: "14:00",
      price: "무료",
      image: "/placeholder.svg?height=200&width=300&text=KAIST+Campus",
      researcherImage: "/images/researcher-1.png",
      researcherName: "김연구 박사",
      researcherTitle: "KAIST AI연구소 소장",
      highlights: ["AI 연구실", "로봇공학과", "전문 가이드"],
    },
    {
      id: 2,
      title: "항공우주연구원 견학",
      description: "우주선 개발 현장과 발사체 기술 체험",
      location: "한국항공우주연구원",
      duration: "4시간",
      capacity: 15,
      available: 8,
      date: "2025.08.20",
      time: "10:00",
      price: "무료",
      image: "/placeholder.svg?height=200&width=300&text=KARI+Space+Center",
      researcherImage: "/images/researcher-2.png",
      researcherName: "박우주 박사",
      researcherTitle: "항공우주연구원 선임연구원",
      highlights: ["발사체 모형", "우주복 체험", "연구원 특강"],
    },
    {
      id: 3,
      title: "대덕연구단지 탐방",
      description: "첨단 연구시설과 바이오 연구소 방문",
      location: "대덕연구개발특구",
      duration: "5시간",
      capacity: 25,
      available: 0,
      date: "2025.08.25",
      time: "09:00",
      price: "무료",
      image: "/placeholder.svg?height=200&width=300&text=Daedeok+Research+Complex",
      researcherImage: "/images/researcher-3.png",
      researcherName: "이바이오 박사",
      researcherTitle: "생명공학연구소 연구팀장",
      highlights: ["바이오 연구소", "첨단 장비", "연구원 멘토링"],
    },
  ]

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm animate-slide-down">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-5 h-5 text-emerald-600 group-hover:-translate-x-1 transition-transform duration-300" />
              <PremiumLogo size="normal" />
              <div className="text-sm text-gray-600">견학 프로그램</div>
            </Link>
            <Link href="/tour/guide-apply">
              <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 hover:scale-105 transition-all duration-300">
                가이드 신청
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 border-emerald-200 mb-4">
            <Award className="w-4 h-4 mr-2" />
            정부 지원 무료 프로그램
          </Badge>
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            전문 가이드 견학 프로그램
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            대전의 세계적 연구기관을 박사급 전문가와 함께 탐방하며 과학의 현장을 직접 체험해보세요
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { number: "38개", label: "연구기관", color: "emerald", icon: MapPin },
            { number: "100%", label: "무료 프로그램", color: "blue", icon: Award },
            { number: "박사급", label: "전문 가이드", color: "purple", icon: User },
            { number: "실시간", label: "예약 시스템", color: "indigo", icon: Calendar },
          ].map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center mx-auto mb-3`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card
                key={tour.id}
                className="group hover:shadow-2xl transition-all duration-500 border border-gray-200 bg-white overflow-hidden hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300 shadow-lg">
                      {tour.price}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Researcher Info */}
                <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-b">
                  <div className="flex items-center space-x-3">
                    <img
                      src={tour.researcherImage || "/placeholder.svg"}
                      alt={tour.researcherName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">{tour.researcherName}</div>
                      <div className="text-xs text-gray-600">{tour.researcherTitle}</div>
                    </div>
                    <Badge variant="outline" className="ml-auto text-xs border-emerald-200 text-emerald-700">
                      전문 가이드
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {tour.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{tour.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center group-hover:text-emerald-600 transition-colors duration-300">
                      <MapPin className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center group-hover:text-blue-600 transition-colors duration-300">
                      <Clock className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      <span>
                        {tour.duration} • {tour.date} {tour.time}
                      </span>
                    </div>
                    <div className="flex items-center group-hover:text-purple-600 transition-colors duration-300">
                      <Users className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                      <span>{tour.available > 0 ? `${tour.available}/${tour.capacity}명 예약 가능` : "예약 마감"}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors duration-300"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className={`w-full transition-all duration-300 ${
                      tour.available > 0
                        ? "bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 hover:scale-105 hover:shadow-lg text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={tour.available === 0}
                  >
                    {tour.available > 0 ? "예약하기" : "예약 마감"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
            견학 프로그램 특징
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "박사급 전문 가이드",
                desc: "각 분야 박사학위 소지자가 직접 안내하는 심층적인 견학",
                color: "emerald",
              },
              {
                icon: Calendar,
                title: "실시간 예약 시스템",
                desc: "언제든 실시간으로 예약 현황 확인 및 신청",
                color: "blue",
              },
              {
                icon: Star,
                title: "정부 지원 무료",
                desc: "행정사무 민간위탁업체로서 정부 예산 지원으로 완전 무료",
                color: "purple",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${800 + index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 text-${feature.color}-700`}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto mt-16">
          <Card
            className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 border-0 text-white overflow-hidden relative animate-fade-in-up"
            style={{ animationDelay: "1400ms" }}
          >
            <div className="absolute inset-0">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float-delayed"></div>
            </div>
            <CardContent className="p-12 text-center relative">
              <Brain className="w-16 h-16 mx-auto mb-6 text-yellow-300 animate-bounce-in" />
              <h3 className="text-3xl font-bold mb-4">견학 후 멘토링까지!</h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                견학 참여 후 해당 기관 박사급 연구원과 1:1 멘토링 기회를 제공합니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tour/apply">
                  <Button
                    size="lg"
                    className="bg-white text-emerald-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-lg font-semibold"
                  >
                    견학 신청하기
                  </Button>
                </Link>
                <Link href="/mentoring">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    멘토링 보기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
