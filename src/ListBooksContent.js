import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooksContent extends Component{
    static propTypes = {
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
                        {/* {
                            category.forEach(book => 
                                <BookShelf 
                                    bookTitle = {book.title}
                                    imageURL = {book.imageLinks.thumbnail}
                                    authors = {book.authors}
                                />
                            )
                        } */}
                        {
                            category.map((book) =>
                                <BookShelf
                                    key = {book.industryIdentifiers[0].identifier}
                                    // bookTitle = {book.title}
                                    // imageURL = {book.imageLinks.thumbnail}
                                    // authors =   {book.authors}
                                    // bookCategory = {book.shelf}
                                    // onChangeCategory = {this.changeCategory(book,"")}
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