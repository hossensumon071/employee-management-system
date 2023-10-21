
import Swal from "sweetalert2";
import {employeesData} from "../data/data";
import { useState } from "react";


import Header from "../components/Header/Header";
import TableView from "./TableView/TableView";
import AddForm from "../components/FormView/AddForm";
import EditForm from "../components/FormView/EditForm";

const Employees = () => {
  const [employees, setEmployees] = useState([...employeesData]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const employee = employees.find((employee) => employee.id === id);
  
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: "warning",
      title: "Are You Sure?",
      text: "You Won't able to revert this",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "No, Cancel!"
    }).then(result => {
      if(result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: `${employee.firstName} ${employee.lastName} "$ Data has been deleted.`,
        showConfirmButton: false,
        timer: 1500
      });

      setEmployees(employees.filter(employee => employee.id !== id))
      }
    })
  }

  return (
    <div className="container">
      {/* list */}
      {!isAdding && !isEditing && (
        <div className="employe-view">
          <Header setIsAdding={setIsAdding}/>
          <TableView
          employees={employees}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          />
        </div>
      )}
      {/* add  */}
      {isAdding && (
        <AddForm
        employees={employees}
        setEmployees={setEmployees}
        setIsAdding={setIsAdding}
        />
      )}
      {/* edit  */}
      {isEditing && (
        <EditForm
        employees={employees}
        selectedEmployee={selectedEmployee}
        setEmployees={setEmployees}
        setIsEditing={setIsEditing}
        />
      )}
    </div>
  )
}

export default Employees