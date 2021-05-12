import { BOOK_VISUAL_SETTING_CONSTANTS } from '../constants/index';

export const getShowCumulative = () => ({ type: BOOK_VISUAL_SETTING_CONSTANTS.SHOW_CUMULATIVE, payload: null });

export const getShowAmount = () => ({ type: BOOK_VISUAL_SETTING_CONSTANTS.SHOW_AMOUNT });
