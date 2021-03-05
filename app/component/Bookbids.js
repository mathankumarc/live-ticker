import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default () => {

    const bids = useSelector((state) => state.bids);

    return (
        <div id="book-bids-container" className="book-side">
            <div className="header">
                <div className="header-col">Count</div>
                <div className="header-col">Amount</div>
                <div className="header-col">Total</div>
                <div className="header-col">Price</div>
            </div>
            {bids.length && bids.map((bid, index) => {
                return (<div key={index} className="row">
                    <div className="row-col">{bid.cnt}</div>
                    <div className="row-col">{bid.amount}</div>
                    <div className="row-col">Total</div>
                    <div className="row-col">{bid.price}</div>
                </div>);
            })}
        </div>
    );
}
