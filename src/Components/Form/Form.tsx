import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Description</label>
          <input
            type="email"
            className="form-control"
            id=""
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="Enter Dolar Amount"
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Groceries</option>
            <option>Utilities</option>
            <option>Entertainment</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
