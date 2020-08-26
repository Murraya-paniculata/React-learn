export async function getStudents(page, limit) {
    const resp = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${page}&size=${limit}`)
            .then(res => res.json())
            .then(res => res.data);
            return resp;
}