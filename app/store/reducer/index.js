
import { combineReducers } from 'redux'
import books from './books'
import toggleModal from './toggleModal'

export default combineReducers({
    books,
    toggleModal
})
