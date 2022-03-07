# Technical Tasks for Homework - CRUD APP

## Description

This app allows you to add 'mockup' products with Name, Price, Currency and Image.
The images gallery is fetched automatically based on input via [Unsplash] API.
React components are build using [styled-components]
You can also play with Firebase deployed [Project Demo]

## Instructions

**Permissions**
To Enable/Disable C-R-U-D permissions by click on the corresponding letter in the logo
eg: C - enables/disable Create permissions

**Create Products**
Click 'ADD PRODUCT button
Fill out the form and optionally pick an image from the gallery given one is available.

**Update Products**
Hover over the product card with Update permissions enabled and click the pencil icon

**Delete Products**
Hover over the product card with Delete permissions enabled and click the X icon

## Features

- The Basic CRUD Operations
  - Create Products
  - Read / Fetch Products from Database
  - Update Products
  - Delete Products
- Search filter
- Sort
  - Sort by Name
  - Sort by Price
  - Sort by Date
- CRUD Permissions Control
  - Enable / Disable the individual CRUD operations

## Tech used in the project

- [React] - JavaScript Framework
- [Typescript] - Extended Javascript
- [Vite] - Package bundler
- [styled-components] - React library to build components directly with css
- [unsplash] - API for free image resources
- [Formik] - React Library for building forms
- [yup] - Form validation schemes
- [Firebase] - Realtime backend database

## Setup

To run project

```
yarn install && yarn dev
```

Build

```
yarn build
```

## Code samples



[unsplash]: https://unsplash.com/
[react]: https://reactjs.org/
[styled-components]: https://styled-components.com/
[vite]: https://vitejs.dev/
[formik]: https://formik.org/
[yup]: https://www.npmjs.com/package/yup?activeTab=readme
[firebase]: https://firebase.google.com/
[typescript]: https://www.typescriptlang.org/
[Project Demo]: https://crude-app-3ef78.web.app/
