import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default () => {

    const asks = useSelector((state) => state.asks);

    return (
        <div id="book-bids-container" className="book-side">
            <div className="header">

                <div className="header-col">Price</div>
                <div className="header-col">Total</div>
                <div className="header-col">Amount</div>
                <div className="header-col">Count</div>
                
            </div>

            {asks.length && asks.map((ask, index) => {
                return (<div key={index} className="row">
                    <div className="row-col">{ask.price}</div>
                    <div className="row-col">Total</div>
                    <div className="row-col">{ask.amount}</div>
                    <div className="row-col">{ask.cnt}</div>
                </div>);
            })}

        </div>

);
}
