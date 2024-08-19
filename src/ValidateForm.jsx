import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';

const ValidateForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const cityRef = useRef();
    const [formSent, setFormSent] = useState(false);

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [cityError, setCityError] = useState('');

    const handleSet = () => {
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
        cityRef.current.value = '';
    };

    const handValue = () => {
        const nameVal = nameRef.current.value;
        const emailVal = emailRef.current.value;
        const messageVal = messageRef.current.value;
        const cityVal = cityRef.current.value;
        return { nameVal, emailVal, messageVal, cityVal };
    }

    const handleErrors = () => {
        const { nameVal, emailVal, messageVal, cityVal } = handValue();
       
        let isValid = true;

        if (nameVal.trim() === '') {
            nameRef.current.style.border = '1px solid red';
            setNameError('Name is required');
            isValid = false;
        } else {
            nameRef.current.style.border = '';
            setNameError('');
        }
        if (emailVal.trim() === '') {
            emailRef.current.style.border = '1px solid red';
            setEmailError('Email is required');
            isValid = false;
        } else {
            emailRef.current.style.border = '';
            setEmailError('');
        }
        if (messageVal.trim() === '') {
            messageRef.current.style.border = '1px solid red';
            setMessageError('Message is required');
            isValid = false;
        } else {
            messageRef.current.style.border = '';
            setMessageError('');
        }
        if (cityVal.trim() === '') {
            cityRef.current.style.border = '1px solid red';
            setCityError('City is required');
            isValid = false;
        } else {
            cityRef.current.style.border = '';
            setCityError('');
        }

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = handleErrors();
        if (isValid) {
            const { nameVal, emailVal, messageVal, cityVal } = handValue();
            console.log({ nameVal, emailVal, messageVal, cityVal });
            handleSet();
            setFormSent(true);
        }
    };
    

    const handleInputNameChange = () => {
        setNameError('');
        nameRef.current.style.border = '';
    };
    const handleInputEmailChange = () => {
        setEmailError('');
        emailRef.current.style.border = '';
    };
    
    const handleInputMessageChange = () => {
        setMessageError('');
        messageRef.current.style.border = '';
    };
    const handleInputCityChange = () => {
        setCityError('');
        cityRef.current.style.border = '';
    };

    return (
        <>
            {formSent && (
                <div className="alert alert-success mt-4" role="alert">
                    Form submitted successfully!
                </div>
            )}

            <div className="container mt-5 ml-4">
                <h2 className="text-center">Validate Form</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            ref={nameRef}
                            name="name"
                            className="form-control"
                            onChange={handleInputNameChange}
                        
                        />
                        <span className="text-danger">{nameError}</span>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            ref={emailRef}
                            name="email"
                            className="form-control"
                            onChange={handleInputEmailChange}
                            
                        />
                        <span className="text-danger">{emailError}</span>
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea
                            name="message"
                            rows="2"
                            ref={messageRef}
                            className="form-control"
                            onChange={handleInputMessageChange}
                            
                        ></textarea>
                        <span className="text-danger">{messageError}</span>
                    </div>
                    <div className="form-group">
                        <label>City:</label>
                        <select
                            name="city"
                            ref={cityRef}
                            className="form-control"
                            onChange={handleInputCityChange}
                            
                        >
                            <option value="">Select a city</option>
                            <option value="fes">Fes</option>
                            <option value="taza">Taza</option>
                        </select>
                        <span className="text-danger">{cityError}</span>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3 w-100">Submit</button>
                </form>
            </div>
        </>
    );
};

export default ValidateForm;
