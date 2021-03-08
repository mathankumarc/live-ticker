import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getHideModal } from './../../store/actions/toggleModal'
import './Settingsmodal.scss';
import Bookvisualsetting from './Bookvisualsetting'
import Columnordersetting from './Columnordersetting'

export default () => {

    const modalState = useSelector((state) => state.toggleModal);
    const dispatch = useDispatch();

    const hideModal = () => {
        if (modalState) {
            dispatch(getHideModal());
        }
    }

    return (
        <div className="settings-modal-wrapper">
            <div className="settings-modal-container">
                <div className="settings-modal-header"><span title="Close" onClick={hideModal} className="close-icon fa fa-times"></span></div>
                <div className="settings-modal-title">
                    <h5>Interface settings for order book</h5>
                </div>
                <Bookvisualsetting></Bookvisualsetting>
                <Columnordersetting></Columnordersetting>
            </div>
            <div className="settings-modal-overlay"></div>
        </div>
    );
}