import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          onClick={ ()=> this.props.selectBook(book) }
          className="list-group-item"
          key={book.title} >
            {book.title}
          </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever gets returned from here will show up as props
  // on BookList

  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList Container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers.
  // Remember, selectBook is a function that returns an action.
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// promote BookList from a component to a container. It needs to know about
// this new dispatch method, SelectBook (Make it available in props).
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
