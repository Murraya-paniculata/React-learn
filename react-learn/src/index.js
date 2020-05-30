import React from 'react';
import ReactDOM from 'react-dom';
// import MyClassCom from './MyClassCom';
import MyFunCom from './MyFunCom';
import MyClassCom from './MyClassCom';

ReactDOM.render(<div>
  <MyFunCom number={1} />
  <MyClassCom number={2} />
</div>, document.getElementById('root'))