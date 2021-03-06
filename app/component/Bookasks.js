import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default () => {

    const asks = useSelector((state) => state.asks);
    const asksPrices = useSelector((state) => state.asksPrices);
    let cumulativeTotal = 0;

    return (
        <div id="book-bids-container" className="book-side">
            <div className="header">

                <div className="header-col">Price</div>
                <div className="header-col text-align-right">Total</div>
                <div className="header-col text-align-right">Amount</div>
                <div className="header-col">Count</div>
                
            </div>

            {asksPrices.length && asksPrices.map((price, index) => {
                cumulativeTotal += asks[price].amount;
                return (<div key={index} className="row">
                    <div className="row-col">{asks[price].price}</div>
                    <div className="row-col text-align-right">{cumulativeTotal.toFixed(4)}</div>
                    <div className="row-col text-align-right">{asks[price].amount.toFixed(4)}</div>
                    <div className="row-col">{asks[price].cnt}</div>
                </div>);
            })}

        </div>

);
}
