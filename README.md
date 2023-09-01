<h1 style="display: flex; justify-content: center; align-items: center;" ><img src="./src/assets/icon.png" alt="아이콘" width="50"/>방구석 네컷</h1>
<div style="display: flex; justify-content: center; align-items: center; height:90vh;">
<img src="./src/assets/home.png" alt="화면" />
</div>

## 프로젝트 소개 및 목적

'방구석 네컷'은 테마를 선택할수 있고 웹캠을 이용해 4개의 연속된 사진을 찍고 네컷을 저장할 수 있는 웹 애플리케이션입니다. 사진부스에서 찍는 것 같은 느낌의 사진을 간단하게 찍을 수 있습니다.

<a href='https://fourcut.netlify.app/'>페이지 링크</a>

> ### 이 프로젝트는 초기 단계에 있으며, 저는 개발 초보고 기능구현 빨리하기 위해서 몇가지 한계가 있습니다. 지속적인 업데이트를 통해 이러한 문제점을 개선할 예정입니다.
>
> - 웹캠을 기준으로 개발되었기 때문에, 모바일 환경에는 지원되지 않습니다.
> - 리액트에 대한 지식이 아직 초보 수준이라 코드가 다소 불필요하게 복잡할 수 있습니다.
> - 웹 접근성에 대한 고려가 부족하여, 향후 개선이 필요합니다.

## 사용 방법

1. 웹사이트에 접속합니다. 시작버튼을 눌러 테마를 선택합니다.
2. '사진 찍기' 버튼을 눌러 사진을 찍습니다.
3. 3초지연 으로 연속 4장 사진을 찍습니다.
   - 3초 지연 카운트가 표시됩니다.
   - 현재 몇번째 찍고 있는지 화면에 표시됩니다.
4. 4장을 다 찍으면 선택된 테마대로 네컷사진이 생성되고 화면에 표시됩니다.
5. '다운로드' 버튼을 눌러 사진을 저장할수 있습니다.

## 설치 및 설정 가이드

필요한 것:

- Node.js
- Yarn or npm

설치:

```bash
git clone git@github.com:River-ans/FourCut-project.git
cd fourcut-project
npm install
```

실행

```bash
npm run dev
```

## 프로그래밍 언어, 라이브러리

![Static Badge](https://img.shields.io/badge/react-blue)
![Static Badge](https://img.shields.io/badge/react%20router-red)
![Static Badge](https://img.shields.io/badge/css%20Module-yellow) ![Static Badge](https://img.shields.io/badge/sass-pink) ![Static Badge](https://img.shields.io/badge/react%20icons-orange)
![Static Badge](https://img.shields.io/badge/html2canvas-white)

## 해결하지 못한 문제

현재 모바일에서 사진 4컷으로 추출 시 사진이 찌그러지는 현상이 나타납니다. 그리고 처음 시작 시 카메라 와 캔버스는 정상적으로 작동이 되는데 페이지를 새로고침하지 않고 다시 찍을 시 카메라가 이상하게 작동됩니다. 그래서 모바일 환경에 호환성 최적화 필요합니다. 모바일 최적화 완료되기 전에는 에러 화면을 표시하게 만들었다.

## Roadmap or Future Improvements

- Real-Time 필터: 다양한 필터 옵션을 추가할 예정입니다.
- 다국어 언어 지원: 여러 언어를 지원할 예정입니다.
- 퍼포먼스: 더 빠른 로딩과 이미지 처리를 위한 성능 개선을 진행할 예정입니다.
- 테마 확장: 다양한 사용자 취향에 맞는 추가 테마를 계획 중입니다.
- 사진 텍스트 edit: 네컷 사진의 아래 텍스트 부분을 작성할수 있는 기능을 추가할 예정입니다.
- 다크 모드: 사용자 인터페이스에 다크 모드를 적용하여 눈의 피로를 줄이는 작업을 진행할 예정입니다.
- 접근성 개선: 웹 접근성 가이드라인을 따르기 위해 UI와 UX를 개선할 계획입니다.
- 코드 리팩토링 및 정리: 코드의 가독성과 유지 보수성을 높이기 위해 지속적인 리팩토링을 계획하고 있습니다.
- pwa: 향후 PWA(Progressive Web App)로 업그레이드할 예정입니다.
- 모바일 지원: 모바일에서도 포토기능 지원할 예정입니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 개발자 정보

Github:
<a href='https://github.com/River-ans'>River-ans</a>

## 기여 방법

이슈를 열거나 기존 이슈에 참여하세요.<br/>
Fork한 뒤에 새로운 브랜치를 만들어 주세요.<br>
변경 사항을 커밋하고 Pull Request를 열어주세요.

## 문의

이메일: mriveroom@gmail.com <br>
