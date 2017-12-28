import React, {Component} from 'react'
import Book from './book'
import PropTypes from 'prop-types';

class BooksList extends Component {

    static propTypes = {
        shelves: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    render() {

        const {books, shelves, updateBook, currentShelf, queriedBooks, getShelf} = this.props;


        return (
            <ol className="books-grid">

                {/*
                    need conditional depending if BookList component is rendered from Shelves or from Search
                    currentShelf prop is the flag
                */}
                {currentShelf
                    ? books
                        .filter(book => book.shelf === currentShelf)
                        .map((book) => (
                            <li key={book.id}>
                                <Book shelves={shelves} book={book} updateBook={updateBook} getShelf={getShelf}/>
                            </li>
                        ))
                    : !queriedBooks.error || queriedBooks.length
                        ? queriedBooks.map((qbook) => (
                            <li key={qbook.id}>
                                <Book shelves={shelves} book={qbook} updateBook={updateBook} getShelf={getShelf}/>
                            </li>
                        ))
                        : (
                            <li>
                                <h3>No books found.</h3>
                            </li>
                        )}
            </ol>
        )
    }
}

export default BooksList;