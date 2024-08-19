import { useParams, useNavigate } from "react-router-dom";
import { useContext, useRef, useEffect } from "react";
import { myContext } from "./UserApp";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserUpdate = () => {
    const { name } = useParams();
    const { users, setUsers } = useContext(myContext);

    const nameRef = useRef();
    const emailRef = useRef();

    const navigate = useNavigate();

    const user = users.find(user => user.name === name);

    useEffect(() => {
        if (user) {
            nameRef.current.value = user.name;
            emailRef.current.value = user.email;
        }
        
    }, [user]);
    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedUser = {
            name: nameRef.current.value,
            email: emailRef.current.value,
        };
       
        const saveUpdate = users.map(u => u.name === name ? updatedUser : u)
        console.log(saveUpdate);

        setUsers(saveUpdate);
        navigate('/list-user')
    };



  

    return (
        <div className="container mt-5">
            <h2>Edit User</h2>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" ref={nameRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" ref={emailRef} />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default UserUpdate;
