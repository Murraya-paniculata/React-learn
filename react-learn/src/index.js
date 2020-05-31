import React from 'react';
import ReactDOM from 'react-dom';
import Ball from './components/Ball'

const ballConfig = {
  left: 100,
  top: 100,
  bg: '#000',
  xSpeed: 500,
  ySpeed: 500,
}

ReactDOM.render(
  <Ball ballConfig={ ballConfig }/>,
  document.getElementById('root')
)
