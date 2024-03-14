// const skills = [
//   {
//     id: 1,
//     title: 'Vue.js',
//     item: [
//       'Vue3 Composition / Options API',
//       'Components 元件管理',
//       'Vue Router 建構路由',
//       'Pinia Store 狀態管理',
//       'Vue 插件使用',
//     ],
//     imageUrl: ''
//   },
//   {
//     id: 2,
//     title: 'Web Layout',
//     item: [
//       '熟悉 HTML5 及語意化標籤',
//       'CSS3 預處理使用 Sass/SCSS',
//       'RWD 響應式開發',
//       '熟悉 Bootstrap5、Tailwind 應用',
//     ],
//     imageUrl: ''
//   },
//   {
//     id: 3,
//     title: 'JavaScript',
//     item: [
//       '瞭解 ES6 基礎語法及應用',
//       'Axios 串接 API',
//       'TypeScript 基礎型別及應用',
//       'jQuery 基礎動畫開發',
//       'NPM 套件安裝',
//     ],
//     imageUrl: ''
//   },
//   {
//     id: 4,
//     title: 'Version Control',
//     item: [
//       'Git 版本控制 / GitHub',
//       'Git / GitHub 團隊協作經驗',
//       'Sourcetree',
//     ],
//     imageUrl: ''
//   },
//   {
//     id: 5,
//     title: 'Tools',
//     item: [
//       'Vite 建構工具',
//       'Adobe XD, Figma 基礎操作',
//       'Google Doc, Notion, Hack MD 專案管理',
//     ],
//     imageUrl: ''
//   },
// ]

const skills = [
  {
    category: 'Web Layout',
    children: [
      {
        id: 1,
        title: 'HTML5',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_html.png?raw=true',
      },
      {
        id: 2,
        title: 'CSS3',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_css.png?raw=true',
      },
      {
        id: 3,
        title: 'Bootstrap',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_bootstrap.png?raw=true',
      },
      {
        id: 4,
        title: 'Tailwind',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_tailwind.png?raw=true',
      },
      {
        id: 5,
        title: 'SASS/Scss',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_sass.png?raw=true',
      },
    ]
  },
  {
    category: 'JavaScript',
    children: [
      {
        id: 6,
        title: 'JavaScript ES6',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_javascript.png?raw=true',
      },
      {
        id: 7,
        title: 'jQuery',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_jquery.png?raw=true',
      },
      {
        id: 8,
        title: 'TypeScript',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_typescript.png?raw=true',
      },
    ]
  },
  {
    category: 'Framework',
    children: [
      {
        id: 9,
        title: 'Vue 3',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_vue.png?raw=true',
      },
      {
        id: 10,
        title: 'Pinia',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_pinia.png?raw=true',
      },
      {
        id: 11,
        title: 'Vue Router',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_router.png?raw=true',
      },
    ]
  },
  {
    category: 'Tools',
    children: [
      {
        id: 12,
        title: 'Vite',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_vite.png?raw=true',
      },
      {
        id: 13,
        title: 'Git/GitHub',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_github.png?raw=true',
      },
      {
        id: 14,
        title: 'Google Sheets',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_sheets.png?raw=true',
      },
      {
        id: 15,
        title: 'Notion',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_notion.png?raw=true',
      },
      {
        id: 16,
        title: 'Hack MD',
        imageUrl: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/skill_hackMD.png?raw=true',
      },
    ]
  },

]

export default skills