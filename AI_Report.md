# AI-Assisted Development Report

## 1. AI Tools Used
- Gemini 3.1 Pro (via Antigravity IDE)

## 2. Tasks Assisted by AI
- **Idea Generation:** 백엔드 없이 구현 가능하면서도 과제 요구사항(JS 인터랙션, 3개 이상의 뷰)을 충족하는 프로젝트 아이디어 브레인스토밍.
- **PRD Writing:** 과제 가이드라인의 필수 항목(타겟 사용자, 시나리오, 기능 목록 등)에 맞춘 제품 요구사항 정의서(PRD) 초안 작성.
- **UI/UX Design & Publishing:** HTML 뼈대 구성 및 Glassmorphism, 다크 모드, 백그라운드 애니메이션 등 최신 트렌드를 반영한 CSS 스타일링.
- **JavaScript Implementation:** 실시간 프롬프트 조립, 클립보드 복사, 브라우저 Local Storage를 활용한 데이터 저장/삭제 로직 구현.

## 3. Representative Prompts Used
1. "앞으로 이 파일(과제 가이드라인 PDF)의 가이드라인을 모두 만족하는 프로젝트를 할거야. 우선 주제 추천 좀 해줘."
2. "1번 주제(맞춤형 AI 프롬프트 생성기)로 가자. PRD를 작성해 줘."
3. "작성된 PRD를 바탕으로 index.html, style.css, script.js 파일들을 생성해서 프로젝트를 구현해. 기능과 함께 디자인을 글래스모피즘과 다크 테마로 화려하게 꾸며줘."

## 4. Modifications and Improvements (수정 및 개선 사항)
- AI가 초기에 제안한 영문 위주의 더미 텍스트와 프롬프트 템플릿을, 실제 한국인 유저들이 많이 사용하는 자연스러운 한국어 문장(예: "당신은 훌륭한 전문가입니다...", "[요구사항]")으로 수정 및 개선했습니다.
- CSS 배경의 원형 그라데이션(Orbs) 애니메이션의 속도가 너무 빨라 시선을 분산시키는 점을 고려하여, CSS keyframes의 `animation` 동작 시간을 10초(10s)로 늘려 훨씬 부드럽게 움직이도록 값을 직접 조정했습니다.

## 5. Bugs, Errors, and Limitations Found (버그 및 해결 과정)
- **이슈:** 처음 브라우저를 열어 라이브러리(Local Storage) 기능을 실행할 때, 저장된 프롬프트 데이터가 하나도 없으면 `null` 값을 반환하여 배열 메서드(forEach)에서 JavaScript 에러가 발생하는 문제가 발생했습니다.
- **해결 방안:** JavaScript 코드에서 데이터를 불러올 때 `JSON.parse(localStorage.getItem('promptCrafterLibrary')) || []` 와 같이 논리 연산자(`||`)를 추가했습니다. 데이터가 없으면 빈 배열(`[]`)을 기본값으로 반환하도록 예외 처리를 추가하여 에러를 성공적으로 해결했습니다.

## 6. Final Vercel Deployment URL
- [여기에 Vercel 배포 주소를 입력하세요]
