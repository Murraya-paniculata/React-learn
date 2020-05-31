import React from 'react';
import Student from './student';

export default class StudentList extends React.Component {
    render () {
        const students = this.props.stud.map(item => <Student key={item.id} {...item}/>)
        return (
            <ul>
                {students}
            </ul>
        )
    }
}
