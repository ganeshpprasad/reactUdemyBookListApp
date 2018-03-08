import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'; // import action(s) . Creates a dispatch element in BookList. 
import {bindActionCreators} from 'redux';

class BookList extends Component{
    
    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li 
                    key={book.title}
                    onClick={ () => this.props.selectBook(book) } //this refers to BookList cause of () =>
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
    
    render() {
        return <ul className="list-group">
            {this.renderList()}
        </ul>
    }
    
}

function mapStateToProps(state){
    return {
        books : state.books
    };
}

// This function to use selectBook in BookList ( Passed to connect ).
function mapDispatchToProps(dispatch){
    // bindActionCreators -> makes action flow through reducers.
    // Ok.
    return bindActionCreators({selectBook : selectBook}, dispatch);
}

// connect connects a function returning data to BookList ( A react Component ).
// Any data we need in props variable can be sent using connect.
// Weird.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);