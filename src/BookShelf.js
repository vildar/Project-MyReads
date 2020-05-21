import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component{

    static propTypes = {
        bookTitle: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        bookCategory: PropTypes.string.isRequired
    }

    render(){
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.imageURL})` }}></div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.bookTitle}</div>
                    <div className="book-authors">{this.props.authors}</div>
                </div>
            </li>
        )
    }
}

export default BookShelf