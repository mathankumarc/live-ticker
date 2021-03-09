import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Bookbar from './Bookbar'
import { BOOK_TYPES, FLOAT_PRECISION_LENGTH } from './../store/constants'

export default () => {

    const bids = useSelector((state) => state.books.bids);
    const bidsPrices = useSelector((state) => state.books.bidsPrices);
    const currentPrecisionSetting = useSelector((state) => state.precisionSetting);
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

            <Bookbar bookData={bids} bookPrices={bidsPrices} type={BOOK_TYPES.BOOK_BIDS}></Bookbar>

            {bidsPrices.length && bidsPrices.slice(0, 24).map((price, index) => {
                cumulativeTotal += bids[price].amount;
                return (<div key={index} className="row">
                    <div className="row-col">{bids[price].cnt}</div>
                    <div className="row-col text-align-right">{bids[price].amount.toFixed(FLOAT_PRECISION_LENGTH[currentPrecisionSetting])}</div>
                    <div className="row-col text-align-right">{cumulativeTotal.toFixed(FLOAT_PRECISION_LENGTH[currentPrecisionSetting])}</div>
                    <div className="row-col">{bids[price].price}</div>
                </div>);
            })}
        </div>
    );
}
