
import { combineReducers } from 'redux'
import books from './books'
import toggleModal from './toggleModal'
import bookVisualSetting from './bookVisualSetting'

export default combineReducers({
    books,
    toggleModal,
    bookVisualSetting
})
