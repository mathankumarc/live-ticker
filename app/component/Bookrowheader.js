import React from 'react';
import { useSelector } from 'react-redux';
import { BOOK_TYPES, FLOAT_PRECISION_LENGTH, COLUMN_ORDER_VALUES } from '../store/constants';

export default ({ type }) => {
  const columnOrderOption = useSelector((state) => state.bookColumnOrderSetting);
  return (
    <div className="header">
      {COLUMN_ORDER_VALUES[columnOrderOption][type] && COLUMN_ORDER_VALUES[columnOrderOption][type].map((column, index) => {
        switch (column) {
          case 'cnt':
            return <div key={index} className="row-col">Count</div>;
          case 'price':
            return <div key={index} className="row-col">Price</div>;
          case 'total':
            return <div key={index} className="row-col text-align-right">Total</div>;
          case 'amount':
            return <div key={index} className="row-col text-align-right">Amount</div>;
        }
      })}
    </div>
  );
};
