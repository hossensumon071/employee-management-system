const TableRow = ({ employee, i, handleEdit, handleDelete }) => {
    const {id, firstName, lastName, email, salary, date} = employee;

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: null
    })
    return (
      <tr>
        <td>{i + 1}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{formatter.format(salary)}</td>
        <td>{date}</td>
        <td>
          <div className="btn">
          <button 
            onClick={() => handleEdit(employee.id)}
            >
                Edit
            </button>
            <button 
            onClick={() => handleDelete(employee.id)}
            >
                Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }
  
  export default TableRow;

