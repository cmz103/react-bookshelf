import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BooksList from './bookslist'

class Search extends Component {

    static propTypes = {
        shelves: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired,
        search: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    /**
    * @description Updates query state and calls search func
    * @param {string} query
    */
    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        }, () => {
            this
                .props
                .search(this.state.query);
        })
    }

    render() {
        const {queriedBooks, shelves, updateBook, getShelf} = this.props;
        const {query} = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksList
                        queriedBooks={queriedBooks}
                        shelves={shelves}
                        updateBook={updateBook}
                        getShelf={getShelf}/>
                </div>
            </div>
        )
    }
}

export default Search;