import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PremiumLogo } from "@/components/premium-logo"
import { GovernmentPartnership } from "@/components/government-partnership"
import { Navigation } from "@/components/navigation"
import {
  ArrowRight,
  Users,
  Calendar,
  Brain,
  MapPin,
  ChevronDown,
  Search,
  Bell,
  Sparkles,
  Menu,
  CreditCard,
  MessageCircle,
  UserPlus,
} from "lucide-react"
import Link from "next/link"
import { getMentors, Mentor } from "@/lib/database"

export default async function HomePage() {
  // 데이터베이스에서 멘토 데이터 가져오기
  let mentors: Mentor[] = []
  try {
    mentors = getMentors().slice(0, 3) // 상위 3명만
  } catch (error) {
    console.error('Error fetching mentors:', error)
  }

  const fullText = "과학의 중심, 대전에서 시작하는 여러분의 미래"

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-emerald-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full animate-float"></div>
      </div>



      {/* Main Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 via-indigo-800 to-purple-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
        </div>

        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up text-center">
              <span className="block mb-4">대전에서 시작하는</span>
              <span className="block text-emerald-400">여러분의 미래</span>
            </h1>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up text-center mx-auto"
              style={{ animationDelay: "800ms" }}
            >
              정부가 인증한 신뢰할 수 있는 플랫폼에서 KAIST, 항공우주연구원, 대덕연구단지의 박사급 전문가들과 함께하는
              1:1 맞춤형 멘토링
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up justify-center" style={{ animationDelay: "1000ms" }}>
              <Link href="/mentoring">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  멘토링 시작하기
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/become-mentor">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-800 text-lg px-8 py-4 bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  멘토 되기
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Stats Bar */}
        <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-emerald-400 mb-1 counter-animation">
                  160,000+
                </div>
                <div className="text-sm text-gray-300">대전 지역 학생</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-1 counter-animation">
                  38개
                </div>
                <div className="text-sm text-gray-300">협력 연구기관</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-1 counter-animation">
                  90,000+
                </div>
                <div className="text-sm text-gray-300">박사급 연구진</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-emerald-400 mb-1">24/7</div>
                <div className="text-sm text-gray-300">멘토링 지원</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "1:1 멘토링", desc: "AI 맞춤 매칭", color: "emerald", href: "/mentoring" },
              { icon: Calendar, title: "견학 예약", desc: "실시간 예약 시스템", color: "blue", href: "/tour" },
              { icon: CreditCard, title: "요금제", desc: "합리적인 가격", color: "purple", href: "/pricing" },
              { icon: UserPlus, title: "멘토 되기", desc: "전문가 등록", color: "indigo", href: "/become-mentor" },
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <Card
                  className="group hover:shadow-xl transition-all duration-500 border-0 bg-white hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              핵심 서비스
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              정부가 인증한 신뢰할 수 있는 플랫폼에서 대전의 세계적 과학 인프라와 연결되는 체계적인 진로 탐색
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                color: "emerald",
                icon: Users,
                title: "AI 기반 1:1 멘토링",
                desc: "개인의 관심사와 적성을 분석하여 최적의 박사급 전문가와 연결하는 맞춤형 멘토링 시스템",
                features: [
                  "KAIST, 항공우주연구원, 대덕연구단지 박사급 전문가",
                  "실시간 1:1 대화 및 진로 상담",
                  "학교생활기록부 세특 작성 지원",
                  "부적절한 언어 자동 필터링",
                ],
                href: "/mentoring",
              },
              {
                color: "blue",
                icon: MapPin,
                title: "전문 가이드 견학",
                desc: "대전 주요 연구기관의 현장을 박사급 전문가와 함께 탐방하는 심화 체험 프로그램",
                features: [
                  "국립중앙과학관, KAIST 캠퍼스 투어",
                  "실시간 예약 및 정원 관리 시스템",
                  "박사급 전문가의 심층 해설",
                  "견학 후 1:1 멘토링 연계",
                ],
                href: "/tour",
              },
              {
                color: "purple",
                icon: Brain,
                title: "AI 진로 분석",
                desc: "개인의 학습 패턴과 관심사를 분석하여 최적의 진로 경로를 제시하는 지능형 시스템",
                features: [
                  "개인 맞춤형 진로 로드맵 제공",
                  "학습 데이터 기반 멘토 추천",
                  "진로별 필요 역량 분석",
                  "실시간 평가 및 피드백",
                ],
                href: "/mentoring",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-700 border border-gray-200 bg-white overflow-hidden hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div
                  className={`h-2 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 group-hover:h-3 transition-all duration-300`}
                ></div>
                <CardHeader className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <service.icon className={`w-8 h-8 text-white`} />
                  </div>
                  <CardTitle
                    className={`text-2xl text-slate-800 mb-3 group-hover:text-${service.color}-600 transition-colors duration-300`}
                  >
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">{service.desc}</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <div
                          className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href={service.href}>
                    <Button
                      className={`w-full bg-gradient-to-r from-${service.color}-600 to-${service.color}-700 hover:from-${service.color}-700 hover:to-${service.color}-800 hover:scale-105 transition-all duration-300 hover:shadow-lg group-hover:animate-pulse text-white`}
                    >
                      {service.title.includes("멘토링")
                        ? "멘토링 시작하기"
                        : service.title.includes("견학")
                          ? "견학 예약하기"
                          : "진로 분석 받기"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">협력 기관</h2>
            <p className="text-gray-600">대전의 세계적 연구기관들과 함께합니다</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "KAIST", desc: "한국과학기술원", color: "blue" },
              { name: "KARI", desc: "항공우주연구원", color: "purple" },
              { name: "대덕특구", desc: "연구개발특구", color: "emerald" },
              { name: "충남대", desc: "충남대학교", color: "indigo" },
            ].map((partner, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up group border border-gray-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-${partner.color}-500 to-${partner.color}-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-bold text-lg">{partner.name[0]}</span>
                </div>
                <div
                  className={`text-xl font-bold text-slate-700 mb-2 group-hover:text-${partner.color}-600 transition-colors duration-300`}
                >
                  {partner.name}
                </div>
                <div className="text-sm text-gray-500">{partner.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 via-indigo-800 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl animate-float-delayed"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">지금 시작하세요</h2>
          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            정부가 인증한 신뢰할 수 있는 플랫폼에서 첫 10분 무료 멘토링으로 여러분의 과학적 여정을 시작해보세요
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <Link href="/mentoring">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-4 hover:scale-110 transition-all duration-300 hover:shadow-2xl group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                무료 체험하기
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 text-lg px-8 py-4 bg-transparent hover:scale-110 transition-all duration-300 hover:shadow-2xl"
              >
                요금제 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Government Cooperation Notice */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-6 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold text-emerald-400 mb-2">
            정부 협력 플랫폼
          </p>
          <p className="text-sm text-gray-300">
            위 웹사이트는 정부와 협력하여 운영합니다.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 animate-fade-in-up">
              <PremiumLogo size="normal" />
              <p className="text-gray-400 mb-4 mt-4">
                정부가 인증한 행정사무 민간위탁업체로서 대전의 풍부한 과학 인프라를 활용하여 미래 과학 인재를 양성하는
                플랫폼
              </p>
              <div className="text-sm text-gray-500">
                <p>대전광역시 교육청 협력</p>
                <p>행정사무 민간위탁업체</p>
              </div>
            </div>

            {[
              {
                title: "서비스",
                items: [
                  { name: "1:1 멘토링", href: "/mentoring" },
                  { name: "견학 프로그램", href: "/tour" },
                  { name: "AI 진로 분석", href: "/mentoring" },
                  { name: "멘토 등록", href: "/become-mentor" },
                ],
              },
              {
                title: "협력 기관",
                items: [
                  { name: "KAIST", href: "#" },
                  { name: "한국항공우주연구원", href: "#" },
                  { name: "대덕연구개발특구", href: "#" },
                  { name: "충남대학교", href: "#" },
                ],
              },
              {
                title: "문의",
                items: [
                  { name: "25_psh0820@dshs.kr", href: "mailto:25_psh0820@dshs.kr" },
                  { name: "010-2337-6969", href: "tel:010-2337-6969" },
                  { name: "대전광역시", href: "#" },
                ],
              },
            ].map((section, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 animate-fade-in-up"
            style={{ animationDelay: "800ms" }}
          >
            <p>&copy; 2025 CSCT. All rights reserved. Made by 좀인성 팀</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["개인정보처리방침", "이용약관", "사이트맵"].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="hover:text-emerald-400 transition-all duration-300 hover:scale-105"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
