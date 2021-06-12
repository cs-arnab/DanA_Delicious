import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch ,useSelector} from 'react-redux';
import { placeOrder } from "../actions/orderActions";



export default function Checkout({subtotal}) {
  const dispatch = useDispatch()
    function tokenHander(token){
        console.log(token);
        dispatch(placeOrder(token,subtotal))
    }
  return (
    <div>
        
      <StripeCheckout 
      amount={subtotal*100}
      // shippingAddress
      token={tokenHander}
      stripeKey='pk_test_51J1DBHSEuewwsQjbYl7l4xczZDYYfwnfACndqu7ebL3eoskxwtAANAuEt3dr3enVFblb0BvbQxSe4SxtKLwq1rZG007D9aqABi'
      currency='INR'
      >
          <button className="pay-button m-2 pr-4 pl-4 p-2">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
