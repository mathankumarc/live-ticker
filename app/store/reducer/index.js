
import { combineReducers } from 'redux'
import books from './books'
import toggleModal from './toggleModal'
import bookVisualSetting from './bookVisualSetting'
import precisionSetting from './precisionSetting'
import bookColumnOrderSetting from './bookColumnOrderSetting'

export default combineReducers({
    books,
    toggleModal,
    bookVisualSetting,
    precisionSetting,
    bookColumnOrderSetting
})
