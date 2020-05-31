import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './components/studentlList'

const appkey = 'demo13_1545210570249'

async function fetchData () {
  const stud = await fetch("http://api.duyiedu.com/api/student/findAll?appkey=" + appkey)
  .then(res=> res.json()).then(res => res.data);
  console.log(stud);
  return stud;
}

fetchData();

async function render() {
  const stud = await fetchData();
  ReactDOM.render(<StudentList stud={stud}></StudentList>, document.getElementById('root'))
}

render();