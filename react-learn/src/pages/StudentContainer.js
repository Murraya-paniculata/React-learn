import React, {useState, useEffect} from 'react'
import Students from '../components/Students/Students'
import Pager from '../components/page'
import { getStudents } from '../service/students'

export default function StudentContainer() {
    const [students, setStudents] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(0)
    const [panelNumber, setPanelNumber] = useState(5)
    //当页码和页容量发生变化时，将重新获取数据
    useEffect(() => {
        (async function () {
            const resp = await getStudents(page, limit);
            setStudents(resp.findByPage); //设置学生数组
            setTotal(resp.cont);//设置学生总数
        })();
    }, [page, limit])
    return (
        <>
            <Students Students={students}></Students>
            <Pager
                current={page}
                limit={limit}
                total={total}
                panelNumber={panelNumber}
                onPageChange={newPage => {
                    setPage(newPage);
                }}
            />
        </>
    )
}
