import { BOOK_VISUAL_SETTING_CONSTANTS } from './../constants/index'

const initialState = BOOK_VISUAL_SETTING_CONSTANTS.SHOW_CUMULATIVE;

export default (state = initialState, action) => {
    switch (action.type) {
        case BOOK_VISUAL_SETTING_CONSTANTS.SHOW_CUMULATIVE:
            return BOOK_VISUAL_SETTING_CONSTANTS.SHOW_CUMULATIVE;
        case BOOK_VISUAL_SETTING_CONSTANTS.SHOW_AMOUNT:
            return BOOK_VISUAL_SETTING_CONSTANTS.SHOW_AMOUNT
        default:
            return state;

    }
}
