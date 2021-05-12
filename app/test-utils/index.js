import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store/store';

export default (Component) => renderer.create(
  <Provider store={store}>
    {Component}
  </Provider>,
);
