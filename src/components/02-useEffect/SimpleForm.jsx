import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { email, name } = formState;
  useEffect(() => {
    console.log("hey");
  }, []);
  useEffect(() => {
    console.log("form");
  }, [formState]);
  useEffect(() => {
    console.log("email");
  }, [email]);

  const handleInputChange = ({ target }) => {
      setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Carlos"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Carlos@email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === '123' && <Message/>}
    </>
  );
};
