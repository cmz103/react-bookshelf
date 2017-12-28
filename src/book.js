import React, {Component} from 'react'
import ShelfChanger from './shelfchanger'
import PropTypes from 'prop-types';

class Book extends Component {

    render() {

        const {book, shelves, updateBook} = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`
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
        )
    }
}

export default Book;