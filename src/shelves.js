import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from './header'
import BooksList from './bookslist'
import TitleCase from 'title-case'
import PropTypes from 'prop-types'

class Shelves extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        shelves: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    render() {

        const {books, shelves, updateBook} = this.props;

        return (
            <div className="list-books">
                <Header/>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf) => (
                            <div className="bookshelf" key={shelf}>
                                <h2 className="bookshelf-title">{TitleCase(shelf)}</h2>
                                <div className="bookshelf-books">

                                    <BooksList
                                        books={books}
                                        shelves={shelves}
                                        updateBook={updateBook}
                                        currentShelf={shelf}/>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Shelves;