import { combineReducers } from 'redux';
import BookReducer from './red_books';
import ActiveBook from './red_selected_book';

const rootReducer = combineReducers({
    books : BookReducer,
    activeBook : ActiveBook
});

export default rootReducer;
