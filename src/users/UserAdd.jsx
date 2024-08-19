import { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const UserAdd = ({ handleOk }) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    
    const name = useRef(null);
    const email = useRef(null); 

    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }

    const addUser = (e) => {
        e.preventDefault();
        const userData = {
            name: name.current.value,
            email: email.current.value
        };
        handleOk(userData);

        // Reset form fields
        name.current.value = "";
        email.current.value = "";
        handleClose();
        navigate('/list-user')
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add User
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addUser}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                                type="text" 
                                ref={name} 
                                className="form-control" 
                                id="name" 
                                placeholder="Enter name" 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                ref={email} 
                                className="form-control" 
                                id="email" 
                                placeholder="Enter email" 
                            />
                        </div>
                        <Button type="submit" variant="primary">Add User</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UserAdd;
