# Warpoint Partners Website

Официальный сайт партнёров Warpoint, showcasing our partners and their special offers.

## Технологии

- Next.js 14
- TypeScript
- Tailwind CSS
- React

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/warpoint-partners.git
cd warpoint-partners
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите проект в режиме разработки:
```bash
npm run dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере.

## Деплой

### GitHub Pages

1. Создайте новый репозиторий на GitHub
2. Добавьте следующие настройки в `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/warpoint-partners',
}

module.exports = nextConfig
```

3. Создайте GitHub Actions workflow для автоматического деплоя:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

4. В настройках репозитория включите GitHub Pages и выберите ветку `gh-pages` как источник.

## Структура проекта

```
warpoint-partners/
├── app/
│   ├── page.tsx        # Главная страница
│   ├── layout.tsx      # Корневой layout
│   └── globals.css     # Глобальные стили
├── public/
│   └── images/         # Изображения
└── package.json
```

## Добавление новых партнёров

Для добавления нового партнёра:

1. Добавьте логотип и изображение в `/public/images/`
2. Обновите массив `partners` в `app/page.tsx`

## Лицензия

MIT 