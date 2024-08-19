import { useState } from "react";

const Test = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
      });
    console.log(form);
    const handleInputName = (e) => {
        const nameTarget = e.target.value;
        setForm({ ...form, name: nameTarget });
      };
    
      const handleInputEmail = (e) => {
        const emailTarget = e.target.value;
        setForm({ ...form, email: emailTarget });
      };

      return (
        <div>
            {(new Date()).toLocaleString()}
            <p>Hello {form.name} !</p>
            <p>Your email is {form.email}</p>
          <label>
             Name:
            <input
              value={form.name}
              onChange={handleInputName}
            />
          </label>
          <label>
            Email:
            <input
              value={form.email}
              onChange={handleInputEmail}
            />
          </label>
        </div>
      );
};

export default Test;
