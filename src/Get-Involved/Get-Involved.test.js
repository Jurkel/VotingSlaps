import React from 'react';
import ReactDOM from 'react-dom';
import GetInvolved from './Get-Involved';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GetInvolved />, div);
  ReactDOM.unmountComponentAtNode(div);
});