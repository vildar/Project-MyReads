import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path = "/" component = {ListBooks}/>

          <Route path = "/search" component = {SearchBooks}/>
        </Router>
      </div>
    )
  }
}

export default BooksApp
