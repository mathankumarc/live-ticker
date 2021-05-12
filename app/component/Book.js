import React from 'react';
import { useSelector } from 'react-redux';
import Bookasks from './Bookasks';
import Bookbids from './Bookbids';
import Bookheader from './Bookheader/Bookheader';
import Settingsmodal from './Settingsmodal/Settingsmodal';

export default () => {
    const modalState = useSelector((state) => state.toggleModal);

    return(<>
        <Bookheader />
        <div id="books-container" className="books-container">
            <Bookbids></Bookbids>
            <Bookasks></Bookasks>
        </div>
        {modalState && <Settingsmodal></Settingsmodal>}
    </>);
}