import React from 'react';
import renderer from '../test-utils/index';
import Bookrow from './Bookrow.js';

it('Renders Bookrow', () => {
  const BookrowComponent = renderer(
    <Bookrow key={0} type="asks" data={{ price: 40000, cnt: 2, amount: 40000 }} total={40000} />,
  );
  const tree = BookrowComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
