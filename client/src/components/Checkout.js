import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      {loading && <Loading />}
      {success && <Success success="Your Order Placed Successfully" />}
      {error && <Error error="Order Failed" />}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        stripeKey="pk_test_51J1DBHSEuewwsQjbYl7l4xczZDYYfwnfACndqu7ebL3eoskxwtAANAuEt3dr3enVFblb0BvbQxSe4SxtKLwq1rZG007D9aqABi"
        currency="INR"
      >
        <button className="pay-button m-2 pr-4 pl-4 p-2">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
