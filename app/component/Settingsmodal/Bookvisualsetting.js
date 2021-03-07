import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getShowCumulative, getShowAmount } from './../../store/actions/bookVisualSetting'
import { BOOK_VISUAL_SETTING_CONSTANTS } from './../../store/constants/index'

export default () => {

    const dispatch = useDispatch();

    const currentBookVisualSetting = useSelector((state) => state.bookVisualSetting);

    const setBookVisualToCumulative = () => {
        if (currentBookVisualSetting !== BOOK_VISUAL_SETTING_CONSTANTS.SHOW_CUMULATIVE) {
            dispatch(getShowCumulative());
        }
    }

    const setBookVisualToAmount = () => {
        if (currentBookVisualSetting !== BOOK_VISUAL_SETTING_CONSTANTS.SHOW_AMOUNT) {
            dispatch(getShowAmount());
        }
    }

    const isCumulativeSelected = currentBookVisualSetting === BOOK_VISUAL_SETTING_CONSTANTS.SHOW_CUMULATIVE;

    return (
        <div data-qa-id="settings-modal-content" className="settings-modal-content">
            <div className="settings-section">
                <div className="section-title">
                    Book Depth Visualization:
            </div>
                <div className="settings-option">
                    <div className="option-row">
                        <div onClick={setBookVisualToCumulative} className={"radio-circle " + (isCumulativeSelected ? 'selected' : '')}></div>
                        Cumulative (default)
                </div>
                    <div className="option-row">
                        <div onClick={setBookVisualToAmount} className={"radio-circle " + (!isCumulativeSelected ? 'selected' : '')}></div>
                        Amount
                </div>
                </div>
            </div>
        </div>
    );
}
