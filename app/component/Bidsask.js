import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default () => {

    const bidsAsk = useSelector((state) => state);
    console.log(bidsAsk);

    return (
        <div id="book-bids-container" className="book-side">
            <div className="header">
                <div className="header-col">Count</div>
                <div className="header-col">Amount</div>
                <div className="header-col">Total</div>
                <div className="header-col">Price</div>
            </div>
            {bidsAsk.length && bidsAsk.map((bid, index) => {
                return (<div key={index} className="row">
                    <div className="row-col">{bid[1]}</div>
                    <div className="row-col">{bid[2]}</div>
                    <div className="row-col">Total</div>
                    <div className="row-col">{bid[0]}</div>
                </div>);
            })}
        </div>
    );
}
