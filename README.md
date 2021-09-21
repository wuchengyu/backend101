## backend101
後端練習筆記


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
yarn start:dev
```



### Project description

- yarn workspace
- express
- jest


### Description


#### Folder structure 

```
|-- Root
    |-- .env.dev
    |-- .eslintrc.js
    |-- .gitignore
    |-- .prettierignore
    |-- README.md
    |-- package.json
    |-- prettier.config.js
    |-- yarn.lock
    |-- .github
    |   |-- workflows
    |       |-- test.yml
    |-- core // 核心功能
    |   |-- package.json // 獨立 workspace
    |   |-- demo
    |       |-- __tests__ // 測試案例
    |           |-- index.test.js // .test.js 測試檔
    |-- router
    |   |-- index.js
    |   |-- package.json // 獨立 workspace
    |   |-- swagger.json // 自動生成的 Swagger 文件
    |   |-- ex1
    |       |-- other.js // Router /ex1/other
    |-- scripts
        |-- generate-swagger.js // 自動生成 Swagger 文件腳本

```

#### Install new packages

1. Install at Root

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
- Develop
  - [ ] redis
  - [ ] mongodb
  - third-party
    - [ ] google
    - [ ] firebase
  - [X] swagger
  - [X] eslint & prettier
  - [X] husky & lint-stage
  
