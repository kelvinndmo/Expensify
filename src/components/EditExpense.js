import React from "react";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const EditExpense = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(expense.id, expense));
          props.history.push("/");
          console.log("updated", expense);
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    ),
  };
};
export default connect(mapStateToProps)(EditExpense);
