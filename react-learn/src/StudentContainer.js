import React, {useState, useEffect} from 'react';
import Pager from './components/page/index';
import Students from './components/Students/Students';
import Modal from './components/modal/Modal';
import { getStudents } from './service/students';

export default function StudentContainer() {
    const [students, setstudents] = useState([]);
    const [current, setcurrent] = useState(1);
    const [total, settotal] = useState(0);
    const [limit, setlimit] = useState(10);
    const [panelNumber, setpanelNumber] = useState(5);
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        (async function() {
            setisLoading(true);
            const resp = await getStudents(current, limit);
            settotal(resp.cont);
            setstudents(resp.findByPage);
            setisLoading(false);
        })()
    }, [current, limit])

    return (
        <div className="container">
            <Students Students={students}/>
            <Pager
                total={total}
                current={current}
                limit={limit}
                panelNumber={panelNumber}
                onPageChange={(newPage) => {
                    setcurrent(newPage)
                }}>
            </Pager>
            <Modal isLoading={isLoading}/>
        </div>
    )
}
