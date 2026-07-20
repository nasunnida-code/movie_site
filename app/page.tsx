// Nextjs App Router
// 폴더명기반 라우팅으로 손쉽게 URL을 적용할 수 있다
// page.ts -> 화면 UI를 보여주는 파일
// layout.ts -> 공통으로 적용할 웹 레이아웃 생성

// 타입스크립트
// 자바스크립트의 동적타입을 정적타입으로 변경
// 컴파일 단계에서 오류를 잡아낼수 있다
// * 웹브라우저는 JS만 인식하므로 Ts도 결국엔
// 자바스크립트로 변환해야 실행된다

export default function Home() {
  return <h1>메인페이지 입니다</h1>
}
