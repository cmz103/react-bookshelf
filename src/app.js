import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Search from './search'
import Shelves from './shelves'
import * as BooksAPI from './booksapi'
import './app.css'

class BooksApp extends Component {

    state = {
        showSearchPage: false,
        books: [],
        shelves: [],
        queriedBooks: []
    }

    componentDidMount() {
        this.getAll();
    }

    /**
    * @description Calls BooksAPI getAll, then sets books state, and calls setShelves function
    */
    getAll = () => {
        BooksAPI
            .getAll()
            .then((books) => {
                this.setState({books});
                this.setShelves(books);
            })
    };

    /**
    * @description Create new array of shelf names from books array, then set state
    * @param {array} books
    */
    setShelves = (books) => {
        let {shelves} = this.state;

        // create new array of shelf names
        shelves = books.map(book => book.shelf);
        shelves = shelves.filter((elem, index, self) => index === self.indexOf(elem));

        this.setState({shelves});
    };

    /**
    * @description Calls BooksAPI update, then sets queriedBooks state
    * @param {string} query
    */
    updateBook = (book, shelf) => {

        if (!shelf)
            return;

        let booksCopy;

        BooksAPI.update(book, shelf);

        const toUpdatedIndex = this.getUpdatedIndex(book);
        booksCopy = this.copyArr(this.state.books);

        // if book already exists in current books array, update index else just push
        // new book object into books array
        if (toUpdatedIndex !== -1) {
            booksCopy[toUpdatedIndex].shelf = shelf;
        } else {
            book.shelf = shelf;
            booksCopy.push(book);
        }

        this.setState({books: booksCopy});
    };

    /**
    * @description Get index of book being updated from current books array
    * @param {object} book
    * @returns {number} index
    */
    getUpdatedIndex = (book) => {
        return this
            .state
            .books
            .findIndex(b => b.id === book.id);
    };

    /**
    * @description Create copy of array
    * @param {array} arr
    * @returns {array} copied array
    */
    copyArr = (arr) => {
        return [...arr];
    };

    /**
    * @description Calls BooksAPI search, then sets queriedBooks state
    * @param {string} query
    */
    search = (query) => {
        if (query) {
            BooksAPI
                .search(query)
                .then((queriedBooks) => {
                    this.setState({queriedBooks});
                });
        } else {
            this.setState({queriedBooks: []});
        }
    };

    /**
    * @description Filters books array, returns shelf property
    * @param {object} book
    * @returns {string} shelf
    */
    getBookShelf = (book) => {
        const existingBook = this
            .state
            .books
            .filter(b => b.id === book.id);
        if (existingBook.length) {
            // console.log(existingBook[0].shelf);
            return existingBook[0].shelf;
        } else {
            return null;
        }
    };

    render() {
        return (
            <div className="app">

                <Route
                    exact
                    path="/search"
                    render={() => (<Search
                    search={this.search}
                    queriedBooks={this.state.queriedBooks}
                    shelves={this.state.shelves}
                    updateBook={this.updateBook}
                    getShelf={this.getBookShelf}/>)}/>

                <Route
                    exact
                    path="/"
                    render={() => (<Shelves
                    books={this.state.books}
                    shelves={this.state.shelves}
                    updateBook={this.updateBook}
                    getShelf={this.getBookShelf}/>)}/>

            </div>
        )
    }
}

export default BooksApp
