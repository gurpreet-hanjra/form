import React, { useState } from 'react';
import './App.css';
import Form from './Form';

const App = () => {

  const [visible, setVisibilty] = useState(true)

  const getData = (data: any) => {
    console.log('getData', data);
  }

  const handleAddressToggle = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setVisibilty(!visible)
  }

  const dynamicForm = ['title', 'name'];

  return (
    <div className="container">
      <Form handleSubmit={getData}>
        <p>Demo of prefilled and dynamic rendering of inputs based on condition.</p>
        <input
          type="text"
          placeholder="First name"
          required
          defaultValue="John" />

        <input
          name="lastName"
          placeholder="Last name"
          type="text"
          required />

        <input
          name="age"
          placeholder="Age"
          type="number"
          required />

        {visible
          ? <input
            name="address"
            placeholder="Address"
            type="text"
            required />
          : null}

        <input
          type="submit"
          value="SUBMIT FORM" />

        <button onClick={handleAddressToggle}>Toggle visibility of Address input</button>
      </Form>

      <Form handleSubmit={getData}>
        <p>Demo of inputs created in loop via map from array</p>
        {
          dynamicForm.map((field, index) => {
            return (<input
              key={`${field}${index}`}
              name={field}
              type="text"
              placeholder={field} />)
          })
        }
        <input
          type="submit"
          value="SUBMIT DYNAMIC FORM" />
      </Form>

      <Form handleSubmit={getData}>
        <p>Demo of custom validation</p>
        <label>Company user name</label>
        <input name="name" type="text" required pattern="^wooga." title="must start with wooga." />
        <input type="submit" value="SUBMIT FORM" />
      </Form>
    </div>
  );
}

export default App;
