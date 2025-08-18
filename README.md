# my todo app

- 간단한 투두 앱. TypeScript + React(CRA) 기반으로 작성했다.

## 주요 기능

- 투두 생성/읽기/수정/삭제
- 완료/미완료 토글, 필터링
- 상세 보기, 인라인/페이지 편집
- 기본 환경설정 페이지(테마, 리스트 정렬 등 확장 여지)

## 기술 스택

- React 18 + TypeScript
- CRA (react-scripts 5)
- React Router v6
- ESLint + Prettier

## 프로젝트 구조

```text
my-todo-app/
├─ .vscode/
│  └─ settings.json
├─ node_modules/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ src/
│  ├─ components/
│  │  └─ todos/
│  │     ├─ TodoItem.tsx
│  │     ├─ TodoList.tsx
│  │     └─ TodoWrite.tsx
│  ├─ pages/
│  │  ├─ Home.tsx
│  │  ├─ NotFound.tsx
│  │  ├─ Settings.tsx
│  │  ├─ TodoDetailPage.tsx
│  │  ├─ TodoEditPage.tsx
│  │  ├─ TodoListPage.tsx
│  │  └─ TodoWritePage.tsx
│  ├─ types/
│  │  └─ todoType.ts
│  ├─ App.css
│  ├─ App.tsx
│  ├─ index.css
│  ├─ index.tsx
│  └─ react-app-env.d.ts
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc
├─ package.json
├─ README.md
└─ tsconfig.json
```

## 라우팅 구조
| Path              | Page           | 설명           |
| ----------------- | -------------- | ------------ |
| `/`               | Home           | 앱 소개 혹은 바로가기 |
| `/todos`          | TodoListPage   | 목록/필터/정렬     |
| `/todos/write`    | TodoWritePage  | 새 투두 작성      |
| `/todos/:id`      | TodoDetailPage | 상세 보기        |
| `/todos/:id/edit` | TodoEditPage   | 수정           |
| `/settings`       | Settings       | 테마 등 기본 설정   |
| `*`               | NotFound       | 404          |

