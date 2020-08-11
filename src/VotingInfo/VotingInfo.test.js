import React from 'react';
import ReactDOM from 'react-dom';
import VotingInfo from './VotingInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VotingInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});