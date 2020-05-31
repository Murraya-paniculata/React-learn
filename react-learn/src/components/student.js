import React from 'react'

export default function Student(props) {
    return (
        <li>
            【学生姓名】{props.name}
            【学生邮箱】{props.email}
            【性别】{props.sex?'女孩儿': '男孩儿'}
        </li>
    )
}