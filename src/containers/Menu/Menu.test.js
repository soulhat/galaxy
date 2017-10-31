import React from 'react';
import { shadow } from 'enzyme';
import Menu from './Menu';

it('renders without crashing', () => {
  const wrapper = shadow(<Menu />);
});
