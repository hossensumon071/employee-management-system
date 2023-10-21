
import { useState, useRef, useEffect } from "react"
import Swal from "sweetalert2";

const AddForm = ({employees, setEmployees, setIsAdding}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus(); 
  }, [])

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

    const id = employees.length + 1
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    }
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName} '$ data has been added.`,
      showCancelButton: false,
      timer: 1500
    })
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <h1>Add Employe</h1>
      <label htmlFor="firstName">First Name</label>
      <input 
      id="firstName"
      type="text"
      ref={textInput}
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
        onClick={() => setIsAdding(false)}
        />
      </div>
    </form>
    </div>
  )
}

export default AddForm