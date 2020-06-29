# hmmUI

#### This project has two uses:

1. A collection of components

   - listed in the `components` directory

2. creating UI libraries
   - listed in the `libraries` directory

## First time setup

1. Use only `npm` for running scripts, in order to avoid some unexpected conflicts with different `.lock` files
2. Run `npm i` to install project dependencies

## Components

1. Run `npm run storybook` to start Storybook and view components

## UI Libraries

- Create new libraries under the `libraries` directory
- Each library must include the following files:
  `index.js`, `package.json`, `.npmignore`,`CHANGELOG.md`, `LICENCE`, `README.md`

## Publishing IU Libraries

**Note:** before publishing packages, you must have npm account and setup organization in order to publish scoped packages.

1. Build components by running `npm run build`
2. Publish components by running `npm run publish`

---

- Based off of <https://www.devbridge.com/articles/a-step-by-step-build-to-build-a-sharable-components-library/>
