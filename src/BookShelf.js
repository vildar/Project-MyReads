import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component{

    static propTypes = {
        // bookTitle: PropTypes.string.isRequired,
        // imageURL: PropTypes.string.isRequired,
        // authors: PropTypes.array.isRequired,
        // bookCategory: PropTypes.string.isRequired,
        // onChangeCategory: PropTypes.func.isRequired
        book: PropTypes.object.isRequired
    }

    changeCategory = (event) => {
        BooksAPI.update(this.props.book, event.target.value)
    }

    render(){
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={this.props.book.shelf} onChange={this.changeCategory}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>
        )
    }
}

export default BookShelf