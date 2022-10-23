# noteballs

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Publishing Vue project on Github Pages

Include base: '/noteballs-vuejs/' in define config in vite config file
Add 
```sh
"homepage": "https://sriteja2602.github.io/noteballs-vuejs"
```
in package.json
Imp: Change Router to HashRouter

Once all these changes are done

### Compile and Minify for Production

```sh
npm run build
```
Run 
```sh
git add dist && git commit -m 'adding dist subtree'
```
