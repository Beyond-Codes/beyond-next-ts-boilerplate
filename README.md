# Beyond - Next.js TypeScript Boilerplate

<b>Still in development phase, do not use in production.</b>

The `pre` branch is for presentation. You have to use `dev` branch for development.

```
git clone https://github.com/Beyond-Codes/one-multi-page-template.git
git checkout dev
```

## 🚀 Features

- Multilingual-Ready, SEO-Ready
- Dynamic navigation elements in Header & Footer, zero code navigation update.
- Expandable Popup Layout
- API Service & API Config template.
- Auto sitemap generation based on folder structure.
- Auto path & subpath support with env variables.

## ⚠️ Warning

Do not forget to change/create the .env.local file on root directory.

You should add/change the `NEXT_PUBLIC_APP_URL` and `NEXT_PUBLIC_APP_PATH_PREFIX` variables.

The `NEXT_PUBLIC_APP_URL` variable is the url of your project, it's necessary for meta tags.
Example:

```
NEXT_PUBLIC_APP_URL=https://beyond.codes
```

The `NEXT_PUBLIC_APP_PATH_PREFIX` variable is the path of your project is runs on a subpath. For example, if your project is running on https://example.com/app you should change the `NEXT_PUBLIC_APP_PATH_PREFIX` variable to `/app`. If your project doesn't runs on a subpath, you can leave the `NEXT_PUBLIC_APP_PATH_PREFIX` variable empty. So you want to use the project on a subpath, you should change the `NEXT_PUBLIC_APP_PATH_PREFIX` variable. Example:

```
NEXT_PUBLIC_APP_URL=https://example.com
NEXT_PUBLIC_APP_PATH_PREFIX=/app
```

with these variables, the project will run on https://example.com/app

Do not forget to remove unused languages & packages for size optimization.

## Run Project

```bash
yarn && yarn dev
```

## Build Project

```bash
yarn build
```

Developed by [jaeger-dvlp](https://github.com/jaeger-dvlp) with ❤️ for Beyond.
