import React from 'react';
import { useSelector } from 'react-redux';
import Bookbar from './Bookbar';
import { BOOK_TYPES, SOCKET_CONNECTION_CONSTANTS } from '../store/constants';
import Bookrow from './Bookrow';
import Bookrowheader from './Bookrowheader';
import Bookloader from './Bookloader';

export default () => {
  const bids = useSelector((state) => state.books.bids);
  const bidsPrices = useSelector((state) => state.books.bidsPrices);
  const socketStatus = useSelector((state) => state.books.socketStatus);
  const isLoading = (socketStatus === SOCKET_CONNECTION_CONSTANTS.CLOSED_FOR_PRECISION_CHANGE
    || !bidsPrices.length);

  let cumulativeTotal = 0;

  return (
    <div id="book-bids-container" className="book-side">
      <Bookrowheader type="bids" />

      <Bookbar bookData={bids} bookPrices={bidsPrices} type={BOOK_TYPES.BOOK_BIDS} />
      {isLoading && <Bookloader />}
      {!isLoading && bidsPrices.length && bidsPrices.slice(0, 24).map((price, index) => {
        cumulativeTotal += bids[price].amount;
        return (<Bookrow key={price} type="bids" data={bids[price]} total={cumulativeTotal} />);
      })}
    </div>
  );
};
