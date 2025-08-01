"use client"

import { Button } from "@/components/ui/button"
import { PremiumLogo } from "@/components/premium-logo"
import { NotificationButton } from "@/components/notification-button"
import { useAuth } from "@/hooks/use-auth"
import {
  ChevronDown,
  CreditCard,
  Menu,
  User,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const { user, logout } = useAuth()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    await logout()
    setIsLoggingOut(false)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm animate-slide-down-delayed">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <PremiumLogo size="normal" />

          {/* Main Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { name: "서비스 소개", href: "/about" },
              { name: "멘토링", href: "/mentoring" },
              { name: "견학 프로그램", href: "/tour" },
              { name: "요금제", href: "/pricing" },
              { name: "멘토 되기", href: "/become-mentor" },
            ].map((item, index) => (
              <div key={item.name} className="relative group" style={{ animationDelay: `${index * 100}ms` }}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 font-medium py-2 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                >
                  <span>{item.name}</span>
                  {index < 3 && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            <NotificationButton />
            
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="hidden md:flex items-center space-x-2 text-sm text-gray-700">
                  <User className="w-4 h-4" />
                  <span>{user.name}님</span>
                </div>
                <Button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  variant="outline"
                  className="text-gray-700 hover:text-red-600 hover:border-red-600"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  {isLoggingOut ? '로그아웃 중...' : '로그아웃'}
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-300">
                    로그인
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <CreditCard className="w-4 h-4 mr-2" />
                    요금제
                  </Button>
                </Link>
              </>
            )}
            
            <Button variant="ghost" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 