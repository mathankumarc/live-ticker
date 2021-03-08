import { PRECISION_SETTING_VALUES } from './../constants/index'

const initialState = PRECISION_SETTING_VALUES[0];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRECISION_VALUE':
            return action.payload;
        default:
            return state;
    }
}
