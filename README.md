# CSCT - 대전 청소년 진로 멘토링 플랫폼

정부 인증 대전 청소년 진로 멘토링 플랫폼입니다. KAIST, 항공우주연구원, 대덕연구단지 전문가들과 함께하는 1:1 맞춤형 멘토링 서비스를 제공합니다.

## 🚀 주요 기능

- **실시간 로그인 시스템**: 안전한 인증 및 세션 관리
- **멘토링 매칭**: 전문가와 청소년을 연결하는 맞춤형 매칭
- **견학 프로그램**: 연구기관 및 기업 견학 프로그램 제공
- **요금제 시스템**: 다양한 멘토링 패키지 제공
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원

## 🛠️ 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Authentication**: Custom JWT-based auth
- **Deployment**: Vercel

## 📦 설치 및 실행

### 로컬 개발 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 테스트 계정

로그인 테스트를 위한 계정 정보:

- **관리자**: admin@csct.com / admin123
- **일반사용자**: user@csct.com / user123
- **멘토**: mentor@csct.com / mentor123

## 🌐 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 설정

### 수동 배포

```bash
# 프로젝트 빌드
npm run build

# Vercel CLI로 배포
npx vercel --prod
```

## 📁 프로젝트 구조

```
front/
├── app/                    # Next.js App Router
│   ├── api/               # API 라우트
│   │   └── auth/          # 인증 관련 API
│   ├── login/             # 로그인 페이지
│   ├── mentoring/         # 멘토링 페이지
│   └── ...
├── components/            # 재사용 가능한 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트
│   └── ...
├── hooks/                # 커스텀 훅
├── lib/                  # 유틸리티 함수
└── public/               # 정적 파일
```

## 🔐 인증 시스템

- **로그인**: 이메일/비밀번호 기반 인증
- **세션 관리**: HTTP-only 쿠키 기반
- **권한 관리**: 사용자 역할별 접근 제어
- **보안**: CSRF 보호, XSS 방지

## 🎨 UI/UX 특징

- **모던한 디자인**: 깔끔하고 직관적인 인터페이스
- **애니메이션**: 부드러운 전환 효과
- **접근성**: WCAG 가이드라인 준수
- **반응형**: 모든 디바이스 최적화

## 📞 지원

- **이메일**: support@csct.com
- **전화**: 042-123-4567
- **주소**: 대전광역시 유성구 대학로 99

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

© 2024 CSCT. All rights reserved. 