import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

const AddForm = ({ employees, setEmployees, setIsAdding }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    date: "",
  });

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, salary, date } = formData;

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All Fields are required.",
        showCancelButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      ...formData,
    };

    setEmployees([...employees, newEmployee]);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Add Employee</h1>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type={key === "email" ? "email" : key === "salary" ? "number" :key === "date" ? "date" : "text" }
              ref={textInput}
              name={key}
              value={value}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div style={{ marginTop: "50px" }}>
          <input type="submit" value="Add" />
          <button
            style={{ marginLeft: "12px" }}
            className="muted-btn"
            type="button"
            onClick={() => setIsAdding(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
