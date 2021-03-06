import React from 'react'

export default ({bookData, bookPrices}) => {
    let initialY = 0;
    let cumulativeTotal = 0;
    bookData.reduce((data) => {return cumulativeTotal +  data.amount}, 0);
    return (
        <div className="book-bar-container">
            <svg>
            {bookPrices.length && bookPrices.map((price, index) => {
                const scale = `scale(${price/cumulativeTotal} 1)`
                const rect = <rect key={index} x="1" y={initialY} width="100%" transform={scale} height="17" fillOpacity="0.2"></rect>
                initialY += 12;
                return rect;
            })}
            </svg>
        </div>
    );
}