import React from 'react';
import { useSelector } from 'react-redux';
import Bookbar from './Bookbar';
import {
  BOOK_TYPES, SOCKET_CONNECTION_CONSTANTS,
} from '../store/constants';
import Bookrow from './Bookrow';
import Bookrowheader from './Bookrowheader';
import Bookloader from './Bookloader';

export default () => {
  const asks = useSelector((state) => state.books.asks);
  const asksPrices = useSelector((state) => state.books.asksPrices);
  const socketStatus = useSelector((state) => state.books.socketStatus);
  const isLoading = (socketStatus === SOCKET_CONNECTION_CONSTANTS.CLOSED_FOR_PRECISION_CHANGE
    || !asksPrices.length);

  let cumulativeTotal = 0;

  return (
    <div id="book-asks-container" className="book-side">

      <Bookrowheader type="asks" />

      <Bookbar bookData={asks} bookPrices={asksPrices} type={BOOK_TYPES.BOOK_ASKS} />

      {isLoading && <Bookloader />}
      {!isLoading && asksPrices.length && asksPrices.slice(0, 24).map((price) => {
        cumulativeTotal += asks[price].amount;
        return (<Bookrow key={price} type="asks" data={asks[price]} total={cumulativeTotal} />);
      })}

    </div>

  );
};
