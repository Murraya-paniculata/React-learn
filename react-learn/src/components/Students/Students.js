import React from 'react';
import Student from './Student';

export default function Students(props) {
    const stus = props.Students.map(item => <Student key={item.id} {...item}/>)
    return (
        <ul>
            {stus}
        </ul>
    )
}
