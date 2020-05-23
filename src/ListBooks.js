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

    updateState(){
      BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            currentlyReading: books.filter(book => book.shelf === "currentlyReading"),
            wantToRead: books.filter(book => book.shelf === "wantToRead"),
            read: books.filter(book => book.shelf === "read"),
          }))
        })
    }

    componentDidMount(){
      this.updateState()
    }

    changeCategory(book, shelf){
      BooksAPI.update(book, shelf).then(() => this.updateState())
    }

    render(){
        return (
          <div className="list-books">
            <ListBooksTitle />
            
            <ListBooksContent 
              changeCategory = {this.changeCategory.bind(this)}
              currentlyReading = {this.state.currentlyReading}
              wantToRead = {this.state.wantToRead}
              read = {this.state.read}
              books = {this.props.books}
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