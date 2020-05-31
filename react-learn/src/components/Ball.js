import React, { Component } from 'react'
import './ball.css'

export default class Ball extends Component {
    constructor(props){
        super(props);
        console.log(props.ballConfig);
        this.state = {
            left: props.ballConfig.left || 0,
            top: props.ballConfig.top || 0,
            bg: props.ballConfig.bg || '#f40',
            xSpeed: props.ballConfig.xSpeed,
            ySpeed: props.ballConfig.ySpeed,
        }
        const duration = 10; // 间隔的毫秒数

        setInterval(() => {
            const xDis = this.state.xSpeed * duration / 1000;
            const yDis = this.state.ySpeed * duration / 1000;
            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;
            if(newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            } else if (newLeft>=document.documentElement.clientWidth-100){
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
            if(newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            } else if (newTop>=document.documentElement.clientHeight-100){
                newLeft = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }
            this.setState({
                left: newLeft,
                top: newTop
            })
        }, duration);
    }
    render() {
        return (
            <div className="ball" style={{
                left: this.state.left,
                top: this.state.top,
                background: this.state.bg
            }}>
            </div>
        )
    }
}
