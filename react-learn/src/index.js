import React from 'react';
import ReactDOM from 'react-dom';
import Pager from "./components/Pager"

ReactDOM.render(
  <Pager
    current={3}
    total={100}
    panelNumber={5}
    limit={9}>
  </Pager>,
  document.getElementById('root')
)
