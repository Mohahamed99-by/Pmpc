import React, { useRef, useState, useEffect } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';

  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);


  

  return (
    <>
      <form onSubmit={handleSubmit}>
        {(new Date()).toLocaleString()}
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" ref={passwordRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    <div>
        <ul>
            {formData && (
                <>
                    <li>Name: {formData.name}</li>
                    <li>Email: {formData.email}</li>
                    <li>Password: {formData.password}</li>
                </>
            )}
        </ul>
    </div>
    </>
  );
};

export default RefForm;
