import React, {Component} from 'react'
import TitleCase from 'title-case'
import PropTypes from 'prop-types';

class ShelfChanger extends Component {

    static propTypes = {
        shelves: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }

    state = {
        value: this.props.selected
    }

    render() {

        const {updateBook, book, shelves} = this.props

        return (
            <select
                value={this.state.value}
                onChange={(event) => updateBook(book, event.target.value)}>
                <option value="">Move to...</option>
                {shelves.map((shelf) => (
                    <option key={shelf} value={shelf}>{TitleCase(shelf)}</option>
                ))}
                <option value="none">None</option>
            </select>
        )
    }
}

export default ShelfChanger;