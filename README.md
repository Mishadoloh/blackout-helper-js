## Вимоги
- Node.js 18+ (рекомендовано Node 20 LTS)
- npm 10+ (можна використовувати yarn/pnpm, але скрипти наведені для npm)

## Основні залежності
Згідно з [package.json](file:///c:/Users/dolog/projects/blackout-helper-js/package.json):

Продакшн-залежності:
- react
- react-dom
- react-router-dom

Dev-залежності
- typescript
- vite
- @vitejs/plugin-react
- sass
- eslint
- @eslint/js
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- typescript-eslint
- globals
- @types/node
- @types/react
- @types/react-dom

## Встановлення
```bash
npm install
```

## Скрипти
- Запуск дев-сервера:  
  ```bash
  npm run dev
  ```
- Лінтинг:  
  ```bash
  npm run lint
  ```
- Білд (тип-чекинг)
  ```bash
  npm run build
  ```
- Прев’ю зібраного білду:  
  ```bash
  npm run preview
  ```

## Технічні деталі
- Бандлер: Vite 7
- Мова: TypeScript 5
- Роутинг: React Router v7 (HashRouter)
- Стилі: SCSS (Sass). Головні файли стилів:  
  - Глобальні стилі: `src/index.scss`  
  - Змінні/міксини: `src/shared/styles/var.scss`, `src/shared/styles/mixins.scss`
- TS конфіг: `tsconfig.app.json`, `tsconfig.node.json`
- ESLint: плоска конфігурація `eslint.config.js`

## Запуск локально
1. Встанови Node 20 LTS.
2. `npm install`
3. `npm run dev` і відкрий локальний URL з консолі.


