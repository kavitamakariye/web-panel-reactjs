import React, { useEffect, useState } from 'react'
import { Table, Button, Modal,Form } from 'react-bootstrap';

function AddTask(props) {
    const [newTaskTitle, setNewTaskTitlte ] = useState('');
    const [newTaskCompleted, setNewTaskCompleted ] = useState(false);

    let adddTasks = () =>{
        let obj = {
            id:props.taskList.length+1,
            title:newTaskTitle,
            completed:newTaskCompleted,
            key:props.taskList.length+1
        }
        props.newList([...props.taskList,obj]);
        clearModalData()
    }
    let onNewTitle = (e) =>{
        setNewTaskTitlte(e.target.value)
    }
    let clearModalData = () =>{
        props.onHide()
        setNewTaskCompleted(false);
        setNewTaskTitlte('');
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Task
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={newTaskTitle} onChange={(e)=>setNewTaskTitlte(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Completed</Form.Label>
                        <Form.Control type="text" placeholder="Enter completed" value={newTaskCompleted} onChange={(e)=>setNewTaskCompleted(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary"  onClick={()=>adddTasks()}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddTask;