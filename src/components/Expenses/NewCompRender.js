import React, { useState } from "react";
import Card from "../UI/Card";
import "./NewCompRender.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const NewCompRender = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const handleExpenseyear = (year) => {
    // console.log(year, "from NewComponent");
    // console.log(props.items);
    setFilteredYear(year);
  };

  //FILTERING THE EXPENSE ARRAY IN THE BASIS OF YEAR CHOOSEN.
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onExpenseYear={handleExpenseyear}
      />

      <ExpensesChart expenses={filteredExpenses} />
      {/* ADDING <ExpenseItem> COMP TO EACH N EVERY ENTRY OF EXPENSE RECEIVED FROM APP.JS COMP. */}
      <ExpensesList items={filteredExpenses} />
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))} */}

      {/* {filteredExpenses.length === 0 ? (
        <p>NO Expenses Found</p>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )} */}
    </Card>
  );
};

export default NewCompRender;
