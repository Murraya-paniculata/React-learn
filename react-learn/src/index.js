import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import src1 from './assets/1.jpg';
import src2 from './assets/2.jpg';
import src3 from './assets/3.jpg';

let index = 0;
const imgList = [src1, src2, src3];

const container = document.getElementById('root');

let timer;
function start () {
  stop();
  timer = setInterval(()=>{
    index = (index+1)%3;
    render();
  }, 1000)
}

function render () {
  ReactDOM.render(<img alt="图片" src={imgList[index]}></img>, container)
}

function stop () {
  clearInterval(timer);
}

render();

start();

container.onmouseenter = function(){
  console.log(1);
  stop();
}

container.onmouseleave = function(){
  console.log(0);
  start();
}