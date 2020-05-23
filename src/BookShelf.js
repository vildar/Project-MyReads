import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component{

    static propTypes = {
        changeCategory: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired
    }

    render(){
        const imageURL = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : 0;
        const authors = this.props.book.authors;
        // let shelf = this.props.book.shelf;

        let shelf = 'none'

        for (let element of this.props.books){
            if(element.id === this.props.book.id){
                shelf = element.shelf
                break
            }
        }

        if( imageURL && authors){
            return (
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${imageURL})` }}></div>
                            <div className="book-shelf-changer">
                                <select value={shelf} onChange={event => this.props.changeCategory(this.props.book, event.target.value)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{this.props.book.title}</div>
                        <div className="book-authors">{authors}</div>
                    </div>
                </li>
            )
        }
        return (
            <li></li>
        )
    }
}

export default BookShelf