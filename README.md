# purplenaive-portfolio

- 이름 : portfolio-2022
- 작업 기간 : 2022.01.20 ~ 2022.07.15
- 현재 버전 : ver 1 <a href="https://github.com/purplenaive/portfolio-2022.git" target="_blank">(ver 2 바로가기)</a>


## 설명
- purplenaive@gmail.com
- 개인 포트폴리오 사이트 파일들입니다.
- 자세한 설명은 <a href="https://purplenaive.notion.site/2022-f530d837536741dd8ab2a1631e78c5b8" target="_blank">여기서</a> 확인하실 수 있습니다.

## 정보
- frontend : vue
- backend : express

## 구조
```bash
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── page
│   │   ├── routes
│   │   ├── store
│   │   └── page
│   └── public
└── backend
    ├── bin
    ├── public
    ├── routes
    └── views
``` 

- 메인 vue와 서브 vue(kinderfest 사이드 프로젝트)로 라우트가 구분되어 있습니다
- backend 폴더 내의 파일들만 배포됩니다
- frontend 폴더는 backend/public 경로에 빌드 됩니다
