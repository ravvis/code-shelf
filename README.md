# < CodeShelf />

## Project setup
```
yarn
```

#### Compiles and hot-reloads for development
```
yarn serve
```

#### Lints and fixes files
```
yarn lint
```

## Building for production
```
yarn build
```

## Application Deployment

#### Deploy from CLI
```
yarn deploy
```

#### Auto

Github actions builds and auto deploys the `/dist` folder on every push on the `main` branch

## Application architecture

### Modules

## `/core`
It contains the shared code.

## `/sql`
SQL specific code here.

## Page load time

```Page load time: 1600 ms```

It was calculated by observing the network requests, the load time is the time in which all the resources were downloaded.

![](https://raw.githubusercontent.com/singh-ravi-siso/code-shelf/main/public/network-requests.png)


To reduce the page load time, webpack's code splitting is used.

```javascript
export default [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "sql" */ "../components/sql_editor.vue"),
  },
];
```
It only fetches the sql module when it is required. Only the `main.js` file is imported at the initial load and all the other chunks are loaded on demand.
