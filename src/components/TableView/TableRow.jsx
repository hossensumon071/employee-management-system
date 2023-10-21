// TableRow.js
import React from 'react';

const TableRow = ({ employee, index, handleEdit, handleDelete }) => {
  const { id, firstName, lastName, email, salary, date } = employee;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{formatCurrency(salary)}</td>
      <td>{date}</td>
      <td>
        <div className="btn">
          <button onClick={() => handleEdit(id)}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
