import React from 'react'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            books
          }))
        })
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path = "/" component = {ListBooks}/>

          <Route path = "/search" render = {() => (
            <SearchBooks
              bookList = {this.state.books}
            />
          )}/>
        </Router>
      </div>
    )
  }
}

export default BooksApp
