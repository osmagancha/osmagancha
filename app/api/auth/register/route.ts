import { NextRequest, NextResponse } from 'next/server'
import { addUser, findUserByEmail } from '@/lib/users'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name, role = 'user' } = body

    // 입력 검증
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      )
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식을 입력해주세요.' },
        { status: 400 }
      )
    }

    // 비밀번호 길이 검증
    if (password.length < 6) {
      return NextResponse.json(
        { error: '비밀번호는 최소 6자 이상이어야 합니다.' },
        { status: 400 }
      )
    }

    // 이메일 중복 확인
    const existingUser = findUserByEmail(email)
    if (existingUser) {
      return NextResponse.json(
        { error: '이미 등록된 이메일입니다.' },
        { status: 409 }
      )
    }

    // 새 사용자 생성
    const newUser = addUser({
      email,
      password,
      name,
      role
    })

    // 회원가입 성공 응답
    const response = NextResponse.json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role
      },
      message: '회원가입이 완료되었습니다.'
    })

    // 자동 로그인을 위한 쿠키 설정
    response.cookies.set('auth-token', JSON.stringify({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role
    }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7일
    })

    return response

  } catch (error) {
    console.error('Register error:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 