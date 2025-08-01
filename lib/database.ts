import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'mentors.json');

// 데이터베이스 초기화
export function initDatabase() {
  // data 디렉토리 생성
  const dataDir = path.dirname(dataPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // JSON 파일이 없으면 샘플 데이터로 생성
  if (!fs.existsSync(dataPath)) {
    const sampleMentors = [
      {
        id: 1,
        name: "김연구",
        title: "KAIST 컴퓨터공학과 교수",
        department: "컴퓨터공학과",
        specialty: "인공지능, 머신러닝, 딥러닝",
        rating: 4.9,
        sessions: 127,
        available: true,
        image: "/placeholder.svg?height=80&width=80",
        education: "MIT 박사",
        experience: "15년",
        institution: "KAIST",
        created_at: new Date().toISOString()
      },
      {
        id: 2,
        name: "박박사",
        title: "항공우주연구원 선임연구원",
        department: "우주발사체연구본부",
        specialty: "우주항공, 로켓공학, 추진시스템",
        rating: 4.8,
        sessions: 89,
        available: true,
        image: "/placeholder.svg?height=80&width=80",
        education: "KAIST 박사",
        experience: "12년",
        institution: "항공우주연구원",
        created_at: new Date().toISOString()
      },
      {
        id: 3,
        name: "이석사",
        title: "대덕연구단지 연구원",
        department: "생명공학연구소",
        specialty: "생명과학, 바이오테크, 유전공학",
        rating: 4.7,
        sessions: 156,
        available: false,
        image: "/placeholder.svg?height=80&width=80",
        education: "서울대 박사",
        experience: "8년",
        institution: "대덕연구단지",
        created_at: new Date().toISOString()
      },
      {
        id: 4,
        name: "최박사",
        title: "충남대학교 교수",
        department: "화학공학과",
        specialty: "화학공학, 촉매공학, 반응공학",
        rating: 4.6,
        sessions: 203,
        available: true,
        image: "/placeholder.svg?height=80&width=80",
        education: "연세대 박사",
        experience: "20년",
        institution: "충남대학교",
        created_at: new Date().toISOString()
      },
      {
        id: 5,
        name: "정연구",
        title: "KAIST 물리학과 교수",
        department: "물리학과",
        specialty: "양자물리, 나노기술, 광학",
        rating: 4.9,
        sessions: 178,
        available: true,
        image: "/placeholder.svg?height=80&width=80",
        education: "하버드 박사",
        experience: "18년",
        institution: "KAIST",
        created_at: new Date().toISOString()
      },
      {
        id: 6,
        name: "한박사",
        title: "항공우주연구원 책임연구원",
        department: "위성연구본부",
        specialty: "위성공학, 우주탐사, 통신시스템",
        rating: 4.8,
        sessions: 145,
        available: false,
        image: "/placeholder.svg?height=80&width=80",
        education: "KAIST 박사",
        experience: "14년",
        institution: "항공우주연구원",
        created_at: new Date().toISOString()
      }
    ];

    fs.writeFileSync(dataPath, JSON.stringify(sampleMentors, null, 2));
  }
}

// 데이터 읽기
export function getMentors(filters?: {
  institution?: string;
  available?: string;
  search?: string;
}): Mentor[] {
  if (!fs.existsSync(dataPath)) {
    initDatabase();
  }

  let mentors: Mentor[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  // 필터 적용
  if (filters) {
    if (filters.institution && filters.institution !== '모든 기관') {
      mentors = mentors.filter(m => m.institution === filters.institution);
    }

    if (filters.available === 'true') {
      mentors = mentors.filter(m => m.available);
    } else if (filters.available === 'false') {
      mentors = mentors.filter(m => !m.available);
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      mentors = mentors.filter(m => 
        m.name.toLowerCase().includes(searchTerm) ||
        m.title.toLowerCase().includes(searchTerm) ||
        m.specialty.toLowerCase().includes(searchTerm) ||
        m.department.toLowerCase().includes(searchTerm)
      );
    }
  }

  // 평점과 세션 수로 정렬
  return mentors.sort((a, b) => {
    if (a.rating !== b.rating) {
      return b.rating - a.rating;
    }
    return b.sessions - a.sessions;
  });
}

// 새 멘토 추가
export function addMentor(mentorData: Omit<Mentor, 'id' | 'created_at'>): Mentor {
  if (!fs.existsSync(dataPath)) {
    initDatabase();
  }

  const mentors: Mentor[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const newId = Math.max(...mentors.map(m => m.id)) + 1;
  
  const newMentor: Mentor = {
    ...mentorData,
    id: newId,
    created_at: new Date().toISOString()
  };

  mentors.push(newMentor);
  fs.writeFileSync(dataPath, JSON.stringify(mentors, null, 2));

  return newMentor;
}

// 멘토 타입 정의
export interface Mentor {
  id: number;
  name: string;
  title: string;
  department: string;
  specialty: string;
  rating: number;
  sessions: number;
  available: boolean;
  image: string;
  education: string;
  experience: string;
  institution: string;
  created_at: string;
} 