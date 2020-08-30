import React, { Component } from 'react'
import './Menu.css'

export default class Menu extends Component {
    state = {
        menuList: [
            {
                path: '/students',
                name: '学生列表'
            },
            {
                path: '/students/add',
                name: '添加学生'
            },
            {
                path: '/courses',
                name: '课程列表'
            },
            {
                path: '/course/add',
                name: '添加课程'
            }
        ]
    }

    render() {
        let menus = this.state.menuList.map(item => <li className="menu-item" key={item.path}>
            <a href={item.path} key={item.path}>{item.name}</a>
        </li>)
        return (
            <ul className="menu">
                {menus}
            </ul>
        )
    }
}
