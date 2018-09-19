# Bookshelf React/React Router

Bookshelf is an application written in React and React Router. You can search for a book and add them to either the "Currently Reading", "Want to Read", and "Read" shelf. Additionally, you can move books into other shelves.

## Getting Started
1. Clone the repo
```
git clone https://github.com/cmz103/react-bookshelf.git
```
2. Install all project dependencies
```
yarn install
// or
npm install
```
3. Start the development server
```
yarn start
// or
npm start
```
4. You should now be able to go to your browser at `http://localhost:3000/` and view the app. Note that changes are automatically recompiled and the browser is refreshed.

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── app.css # App styles
    ├── app.js # Root component. Contains app's main methods to interact with API.
    ├── book.js # Book component. Displays book thumbnail.
    ├── booksapi.js # A JavaScript API for the provided Udacity backend.
    ├── bookslist.js # Component that displays list of books with 'shelfchanger' controls.
    ├── header.js # Header component
    ├── search.js # Search component. Searches for books and allows you to add them to shelves.
    ├── shelfchanger.js # Dropdown component attached to each book. Controls which shelf the book should be placed.
    ├── shelves.js # Shelf component that displays 'bookslist' components.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## License
[MIT License](/LICENSE)
