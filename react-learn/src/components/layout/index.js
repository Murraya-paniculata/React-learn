import React, { Component } from 'react'
import './index.css'

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <header className="container-header">
                    {this.props.header}
                </header>
                <div className="container-middle">
                    <aside className="aside">
                        {this.props.aside}
                    </aside>
                    <div className="main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
