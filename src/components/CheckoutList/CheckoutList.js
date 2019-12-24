import React from "react";
import classes from "./CheckoutList.module.css";

const CheckoutList = props => {
  const OrderList = Object.keys(props.ingredients).map(igKey => {
    return (
      <tr>
        <td className={classes.Cell}>{igKey}</td>
        <td className={classes.Cell}>{props.ingredients[igKey]}</td>
      </tr>
    );
  });
  return (
    <div>
      <div
        style={{
          fontSize: "20px",
          margin: "30px 0px",
          fontWeight: "800",
          textDecoration: "underline"
        }}
      >
        Your Checkout List
      </div>
      <table
        style={{ margin: "10px auto", borderSpacing: "0px", color: "white" }}
      >
        <thead>
          <th className={classes.Cell}>Ingredient</th>
          <th className={classes.Cell}>Quantity</th>
        </thead>
        <tbody>{OrderList}</tbody>
      </table>
      <div style={{ fontSize: "20px" }}>
        <strong>Total Price:</strong> ${props.totalPrice}
      </div>
    </div>
  );
};

export default CheckoutList;
