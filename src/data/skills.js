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
    category: 'webLayout',
    children: [
      {
        id: 1,
        title: 'HTML5',
        imageUrl: '',
      },
      {
        id: 2,
        title: 'CSS3',
        imageUrl: '',
      },
      {
        id: 3,
        title: 'Bootstrap',
        imageUrl: '',
      },
      {
        id: 4,
        title: 'Tailwind',
        imageUrl: '',
      },
    ]
  },
  {
    category: 'webLayout',
    children: [
      {
        id: 1,
        title: 'HTML5',
        imageUrl: '',
      },
      {
        id: 1,
        title: 'CSS3',
        imageUrl: '',
      },
      {
        id: 1,
        title: 'Bootstrap',
        imageUrl: '',
      },
      {
        id: 1,
        title: '',
      },
    ]
  },

]

export default skills