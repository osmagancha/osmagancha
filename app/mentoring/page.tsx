import { Button } from "@/components/ui/button"
import { Award, Bell, ArrowLeft, Brain } from "lucide-react"
import Link from "next/link"
import { getMentors, Mentor } from "@/lib/database"
import { MentorSearch } from "@/components/mentor-search"
import { MentorCard } from "@/components/mentor-card"
import { NotificationButton } from "@/components/notification-button"

export default async function MentoringPage() {
  // 데이터베이스에서 멘토 데이터 가져오기
  let mentors: Mentor[] = []
  try {
    mentors = getMentors()
  } catch (error) {
    console.error('Error fetching mentors:', error)
  }
 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 px-4 animate-slide-down">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              ← CSCT 홈
            </Link>
            <span>•</span>
            <span>AI 기반 멘토 매칭</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>로그인하여 더 많은 기능을 이용하세요</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm animate-slide-down-delayed">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                  CSCT
                </div>
                <div className="text-xs text-gray-500 -mt-1">멘토링</div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#" className="text-emerald-600 font-medium border-b-2 border-emerald-600 pb-1">
                멘토 찾기
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
              >
                내 멘토링
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
              >
                멘토 되기
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
              >
                이용 가이드
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <NotificationButton />
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-300">
                로그인
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6 animate-fade-in">
          <Link href="/" className="hover:text-emerald-600 transition-colors duration-300">
            홈
          </Link>
          <span>›</span>
          <span className="text-emerald-600">멘토링</span>
        </div>

        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-slate-800 mb-4 hover:text-emerald-600 transition-colors duration-300">
            AI 기반 멘토 매칭
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            관심 분야와 진로 목표를 입력하면 AI가 최적의 전문가를 추천해드립니다. 대전의 세계적 연구기관 소속 멘토들과
            1:1로 만나보세요.
          </p>
        </div>

        <MentorSearch initialMentors={mentors} />

        {/* Free Trial Info */}
        <div
          className="bg-gradient-to-r from-emerald-600 to-slate-700 rounded-2xl p-8 text-white text-center animate-fade-in-up"
          style={{ animationDelay: "1200ms" }}
        >
          <Award className="w-16 h-16 mx-auto mb-4 text-yellow-300 animate-bounce-in" />
          <h3 className="text-2xl font-bold mb-3">첫 10분 무료 체험!</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            모든 멘토와 처음 10분간 무료로 대화할 수 있습니다. 멘토링이 마음에 드시면 월 구독으로 계속 이용하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              무료 체험 시작하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent hover:scale-105 transition-all duration-300"
            >
              요금제 보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
