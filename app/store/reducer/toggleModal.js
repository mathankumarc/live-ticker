import { SETTINGS_MODAL_CONSTANTS } from './../constants/index'

const initialState = false;

export default (state = initialState, action) => {
    switch (action.type) {
        case SETTINGS_MODAL_CONSTANTS.SHOW_MODAL:
            return true;
        case SETTINGS_MODAL_CONSTANTS.HIDE_MODAL:
            return false
        default:
            return state;

    }
}
