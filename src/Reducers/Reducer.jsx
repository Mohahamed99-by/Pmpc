import React, { useReducer } from 'react';

// Initial state for the form
const initialState = {
  username: '',
  email: '',
  notes: '',
};

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return { ...state, [action.field]: action.payload };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const Reducers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handle input change events
  const handleChange = (e) => {
    dispatch({
      type: 'INPUT',
      field: e.target.name, 
      payload: e.target.value, 
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    return state;
  };

  // Handle form reset
  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={state.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Notes:
            <textarea
              name="notes"
              value={state.notes}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      <div>
        <h2>Form Data:</h2>
        <p>{state.username}</p>
        <p>{state.email}</p>
        <p>{state.notes}</p>
      </div>
    </div>
  );
};

export default Reducers;
