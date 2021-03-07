import React from 'react'
import Bookasks from './Bookasks'
import Bookbids from './Bookbids'
import Bookheader from './Bookheader/Bookheader'
import Settingsmodal from './Settingsmodal/Settingsmodal'
import { useSelector } from 'react-redux'

export default () => {
    const modalState = useSelector((state) => state.toggleModal);

    return(<>
        <Bookheader></Bookheader>
        <div id="books-container" className="books-container">
            <Bookbids></Bookbids>
            <Bookasks></Bookasks>
        </div>
        {modalState && <Settingsmodal></Settingsmodal>}
    </>);
}