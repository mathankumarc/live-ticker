import { SOCKET_CONNECTION_CONSTANTS } from '../constants/index';

export const getSocketClosedForPrecisonChange = () => ({ type: SOCKET_CONNECTION_CONSTANTS.CLOSED_FOR_PRECISION_CHANGE });

export const getSocketSubscribed = () => ({ type: SOCKET_CONNECTION_CONSTANTS.SUBSCRIBED });
