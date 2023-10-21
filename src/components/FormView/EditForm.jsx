import { useState } from "react";
import Swal from "sweetalert2";

const EditForm = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const { id } = selectedEmployee;

  const [employeeData, setEmployeeData] = useState({
    firstName: selectedEmployee.firstName,
    lastName: selectedEmployee.lastName,
    email: selectedEmployee.email,
    salary: selectedEmployee.salary,
    date: selectedEmployee.date,
  });

  const { firstName, lastName, email, salary, date } = employeeData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All Fields are required.",
        showCancelButton: true,
      });
    }

    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { id, ...employeeData } : employee
    );
    console.log(updatedEmployees)
    setEmployees(updatedEmployees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${firstName} ${lastName}'s data has been Updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Edit Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={handleInputChange}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={handleInputChange}
        />
        <div style={{ marginTop: "50px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-btn"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditForm;