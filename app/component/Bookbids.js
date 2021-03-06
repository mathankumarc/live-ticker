import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Bookbar from './Bookbar'

export default () => {

    const bids = useSelector((state) => state.bids);
    const bidsPrices = useSelector((state) => state.bidsPrices);
    let cumulativeTotal = 0;
    let initialY =0;

    return (
        <div id="book-bids-container" className="book-side">
            <div className="header">
                <div className="header-col">Count</div>
                <div className="header-col text-align-right">Amount</div>
                <div className="header-col text-align-right">Total</div>
                <div className="header-col">Price</div>
            </div>

            <Bookbar bookData={bids} bookPrices={bidsPrices}></Bookbar>

            {bidsPrices.length && bidsPrices.map((price, index) => {
                cumulativeTotal += bids[price].amount;
                return (<div key={index} className="row">
                    <div className="row-col">{bids[price].cnt}</div>
                    <div className="row-col text-align-right">{bids[price].amount.toFixed(4)}</div>
                    <div className="row-col text-align-right">{cumulativeTotal.toFixed(4)}</div>
                    <div className="row-col">{bids[price].price}</div>
                </div>);
            })}
        </div>
    );
}
