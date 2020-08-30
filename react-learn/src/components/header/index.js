import React from 'react'
import './index.css'

export default function Header() {
    return (
        <div className="header-content">
            <div className="header-left">学生管理系统</div>
            <div className="header-right">
                admin
                <button>退出登录</button>
            </div>
        </div>
    )
}
