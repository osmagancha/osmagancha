import { useState, useEffect } from 'react'
import { toast } from 'sonner'

interface User {
  id: number
  email: string
  name: string
  role: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me')
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      }
    } catch (error) {
      console.error('Auth check error:', error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        setUser(data.user)
        toast.success(data.message)
        return { success: true }
      } else {
        toast.error(data.error || '로그인에 실패했습니다.')
        return { success: false, error: data.error }
      }
    } catch (error) {
      console.error('Login error:', error)
      toast.error('서버 오류가 발생했습니다.')
      return { success: false, error: '서버 오류가 발생했습니다.' }
    }
  }

  const logout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      })

      if (response.ok) {
        setUser(null)
        toast.success('로그아웃이 완료되었습니다.')
        return { success: true }
      } else {
        toast.error('로그아웃에 실패했습니다.')
        return { success: false }
      }
    } catch (error) {
      console.error('Logout error:', error)
      toast.error('서버 오류가 발생했습니다.')
      return { success: false }
    }
  }

  return {
    user,
    loading,
    login,
    logout,
    checkAuth,
  }
} 