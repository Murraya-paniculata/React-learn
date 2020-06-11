import React, { Component } from 'react'
import Modal from './modal'

export default class Test extends Component {
    state = {
        showModal: false
    }

    showModal = () => {
        this.setState({
            showModal: true
        })
    }
    hidenModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div>
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3159856553,1527464792&fm=27&gp=0.jpg" alt="" />
                {
                    this.state.showModal ? (
                        <Modal onClose={this.hidenModal}>
                            <h1>我是狗子</h1>
                            <button onClick={this.hidenModal}>关闭蒙层</button>
                        </Modal>
                    ): null
                }
                <button onClick={this.showModal}>显示蒙层</button>
            </div>
        )
    }
}
