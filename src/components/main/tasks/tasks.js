import React, { useEffect, useState } from 'react'
import { Table, Button, Modal,Form } from 'react-bootstrap';
import axios from 'axios';
import AddTask from './addTask';
function Tasks() {

    const [taskList, setTaskList] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => getTaskList(), [])

    useEffect(() => {console.log('change tasklist called');}, [taskList])

    let getTaskList = () => {
        console.log('tasklist called');
        axios.get('http://jsonplaceholder.typicode.com/todos').then((result) => {
            setTaskList(result.data)
            localStorage.setItem('tasklist',result.data)

        }).catch((err) => {
            console.log(err);
        })
    }

    let deleteTask = (itemToBeDeleted) => {
        const updatedTaskList = taskList.filter((item)=>  item.id != itemToBeDeleted)
        setTaskList(updatedTaskList);
    }

    let newList = (data) =>{
        setTaskList(data);
    }

    return (
        <div style={{ padding: 30 }}>
            <Table responsive>
                <tbody>
                    {taskList.length && taskList.map((data, index) => {
                        return <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.completed}</td>
                            <td><Button variant="danger" onClick={() => deleteTask(data.id)}>Delete</Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>
            <Button variant="primary" onClick={() => setModalShow(true)} >Add task</Button>
            <AddTask
                show={modalShow}
                onHide={() => setModalShow(false)}
                taskList={taskList}
                newList={newList}
            />
        </div>
    )
}

export default Tasks
