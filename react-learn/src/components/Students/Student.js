import React from 'react'

export default function Student(props) {
    return (
        <li>
            【姓名】<span>{props.name}</span>&nbsp;&nbsp;
            【性别】<span>{props.sex?'男':'女'}</span>&nbsp;&nbsp;
            【地址】<span>{props.address}</span>&nbsp;&nbsp;
            【电话】<span>{props.phone}</span>&nbsp;&nbsp;
        </li>
    )
}
