# AI-Assisted Development Report

## 1. AI Tools Used
- Gemini 3.1 Pro (via Antigravity IDE)

## 2. Tasks Assisted by AI
- Idea Generation: 백엔드 없이 구현 가능하면서도 과제 요구사항(JS 인터랙션, 3개 이상의 뷰)을 충족하는 프로젝트 아이디어를 함께 브레인스토밍했습니다.
- PRD Writing: 과제 가이드라인의 필수 항목(타겟 사용자, 시나리오, 기능 목록 등)에 맞춘 제품 요구사항 정의서(PRD) 초안 및 영문 최종본을 작성했습니다.
- UI/UX Design & Publishing: HTML 뼈대 구성 및 Glassmorphism, 다크 모드, 백그라운드 애니메이션 등 최신 트렌드를 반영한 CSS 스타일링을 진행했습니다.
- JavaScript Implementation: 실시간 프롬프트 조립, 클립보드 복사, 브라우저 Local Storage를 활용한 데이터 저장 및 삭제 로직을 구현했습니다.
- Prompt Engineering Logic: 리서치를 바탕으로 한 4가지 프롬프트 프레임워크(Chain of Thought 등) 및 매직 키워드(Prompt Boosters) 동적 생성 로직을 추가했습니다.

## 3. Representative Prompts Used
1. 프롬프트 생성기라는 아이디어에 맞춰서 PRD를 먼저 작성해줘. 필수 항목인 Product Overview, Target Users 등이 다 들어가야 해.
2. 작성된 PRD를 바탕으로 index.html, style.css, script.js 파일들을 생성해서 프로젝트를 구현해. 기능과 함께 디자인을 글래스모피즘과 다크 테마로 화려하게 꾸며줘.
3. 이 브런치 아티클 사이트를 참고해서, 논문에 나온 프롬프트 해킹 기법들(팁 주기, 역질문 요청 등)을 체크박스 형태의 매직 키워드 기능으로 우리 웹사이트에 추가해줘.

## 4. Modifications and Improvements (수정 및 개선 사항)
- 자연스러운 프롬프트 생성: 처음에 출력된 영문 위주의 단순 병합식 템플릿을 폐기하고, 목적에 맞게 4가지 프레임워크(기본, 단계별 추론, 페르소나, 정보추출)로 분기 처리하여 구조화된 마크다운을 출력하도록 엔진을 제가 직접 전면 개편했습니다.
- 프롬프트 부스터 추가: 리서치한 글의 팁을 반영하여, 체크박스만 누르면 답변 퀄리티를 높이는 매직 키워드(가상의 팁 약속, 역질문 유도 등)가 프롬프트 하단에 자동으로 붙도록 로직과 UI(토글형 고급 옵션)를 추가로 구현했습니다.
- 디자인 디테일: 배경의 원형 애니메이션 속도가 너무 빨라 어지러운 점을 개선하고자, 10초로 늘려 시선 분산을 막고, 고급 옵션 패널에 부드러운 드롭다운 애니메이션을 추가했습니다.

## 5. Bugs, Errors, and Limitations Found (버그 및 해결 과정)
- 이슈: 처음 브라우저를 열어 라이브러리(Local Storage) 기능을 실행할 때, 저장된 데이터가 하나도 없으면 null 값을 반환하여 JavaScript 에러가 발생하는 문제가 발생했습니다.
- 해결 방안: 코드를 수정하여 데이터를 불러올 때 빈 배열을 기본값으로 반환하도록 예외 처리를 추가해 에러를 성공적으로 해결했습니다.

## 6. Final Vercel Deployment URL
- https://promptcrafter-six.vercel.app
