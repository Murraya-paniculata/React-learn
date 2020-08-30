import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Menu from '../../components/menu/Menu'
import Students from '../StudentContainer'
import StudentAdd from '../StudentAdd'
import Courses from '../Courses'
import CourseAdd from '../CourseAdd'

export default class Admin extends Component {
    render() {
        return <Layout
            header={<Header></Header>}
            aside={<Menu></Menu>}
        >
            <Router>
                <Switch>
                    <Route path="/students" component={Students}/>
                    <Route path="/student/add" component={StudentAdd}/>
                    <Route path="/courses" component={Courses}/>
                    <Route path="/course/add" component={CourseAdd}/>
                </Switch>
            </Router>
        </Layout>
    }
}
