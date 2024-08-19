import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
const UserTable = ({ users, handleDrop }) => {
    const [show, setShow] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const navigate = useNavigate()



    const handleShow = (user) => {
        setSelectedUser(user);
        setShow(true);
        console.log(user);  


    }
    const handleClose = () => {
        setShow(false);
        setSelectedUser(null);
    }

    const handleDropClick = () => {
        if (selectedUser) {
            handleDrop(selectedUser.name);
            handleClose();
            console.log(selectedUser);
            
        }
       
    }

    const updateForm = (name) =>{
        navigate(`/update-user/${name}`)
    } 

    return (
        <>
           <div className="container">
           <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button type='submit' className='btn btn-primary' onClick={() => updateForm(user.name)} >Update</button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => handleShow(user)}>
                                    Drop user
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedUser && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Drop User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to drop the user <strong>{selectedUser.name}</strong>?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={handleDropClick}>
                            Drop
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
           </div>
        </>
    );
}

export default UserTable;
