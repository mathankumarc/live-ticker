import React from 'react';
import { connect } from 'react-redux';
import { getSetColumnOrderSetting } from '../../store/actions/bookColumnOrderSetting';

class Columnordersetting extends React.Component {
  setColumnOrder(val) {
    if (val !== this.props.currentColumnOrderOption) {
      this.props.setColumOrderSetting(val);
    }
  }

  render() {
    return (
      <div data-qa-id="settings-modal-content" className="settings-modal-content">
        <div className="settings-section">
          <div className="section-title">
            Choose the order of the columns in the order book:
          </div>
          <div className="settings-option">
            <div className="option-row">
              <div onClick={this.setColumnOrder.bind(this, 0)} className={`radio-circle ${this.props.currentColumnOrderOption === 0 ? 'selected' : ''}`} />
              <div>
                <span className="option-text bids">Count Price Amount Total</span>
                <span className="option-text asks">Total Amount Price Count</span>
              </div>
            </div>
            <div className="option-row">
              <div onClick={this.setColumnOrder.bind(this, 1)} className={`radio-circle ${this.props.currentColumnOrderOption === 1 ? 'selected' : ''}`} />
              <div>
                <span className="option-text bids">Count Amount Total Price</span>
                <span className="option-text asks">Price Total Amount Count</span>
              </div>
            </div>
            <div className="option-row">
              <div onClick={this.setColumnOrder.bind(this, 2)} className={`radio-circle ${this.props.currentColumnOrderOption === 2 ? 'selected' : ''}`} />
              <div>
                <span className="option-text bids">Count Total Price Amount</span>
                <span className="option-text asks">Amount Price Total Count</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ currentColumnOrderOption: state.bookColumnOrderSetting });

const mapDispatchToProps = (dispatch) => ({
  setColumOrderSetting: (option) => dispatch(getSetColumnOrderSetting(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Columnordersetting);
