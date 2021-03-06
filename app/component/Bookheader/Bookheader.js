import React from 'react'

import './Bookheader.scss'

export default () => {
    return (
        <div className="header-container">
            <div>
                <span>Order Book</span>
                <span className="opacity-half">BTC/USD</span>
            </div>

            <div>
                <span>settings</span>
            </div>
        </div>
    );
}