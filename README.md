# Shark Fight Club



## Как работать с проектом?

1. Клонируйте репозиторий:
	```sh
	git clone https://github.com/asterityy/shark73.git
	cd shark73
	```
2. Установите зависимости:
	```sh
	npm install
	```
3. Запустите проект:
	```sh
	npm run dev
	```

## Технологии проекта

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Как задеплоить проект на GitHub Pages?

1. Соберите проект:
	```sh
	npm run build
	```
2. Установите пакет gh-pages (один раз):
	```sh
	npm install --save-dev gh-pages
	```
3. Добавьте скрипты деплоя в package.json:
	```json
	"scripts": {
	  ...,
	  "predeploy": "npm run build",
	  "deploy": "gh-pages -d dist"
	}
	```
4. Запустите деплой:
	```sh
	npm run deploy
	```

## Как подключить свой домен?

Используйте стандартные настройки GitHub Pages для подключения домена через настройки репозитория.
