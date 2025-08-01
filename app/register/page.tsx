"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, User, Lock, Eye, EyeOff, Loader2, Mail, UserPlus } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    role: "user"
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 비밀번호 확인
    if (formData.password !== formData.confirmPassword) {
      toast.error('비밀번호가 일치하지 않습니다.')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          role: formData.role
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(data.message)
        router.push("/")
      } else {
        toast.error(data.error || '회원가입에 실패했습니다.')
      }
    } catch (error) {
      console.error('Register error:', error)
      toast.error('서버 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center py-8">
      <div className="w-full max-w-md">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="flex items-center space-x-3 group text-gray-600 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span>홈으로 돌아가기</span>
          </Link>
        </div>

        {/* Register Card */}
        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-800">회원가입</CardTitle>
            <CardDescription>
              CSCT 계정을 만들어 멘토링 서비스를 이용하세요
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="flex items-center space-x-2 mb-2">
                  <User className="w-4 h-4" />
                  <span>이름</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="홍길동"
                  required
                  className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center space-x-2 mb-2">
                  <Mail className="w-4 h-4" />
                  <span>이메일</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="example@email.com"
                  required
                  className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <Label htmlFor="role" className="flex items-center space-x-2 mb-2">
                  <User className="w-4 h-4" />
                  <span>회원 유형</span>
                </Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500">
                    <SelectValue placeholder="회원 유형을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">일반 사용자</SelectItem>
                    <SelectItem value="mentor">멘토</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="password" className="flex items-center space-x-2 mb-2">
                  <Lock className="w-4 h-4" />
                  <span>비밀번호</span>
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="비밀번호를 입력하세요 (최소 6자)"
                    required
                    className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-gray-100"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="flex items-center space-x-2 mb-2">
                  <Lock className="w-4 h-4" />
                  <span>비밀번호 확인</span>
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    placeholder="비밀번호를 다시 입력하세요"
                    required
                    className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-gray-100"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <input 
                  type="checkbox" 
                  required
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" 
                />
                <span className="text-gray-600">
                  <Link href="/terms" className="text-emerald-600 hover:text-emerald-700">
                    이용약관
                  </Link>과{' '}
                  <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700">
                    개인정보처리방침
                  </Link>에 동의합니다
                </span>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    회원가입 중...
                  </>
                ) : (
                  '회원가입'
                )}
              </Button>

              <div className="text-center">
                <span className="text-gray-600">이미 계정이 있으신가요? </span>
                <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  로그인
                </Link>
              </div>
            </form>

            {/* Social Register */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">또는</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <span className="text-lg mr-2">📧</span>
                  네이버
                </Button>
                <Button variant="outline" className="w-full">
                  <span className="text-lg mr-2">📱</span>
                  카카오
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="text-sm text-gray-600">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-emerald-600 text-xs">🎯</span>
            </div>
            <div>맞춤형 멘토링</div>
          </div>
          <div className="text-sm text-gray-600">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-emerald-600 text-xs">🔒</span>
            </div>
            <div>안전한 서비스</div>
          </div>
          <div className="text-sm text-gray-600">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-emerald-600 text-xs">⚡</span>
            </div>
            <div>빠른 매칭</div>
          </div>
        </div>
      </div>
    </div>
  )
} 