import React from "react";
import classes from "./CheckoutList.module.css";
import axios from "../../container/axios-base-instance/axios-builder";

const CheckoutList = props => {
  const OrderList = Object.keys(props.ingredients).map(igKey => {
    return (
      <tr>
        <td className={classes.Cell}>{igKey}</td>
        <td className={classes.Cell}>{props.ingredients[igKey]}</td>
      </tr>
    );
  });
  const placeOrder = () => {
    const orderObject = {
      ingredients: props.ingredients,
      totalPrice: props.totalPrice
    };
    axios
      .post("/orders.json", orderObject)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };
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
      <div>
        <button onClick={placeOrder}>Continue</button>
      </div>
    </div>
  );
};

export default CheckoutList;
