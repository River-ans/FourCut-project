<h1 style="display: flex; justify-content: center; align-items: center;" ><img src="./src/assets/icon.png" alt="아이콘" width="50"/>방구석 네컷</h1>
<div style="display: flex; justify-content: center; align-items: center; height:90vh;">
<img src="./src/assets/home.png" alt="화면" />
</div>

## 프로젝트 소개 및 목적

'방구석 네컷'은 테마를 선택할수 있고 웹캠을 이용해 4개의 연속된 사진을 찍고 네컷을 저장할 수 있는 웹 애플리케이션입니다. 사진부스에서 찍는 것 같은 느낌의 사진을 간단하게 찍을 수 있습니다.

<a href='https://fourcut.netlify.app/'>페이지 링크</a>

> ### 이 프로젝트는 초기 단계에 있으며, 저는 개발 초보고 기능구현 빨리하기 위해서 몇가지 한계가 있습니다. 지속적인 업데이트를 통해 이러한 문제점을 개선할 예정입니다.
>
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

## 개발자 노트

### ~

### 2023.09.02

#### 모바일 환경에서의 카메라 작동 문제 해결

iOS Safari에서 카메라가 데스크탑 웹캠과 다르게 작동하는 문제를 확인하고 수정했습니다. 이제 사진 촬영이 완료되면 카메라가 자동으로 종료됩니다. 다시 촬영을 원하면 카메라가 정상적으로 재활성화되어 이전의 문제를 해결하였습니다.

#### UI/UX 개선: 최소 높이 설정

최소 높이가 설정되지 않아서 UI가 일정 높이 이하에서 깨지는 문제를 확인했습니다. 이를 해결하기 위해 최소 높이를 설정하여 다양한 화면 사이즈에 대응할 수 있게 UI/UX를 개선했습니다.
