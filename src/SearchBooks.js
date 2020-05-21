import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class SearchBooks extends Component{
    state = {
        query: "",
        books: []
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))

        if(query !== ''){
            BooksAPI.search(query)
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
        } else{
            this.setState(() => ({
                books: []
            }))
        }
    }

    errorCheck = () => {
        if(!this.state.books.error){
            return this.state.books.map((book) =>
                <BookShelf
                    key = {book.industryIdentifiers[0].identifier}
                    book = {book}
                />
            )
        } 
    }

    render(){
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        className = "close-search"
                        to = "/">
                            Search
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type = "text" 
                            placeholder = "Search by title or author"
                            // value = {this.state.query}
                            onChange = {(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.errorCheck()
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks