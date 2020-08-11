import React from 'react';
import ReactDOM from 'react-dom';
import GetInformed from './Get-Informed';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GetInformed />, div);
  ReactDOM.unmountComponentAtNode(div);
});