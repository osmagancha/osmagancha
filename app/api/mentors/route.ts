import { NextRequest, NextResponse } from 'next/server';
import { getMentors, addMentor } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    // URL 파라미터 파싱
    const { searchParams } = new URL(request.url);
    const institution = searchParams.get('institution');
    const available = searchParams.get('available');
    const search = searchParams.get('search');

    // 필터 객체 생성
    const filters: any = {};
    if (institution) filters.institution = institution;
    if (available) filters.available = available;
    if (search) filters.search = search;

    // 멘토 데이터 가져오기
    const mentors = getMentors(filters);

    return NextResponse.json({ mentors });
  } catch (error) {
    console.error('Error fetching mentors:', error);
    return NextResponse.json(
      { error: '멘토 데이터를 가져오는 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, title, department, specialty, education, experience, institution } = body;

    // 새 멘토 추가
    const newMentor = addMentor({
      name,
      title,
      department,
      specialty,
      education,
      experience,
      institution,
      rating: 0,
      sessions: 0,
      available: true,
      image: "/placeholder.svg?height=80&width=80"
    });

    return NextResponse.json({ 
      success: true, 
      id: newMentor.id 
    });
  } catch (error) {
    console.error('Error adding mentor:', error);
    return NextResponse.json(
      { error: '멘토 추가 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 