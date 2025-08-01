import { NextRequest, NextResponse } from 'next/server'
import { findUserByEmailAndPassword } from '@/lib/users'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // 입력 검증
    if (!email || !password) {
      return NextResponse.json(
        { error: '이메일과 비밀번호를 입력해주세요.' },
        { status: 400 }
      )
    }

    // 사용자 찾기
    const user = findUserByEmailAndPassword(email, password)

    if (!user) {
      return NextResponse.json(
        { error: '이메일 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      )
    }

    // 로그인 성공 응답
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      message: '로그인이 성공했습니다.'
    })

    // 쿠키에 로그인 상태 저장 (실제로는 JWT 토큰 사용 권장)
    response.cookies.set('auth-token', JSON.stringify({
      id: user.id,
      email: user.email,
      role: user.role
    }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7일
    })

    return response

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 