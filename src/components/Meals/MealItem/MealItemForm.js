import React from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = props => {
  return (
    <form className={classes.form}>
      <Input
        label={`amount_  ${props.id}`}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className>+ Add</button>
    </form>
  );
};

export default MealItemForm;
