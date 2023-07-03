import React from "react";
import "./Table.css";

interface Props {
  items: {}[];
  onClick: () => void;
}

const Table = ({ items, onClick }: Props) => {
  return (
    <div>
      <select className="form-control select" id="exampleFormControlSelect1">
        <option>All Categories</option>
        <option>Groceries</option>
        <option>Utilities</option>
        <option>Entertainment</option>
      </select>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col delete-col"></th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ description, amount, category }, index) => {
            return (
              <tr key={crypto.randomUUID()}>
                <td>{description}</td>
                <td>${amount}</td>
                <td>{category}</td>
                <td>
                  <button onClick={onClick}> Delete </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
