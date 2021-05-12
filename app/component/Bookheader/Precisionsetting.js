import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PRECISION_SETTING_VALUES } from '../../store/constants/index';

export default () => {
  const dispatch = useDispatch();

  const currentPrecisionSetting = useSelector((state) => state.precisionSetting);

  const bidsPrices = useSelector((state) => state.books.bidsPrices);

  const currentPrecisionIndex = PRECISION_SETTING_VALUES.findIndex((val) => currentPrecisionSetting === val);

  const disableDecrease = currentPrecisionIndex === PRECISION_SETTING_VALUES.length - 1;

  const increaseDecrease = currentPrecisionIndex === 0;

  const decreasePrecision = () => {
    if (currentPrecisionIndex === PRECISION_SETTING_VALUES.length - 1 || !bidsPrices.length) {
      return;
    }
    dispatch({ type: 'SET_PRECISION_VALUE', payload: PRECISION_SETTING_VALUES[currentPrecisionIndex + 1] });
  };

  const increasePrecision = () => {
    if (currentPrecisionIndex === 0 || !bidsPrices.length) {
      return;
    }
    dispatch({ type: 'SET_PRECISION_VALUE', payload: PRECISION_SETTING_VALUES[currentPrecisionIndex - 1] });
  };

  return (
    <>
      <span onClick={decreasePrecision} title="Increase Precision" className={`fa fa-minus precision-icon ${(disableDecrease || !bidsPrices.length) ? 'fa-disabled' : ''}`} />
      <span onClick={increasePrecision} title="Decrease Precision" className={`fa fa-plus precision-icon ${(increaseDecrease || !bidsPrices.length) ? 'fa-disabled' : ''}`} />
    </>
  );
};
