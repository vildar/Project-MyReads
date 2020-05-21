import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooksTitle from './ListBooksTitle'
import ListBooksContent from './ListBooksContent'

class ListBooks extends Component{

    state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }

    componentDidMount(){
      BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            currentlyReading: books.filter(book => book.shelf === "currentlyReading"),
            wantToRead: books.filter(book => book.shelf === "wantToRead"),
            read: books.filter(book => book.shelf === "read"),
          }))
        })
    }

    render(){
        return (
          <div className="list-books">
            <ListBooksTitle />
            
            <ListBooksContent 
              currentlyReading = {this.state.currentlyReading}
              wantToRead = {this.state.wantToRead}
              read = {this.state.read}
            />
            
            <div className="open-search">
                <Link to = "/search">
                    <button>Add a Book</button>
                </Link>
            </div>
          </div>
        )
    }
}

export default ListBooks