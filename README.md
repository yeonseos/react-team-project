
# Welcome to 🧀 yummy
다양한 디저트들 중에서 무엇을 먹을지 결정하지 못하는 우리의 모습을 생각하며 개발되었습니다.<br>
자동으로 위치 기반 카페를 검색해주는 기능이 있으며, 해당 지역 날씨에 맞춰서 카페를 추천해주고 있습니다.
<br>
- 배포 URL : https://yummy-web.netlify.app/
  
<br>

### ⏰ 개발 기간
24.04.15 ~ 24.04.21 (7일)

<br>

### 👥 멤버 구성 (6명)
- 신영재 : Frontend (PO)
- 김민솔 : Frontend (SM)
- 이하영 : Frontend
- 최연서 : Frontend
- 김재희 : Frontend 
- 손지희 : Frontend

<br>

# 🛠️ Stack
### Frontend
- Html
- Css
- Javascript
- React

### Backend
- Firebase Service

### Communication
- Notion
- Discord
- Figma

<br>

# ⚙️ 개발 환경
- ReactJS, CSS
- 사용 API : KAKAO API, OpenWeatherMap API
- 버전 관리 : Github
- 서비스 배포 환경 : Netlify
  
<br>

### 📌 Branches

- `master` branch : 배포용 브랜치 (절대 터치 ❌)
- `FE` branch : 개발을 진행할 브랜치
- `팀원별 name` branch : 개인별 작업 브랜치

<br>

### 📁 폴더 구조

```
react-study/
│
├── public/
│   ├── index.html        # 리액트 앱의 진입점 HTML 파일
│   └── ...               # 기타 정적 자원 (이미지, 폰트 등)
│
├── src/
│   ├── common/           # 공통 유틸리티 및 함수
│   │   └── ...
│   │
│   ├── components/       # 재사용 가능한 리액트 컴포넌트들
│   │   └── ...
│   │
│   ├── constants/        # 상수 및 설정 값들
│   │   └── ...
│   │
│   ├── hooks/            # 커스텀 리액트 훅들
│   │   └── ...
│   │
│   ├── layout/           # 레이아웃 관련 컴포넌트들 (헤더, 사이드바 등)
│   │   └── ...
│   │
│   ├── pages/            # 페이지 컴포넌트들 (라우팅될 화면들)
│   │   └── ...
│   │
│   ├── utils/            # 유틸리티 함수 및 도우미 클래스
│   │   └── ...
│   │
│   ├── App.css           # 앱 전역 CSS 스타일
│   ├── App.js            # 앱 컴포넌트 진입점
│   ├── index.css         # 전역 CSS 스타일
│   └── index.js          # 앱 초기화 및 렌더링 진입점
│
└── .gitignore            # Git으로 관리되지 않을 파일 및 폴더 목록
```



### Search(Map)
- 유저는 현재 위치 기반으로 주변 카페 리스트를 볼 수 있습니다.
- 유저는 입력한 키워드와 관련된 카페 리스트를 볼 수 있습니다.
- 유저는 결과(카페) 데이터를 정확도, 가까운 순으로 정렬하여 볼 수 있습니다.
- 유저는 검색 데이터 확인 후, 현재 위치 버튼을 클릭하면 다시 현재 위치 기반의 주변 카페를 볼 수 있습니다.
- 결과(카페) 데이터 목록에 마우스를 올려두면(hover) 지도에서 해당 카페로 이동합니다.
- 지도에서 현재 위치를 확인할 수 있습니다.(노란색 마커)
- 지도에서 각각의 카페 마커를 클릭하면 해당 카페의 정보가 뜨고, 해당 카페 위치로 이동합니다.<br>
  (홈페이지 링크를 클릭하면 해당 카페 정보를 확인할 수 있습니다.)
- 버튼을 클릭하여 사이드 메뉴(검색,결과 창)를 열고 닫을 수 있습니다.
- 결과(카페) 데이터 목록을 클릭하면 디테일(상세) 페이지로 이동합니다.
<br>

### Login
- 로그인은 소셜로그인 그리고 일반 이메일 가입 로그인으로 운영됩니다.
- 회원가입은 이메일 기반으로 양식에 맞춰 가입할 수 있습니다.
- 비밀번호 재발급은 발송된 이메일을 통한 변경 URL이 전송됩니다.
- 로그인 시 마이페이지 기능을 이용할 수 있으며, 마이 페이지에 대한 정보를 이메일을 제외한 수정이 가능합니다.


<br>

### Board

[보드 페이지]
- 유저가 작성한 게시물이 최신순으로 보여집니다.
- 게시물 이미지와 유저 프로필 그리고 해시태그가 표시됩니다.

![yummy시연1](https://github.com/swp0tato/react-study/assets/161410250/23ffa37c-6b53-4655-b81c-cfe5f340f670)

![yummy시연2](https://github.com/swp0tato/react-study/assets/161410250/b8647f48-1ce7-4a99-9cf0-08609312d2d9)

![yummy시연3](https://github.com/swp0tato/react-study/assets/161410250/f3eca960-d379-4a19-82ba-afaeff07848a)

![yummy시연4](https://github.com/swp0tato/react-study/assets/161410250/ebb4a19d-fb7b-471b-9fab-19274973fb34)



