import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { COLUMN_ORDER_VALUES } from '../store/constants';

const Bookrowheader = ({ type }) => {
  const columnOrderOption = useSelector((state) => state.bookColumnOrderSetting);
  return (
    <div className="header">
      {COLUMN_ORDER_VALUES[columnOrderOption][type]
      && COLUMN_ORDER_VALUES[columnOrderOption][type].map((column) => {
        switch (column) {
          case 'cnt':
            return <div key={column} className="row-col">Count</div>;
          case 'price':
            return <div key={column} className="row-col">Price</div>;
          case 'total':
            return <div key={column} className="row-col text-align-right">Total</div>;
          case 'amount':
            return <div key={column} className="row-col text-align-right">Amount</div>;
          default:
            break;
        }
      })}
    </div>
  );
};

Bookrowheader.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Bookrowheader;
