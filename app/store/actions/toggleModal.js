import { SETTINGS_MODAL_CONSTANTS } from './../constants/index'

export const getShowModal = () => {
    return { type: SETTINGS_MODAL_CONSTANTS.SHOW_MODAL, payload: null };
}

export const getHideModal = () => {
    return { type: SETTINGS_MODAL_CONSTANTS.HIDE_MODAL };
}
