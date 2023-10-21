
const Header = ({setIsAdding}) => {
    return (
      <div className="header">
        <h1>Employee Managment Software</h1>
        <button onClick={() => setIsAdding(true)} className="employee-btn">Add Employee</button>
      </div>
    )
  }
  
  export default Header