import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BOOK_TYPES, FLOAT_PRECISION_LENGTH, COLUMN_ORDER_VALUES } from './../store/constants'

export default ({ type, data, total }) => {
    const currentPrecisionSetting = useSelector((state) => state.precisionSetting);
    const columnOrderOption = useSelector((state) => state.bookColumnOrderSetting);
    return (
        <div className="row">
            {COLUMN_ORDER_VALUES[columnOrderOption][type] && COLUMN_ORDER_VALUES[columnOrderOption][type].map((column, index) => {
                switch(column) {
                    case "cnt":
                        return <div key={index} className="row-col">{data.cnt}</div>
                    case "price":
                        return <div key={index} className="row-col">{data.price}</div>
                    case "total":
                        return <div key={index} className="row-col text-align-right">{total.toFixed(FLOAT_PRECISION_LENGTH[currentPrecisionSetting])}</div>
                    case "amount":
                        return <div key={index} className="row-col text-align-right">{data.amount.toFixed(FLOAT_PRECISION_LENGTH[currentPrecisionSetting])}</div>
                }
            })}
        </div>
    );
}
