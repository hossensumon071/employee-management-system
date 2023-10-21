import TableRow from "./TableRow";
const TableView = ({ employees, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>first Name</th>
          <th>Lats Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((employee, index) => (
            <TableRow
              key={employee.id}
              employee={employee}
              index={index}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <tr colSpan={7}>
            <td>No Employee</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TableView;