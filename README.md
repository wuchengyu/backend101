## web101
web 全端練習筆記


### Quick Start

#### Environment required

- Node.js
- Yarn

#### Install packages

``` shell
yarn install
```

#### Start develop

``` shell
# server
yarn server:dev
# web
yarn web:dev
```



### Project description

- yarn workspace
- express
- jest
- typescript
- next.js

### Description


#### Folder structure 

```
|-- Root
    |-- .eslintrc.js
    |-- .gitignore
    |-- .prettierignore
    |-- README.md
    |-- jest.config.js 
    |-- lerna.json
    |-- package.json
    |-- prettier.config.js
    |-- yarn.lock
    |-- .github
    |-- .vscode
    |   |-- settings.json
    |-- server
    |   |-- jest.config.js
    |   |-- package.json
    |   |-- tsconfig.json
    |   |-- router
    |       |-- index.js
    |       |-- swagger.json
    |       |-- demo
    |       |   |-- add.js
    |       |-- note
    |-- web
        |-- .babelrc.json
        |-- .env.local
        |-- .gitignore
        |-- README.md
        |-- jest.config.js
        |-- jest.setup.js
        |-- next-env.d.ts
        |-- next.config.js // Rewrite to Backend
        |-- package.json
        |-- tsconfig.json
        |-- __mocks__ // Some Mocks at next.js testing
        |   |-- fileMock.js
        |   |-- styleMock.js
        |-- pages // Pages of Router
        |-- public // Static File For Build
        |-- styles

```

#### Install new packages

1. Install at Root

通常加入開發用的 package

``` shell
yarn install <new package> -W
```


2. Install at workspace


``` shell
yarn workspace <workspace> install <new package>
```



### TODO

- CI/CD
  - [ ] docker
  - [ ] k8s
  - [X] github actions
- Front-End
  - [ ] next.js
  - [ ] graphQL
  - [ ] state manager
  - [ ] seo
  - [ ] i18n
  - [ ] Design System (ex. ANTD, MUI)
- Back-End
  - [ ] express
  - [ ] redis
  - [ ] mongodb
  - [ ] orm
  - [ ] graphQL
- Develop
  - third-party
    - [ ] google
    - [ ] firebase
  - [X] typescript
  - [X] swagger
  - [X] eslint & prettier
  - [X] husky & lint-stage
  
