import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FLOAT_PRECISION_LENGTH, COLUMN_ORDER_VALUES } from '../store/constants';

const Bookrow = ({ type, data, total }) => {
  const currentPrecisionSetting = useSelector((state) => state.precisionSetting);
  const columnOrderOption = useSelector((state) => state.bookColumnOrderSetting);

  return (
    <div className="row">
      {COLUMN_ORDER_VALUES[columnOrderOption][type]
      && COLUMN_ORDER_VALUES[columnOrderOption][type].map((column) => {
        switch (column) {
          case 'cnt':
            return <div key={column} className="row-col">{data.cnt}</div>;
          case 'price':
            return <div key={column} className="row-col">{data.price}</div>;
          case 'total':
            return <div key={column} className="row-col text-align-right">{total.toFixed(FLOAT_PRECISION_LENGTH[currentPrecisionSetting])}</div>;
          case 'amount':
            return <div key={column} className="row-col text-align-right">{data.amount.toFixed(FLOAT_PRECISION_LENGTH[currentPrecisionSetting])}</div>;
          default:
            return <div />;
        }
      })}
    </div>
  );
};

Bookrow.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    price: PropTypes.number,
    cnt: PropTypes.number,
    amount: PropTypes.number,
  }).isRequired,
  total: PropTypes.number.isRequired,
};

export default Bookrow;
