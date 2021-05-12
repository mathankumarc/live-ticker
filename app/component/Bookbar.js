import React from 'react';
import { useSelector } from 'react-redux';
import { BOOK_TYPES, BOOK_VISUAL_SETTING_CONSTANTS } from '../store/constants';

export default ({ bookData, bookPrices, type }) => {
  let initialY = 0;
  let cumulativeTotal = 0;
  let incrementalTotal = 0;
  bookPrices.map((price) => { cumulativeTotal += bookData[price].amount; });
  const currentBookVisualSetting = useSelector((state) => state.bookVisualSetting);

  return (
    <div className="book-bar-container">
      <svg className={type === BOOK_TYPES.BOOK_BIDS ? 'bids' : 'asks'}>
        {bookPrices.length && bookPrices.slice(0, 24).map((price, index) => {
          incrementalTotal += bookData[price].amount;
          // For the Amount graph.
          const scale = (BOOK_VISUAL_SETTING_CONSTANTS.SHOW_AMOUNT === currentBookVisualSetting) ? `scale(${bookData[price].amount / cumulativeTotal} 1)` : `scale(${incrementalTotal / cumulativeTotal} 1)`;

          // Trying for accumlated graph.
          // const scale = `scale(${bookData[price].amount/incrementalTotal} 1)`
          // const scale = `scale(${incrementalTotal/cumulativeTotal} 1)`
          // console.log(cumulativeTotal);
          const rect = <rect key={index} x="1" y={initialY} width="100%" transform={scale} height="16" fillOpacity="0.2" />;
          initialY += 16;
          return rect;
        })}
      </svg>
    </div>
  );
};
