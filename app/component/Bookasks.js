import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Bookbar from './Bookbar'
import { BOOK_TYPES, FLOAT_PRECISION_LENGTH } from './../store/constants'

export default () => {

    const asks = useSelector((state) => state.books.asks);
    const asksPrices = useSelector((state) => state.books.asksPrices);
    let cumulativeTotal = 0;
    //console.log(asksPrices.length);

    return (
        <div id="book-asks-container" className="book-side">
            <div className="header">

                <div className="header-col">Price</div>
                <div className="header-col text-align-right">Total</div>
                <div className="header-col text-align-right">Amount</div>
                <div className="header-col">Count</div>
                
            </div>

            <Bookbar bookData={asks} bookPrices={asksPrices} type={BOOK_TYPES.BOOK_ASKS}></Bookbar>

            {asksPrices.length && asksPrices.map((price, index) => {
                cumulativeTotal += asks[price].amount;
                return (<div key={index} className="row">
                    <div className="row-col">{asks[price].price}</div>
                    <div className="row-col text-align-right">{cumulativeTotal.toFixed(FLOAT_PRECISION_LENGTH)}</div>
                    <div className="row-col text-align-right">{asks[price].amount.toFixed(FLOAT_PRECISION_LENGTH)}</div>
                    <div className="row-col">{asks[price].cnt}</div>
                </div>);
            })}

        </div>

);
}
