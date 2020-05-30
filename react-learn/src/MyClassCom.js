import React from 'react';
import './index.css'
import src1 from './assets/1.jpg';
import src2 from './assets/2.jpg';
import src3 from './assets/3.jpg';

const imgList = [src1, src2, src3];

export default class MyClassCom extends React.Component {
    render () {
        return (
            <div>
                <img alt="图片" src={imgList[0]}></img>
                {this.props.number}
            </div>
        )
    }
}