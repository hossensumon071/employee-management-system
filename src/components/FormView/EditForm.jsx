import { useState } from "react";
import Swal from "sweetalert2";


const EditForm = ({employees, selectedEmployee, setEmployees, setIsEditing}) => {
  // const {id, firstName, lastName, email, salary, date} = selectedEmployee;

  const id = selectedEmployee.id

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All Fields are required.",
        showCancelButton: true
      })
    }
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    }
    
    for(let i = 0; i <employees.length; i--) {
      if(employees[i].id === id) {
        employees.splice(i, 1, newEmployee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${firstName} ${lastName} '$ data has been Updated.`,
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <h1>Edit Employe</h1>
      <label htmlFor="firstName">First Name</label>
      <input 
      id="firstName"
      type="text"
      name="firstName"
      value={firstName}
      onChange={e => setFirstName(e.target.value)}
      />
      <label htmlFor="firstName">Last Name</label>
      <input 
      id="lastName"
      type="text"
      name="lastName"
      value={lastName}
      onChange={e => setLastName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input 
      id="email"
      type="email"
      name="lastName"
      value={email}
      onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="salary">Sallery ($)</label>
      <input 
      id="salary"
      type="number"
      name="salary"
      value={salary}
      onChange={e => setSalary(e.target.value)}
      />
      <label htmlFor="date">Date</label>
      <input 
      id="date"
      type="date"
      name="date"
      value={date}
      onChange={e => setDate(e.target.value)}
      />
      <div style={{marginTop : "50px"}}>
        <input type="submit" value="Add"/>
        <input
        style={{marginLeft: "12px"}}
        className="muted-btn"
        type="button"
        value="Cancel"
        onClick={() => setIsEditing(false)}
        />
      </div>
    </form>
    </div>
  )
}

export default EditForm