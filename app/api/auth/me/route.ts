import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const authToken = request.cookies.get('auth-token')

    if (!authToken) {
      return NextResponse.json(
        { error: '로그인이 필요합니다.' },
        { status: 401 }
      )
    }

    const userData = JSON.parse(authToken.value)

    return NextResponse.json({
      success: true,
      user: userData
    })

  } catch (error) {
    console.error('Auth check error:', error)
    return NextResponse.json(
      { error: '인증 정보를 확인할 수 없습니다.' },
      { status: 401 }
    )
  }
} 