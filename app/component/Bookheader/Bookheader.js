import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getShowModal } from './../../store/actions/toggleModal'

import './Bookheader.scss'

export default () => {
    const modalState = useSelector((state) => state.toggleModal);
    const dispatch = useDispatch();
    console.log(modalState);
    const showModal = () => {
        if (!modalState) {
            dispatch(getShowModal());
        }
    }
    return (
        <div className="header-container">
            <div>
                <span>Order Book</span>
                <span className="opacity-half">BTC/USD</span>
            </div>

            <div>
                <span onClick={showModal}>settings</span>
            </div>
        </div>
    );
}