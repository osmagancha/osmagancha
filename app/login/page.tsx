"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, User, Lock, Eye, EyeOff, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const result = await login(formData.email, formData.password)
    
    if (result.success) {
      router.push("/")
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="flex items-center space-x-3 group text-gray-600 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span>홈으로 돌아가기</span>
          </Link>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">CSCT</span>
            </div>
            <CardTitle className="text-2xl font-bold text-slate-800">로그인</CardTitle>
            <CardDescription>
              CSCT 계정으로 로그인하여 모든 서비스를 이용하세요
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="flex items-center space-x-2 mb-2">
                  <User className="w-4 h-4" />
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
                    placeholder="비밀번호를 입력하세요"
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

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-gray-600">로그인 상태 유지</span>
                </label>
                <Link href="/forgot-password" className="text-emerald-600 hover:text-emerald-700">
                  비밀번호 찾기
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    로그인 중...
                  </>
                ) : (
                  '로그인'
                )}
              </Button>

              <div className="text-center">
                <span className="text-gray-600">계정이 없으신가요? </span>
                <Link href="/register" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  회원가입
                </Link>
              </div>
            </form>

            {/* Social Login */}
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
              <span className="text-emerald-600 text-xs">🔒</span>
            </div>
            <div>안전한 로그인</div>
          </div>
          <div className="text-sm text-gray-600">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-emerald-600 text-xs">⚡</span>
            </div>
            <div>빠른 접속</div>
          </div>
          <div className="text-sm text-gray-600">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-emerald-600 text-xs">🛡️</span>
            </div>
            <div>개인정보 보호</div>
          </div>
        </div>
      </div>
    </div>
  )
} 