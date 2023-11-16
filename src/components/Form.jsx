import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Form = ({ users, setUsers }) => {
  const [alert, setAlert] = useState(false);

  const [form, setForm] = useState({
    name: "",
    surName: "",
    phoneNumber: "",
  });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newId = uuidv4();
    const updateForm = { ...form, id: newId };
    setUsers([...users, updateForm]);
    setForm({
      name: "",
      surName: "",
      phoneNumber: "",
    });
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  return (
    <form className="row" onSubmit={onSubmit}>
      <p>Contact App</p>
      <input
        type="text"
        required
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={onChangeInput}
      />
      <input
        type="text"
        required
        placeholder="Surname"
        name="surName"
        value={form.surName}
        onChange={onChangeInput}
      />
      <input
        type="tel"
        required
        placeholder="Phone Number"
        name="phoneNumber"
        value={form.phoneNumber}
        onChange={onChangeInput}
      />

      {alert ? (
        <button className="btn btn-primary  rounded-pill ">Person Saved</button>
      ) : (
        <button
          className="btn btn-outline-success  rounded-pill "
          type="submit"
        >
          Save
        </button>
      )}

      <Link to="/list">
        <button className="btn btn-outline-secondary mt-3 rounded-pill">
          Liste
        </button>
      </Link>
    </form>
  );
};

export default Form;
