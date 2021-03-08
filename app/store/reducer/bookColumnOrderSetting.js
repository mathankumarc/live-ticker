import { COLUMN_ORDER_SETTING_ACTION } from './../constants/index'

export default (state = 0, action) => {
    switch(action.type) {
        case COLUMN_ORDER_SETTING_ACTION:
            return action.payload;
        default:
            return state;
    }
}
