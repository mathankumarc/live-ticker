import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { BOOK_TYPES, BOOK_VISUAL_SETTING_CONSTANTS } from '../store/constants';

const Bookbar = ({ bookData, bookPrices, type }) => {
  let initialY = 0;
  let cumulativeTotal = 0;
  let incrementalTotal = 0;
  bookPrices.forEach((price) => { cumulativeTotal += bookData[price].amount; });
  const currentBookVisualSetting = useSelector((state) => state.bookVisualSetting);

  return (
    <div className="book-bar-container">
      <svg className={type === BOOK_TYPES.BOOK_BIDS ? 'bids' : 'asks'}>
        {bookPrices.length && bookPrices.slice(0, 24).map((price) => {
          incrementalTotal += bookData[price].amount;
          // For the Amount graph.
          const scale = (BOOK_VISUAL_SETTING_CONSTANTS.SHOW_AMOUNT === currentBookVisualSetting) ? `scale(${bookData[price].amount / cumulativeTotal} 1)` : `scale(${incrementalTotal / cumulativeTotal} 1)`;

          // Trying for accumlated graph.
          // const scale = `scale(${bookData[price].amount/incrementalTotal} 1)`
          // const scale = `scale(${incrementalTotal/cumulativeTotal} 1)`
          // console.log(cumulativeTotal);
          const rect = <rect key={price} x="1" y={initialY} width="100%" transform={scale} height="16" fillOpacity="0.2" />;
          initialY += 16;
          return rect;
        })}
      </svg>
    </div>
  );
};

Bookbar.propTypes = {
  bookData: PropTypes.shape({
    price: PropTypes.number,
    cnt: PropTypes.number,
    amount: PropTypes.number,
  }).isRequired,
  bookPrices: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};

export default Bookbar;
