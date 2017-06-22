# Can't require Elm from Typescript

```
elm package install -y
yarn install
yarn start # webpack
yarn serve # http
```

When webpack entry is set on `index.ts`, error. When on `index.js`, no problem.
