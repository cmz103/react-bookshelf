import React, {Component} from 'react'
import ShelfChanger from './shelfchanger'
import PropTypes from 'prop-types';

class BooksList extends Component {

    static propTypes = {
        shelves: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    render() {

        const {books, shelves, updateBook, currentShelf, queriedBooks} = this.props;

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
                                <div className="book">
                                    <div className="book-top">
                                        <div
                                            className="book-cover"
                                            style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${book.imageLinks.thumbnail && book.imageLinks.thumbnail})`
                                        }}></div>
                                        <div className="book-shelf-changer">
                                            <ShelfChanger
                                                shelves={shelves}
                                                selected={book.shelf}
                                                updateBook={updateBook}
                                                book={book}/>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors && book
                                            .authors
                                            .map((author) => (
                                                <p key={author}>{author}</p>
                                            ))}
                                    </div>
                                </div>
                            </li>
                        ))
                    : !queriedBooks.error || queriedBooks.length
                        ? queriedBooks.map((qbook) => (
                            <li key={qbook.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div
                                            className="book-cover"
                                            style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${qbook.imageLinks && qbook.imageLinks.thumbnail})`
                                        }}></div>
                                        <div className="book-shelf-changer">
                                            <ShelfChanger
                                                shelves={shelves}
                                                selected={qbook.shelf}
                                                updateBook={updateBook}
                                                book={qbook}/>
                                        </div>
                                    </div>
                                    <div className="book-title">{qbook.title}</div>
                                    <div className="book-authors">{qbook.authors && qbook
                                            .authors
                                            .map((author) => (
                                                <p key={author}>{author}</p>
                                            ))}
                                    </div>
                                </div>
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