import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Animation from './Animation.test';

describe(`Animation component`, () => {
it('renders the Animation', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Animation />
    </BrowserRouter>,
    div
  )
  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});
})

