import React, { Component } from 'react'

export default class Daojishi extends Component {
    constructor(props){
        super(props);
        let timer = setInterval(() => {
            if(this.state.num === 0) {
                clearInterval(timer)
            } else {
                this.setState({
                    num: this.state.num - 1
                })
            }
        }, 1000);
        this.state = {
            num: this.props.num
        }
    }
    render() {
        if(this.state.num === 0) {
            return (
                <div>活动正式开始</div>
            )
        }
        return (
            <div>
                倒计时开始：{this.state.num}
            </div>
        )
    }
}
