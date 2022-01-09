import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    // console.log(event.target.value);
    props.onExpenseYear(event.target.value);
  };

  // const allExpenseHandler = (event) =>{
  //   console.log("ALL EXPENSE BUTTON IS CLICKED");
  // }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        {/* <button type="text" onClick={allExpenseHandler}>ALL EXPENSES</button> */}
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="2023"> 2023</option>
          <option value="2022"> 2022</option>
          <option value="2021"> 2021</option>
          <option value="2020"> 2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
