import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooksContent extends Component{
    static propTypes = {
        changeCategory: PropTypes.func.isRequired,
        currentlyReading: PropTypes.array.isRequired,
        wantToRead: PropTypes.array.isRequired,
        read: PropTypes.array.isRequired
    }

    bookGrid = (category, title) => {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            category.map((book) =>
                                <BookShelf
                                    key = {book.industryIdentifiers[0].identifier}
                                    changeCategory = {this.props.changeCategory.bind(this)}
                                    book = {book}
                                />
                            )
                        }
                    </ol>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div className="list-books-content">
                <div>
                    {
                        this.bookGrid(this.props.currentlyReading, 'Currently Reading')
                    }
                    {
                        this.bookGrid(this.props.wantToRead, 'Want to Read')
                    }
                    {
                        this.bookGrid(this.props.read, 'Read')
                    }
                </div>
            </div>
        )
    }
}

export default ListBooksContent