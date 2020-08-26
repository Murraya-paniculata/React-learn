import React, { Component } from 'react';
import Pager from './components/page/index';
import Students from './components/Students/Students';
import Modal from './components/modal/Modal';

export default class StudentContainer extends Component {
    state = {
        dd: '123456',
        PagerConf: {
            current: 1, // 当前页码
            total: 0, // 总数据量
            limit: 10, // 页容量
            panelNumber: 5, // 数字页码最多显示多少个
        },
        students: [], // 学生列表
        isLoading: false // 是否正在加载中
    }
    constructor(props) {
        super(props);
        this.fetchStudents()
    }

    handlePageChange = (newPage) => {
        this.setState({
            PagerConf: {...this.state.PagerConf, ...{current: newPage}}
        }, () => this.fetchStudents())
    }

    async fetchStudents() {
        this.setState({
            isLoading: true
        })
        const resp = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.PagerConf.current}&size=${this.state.PagerConf.limit}`)
            .then(res => res.json())
            .then(res => res.data);
        this.setState({
            PagerConf: {...this.state.PagerConf, ...{total: resp.cont}},
            students: resp.findByPage
        }, () => {
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        return (
            <div className="container">
                <Students Students={this.state.students}/>
                <Pager {...this.state.PagerConf} onPageChange={this.handlePageChange}></Pager>
                <Modal isLoading={this.state.isLoading}/>
            </div>
        )
    }
}
