import { SOCKET_CONNECTION_CONSTANTS } from './../constants/index'
export default (state = SOCKET_CONNECTION_CONSTANTS.NOT_OPENED, action) => {
    switch(action.type) {
        case SOCKET_CONNECTION_CONSTANTS.CLOSED_FOR_PRECISION_CHANGE:
            return SOCKET_CONNECTION_CONSTANTS.CLOSED_FOR_PRECISION_CHANGE
        case SOCKET_CONNECTION_CONSTANTS.SUBSCRIBED:
            return SOCKET_CONNECTION_CONSTANTS.SUBSCRIBED
        default:
            return state;
    }
}
