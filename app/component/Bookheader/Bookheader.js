import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getShowModal } from './../../store/actions/toggleModal'
import Precisionsetting from './Precisionsetting';

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
                <span className="currency-title">BTC/USD</span>
            </div>

            <div>
                <Precisionsetting></Precisionsetting>
                <span className="fa fa-cog settings-icon" title="Settings" onClick={showModal}></span>
            </div>
        </div>
    );
}