import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() { // ommitting 'function'?
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      );
    });
  }

  render() { // ommitting 'function'?
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // this function is the glue between react and redux
  // whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// anything returned from this function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, result should be passed to all of reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);