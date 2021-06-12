import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {addToCart,deleteFromCart} from '../actions/cartActions'
import Checkout from "../components/Checkout";

export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal=cartItems.reduce((x,item)=>x+item.price,0)
  const dispatch=useDispatch()
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>My Cart</h2>
          <h2>Total Item : {cartItems.length}</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                {/* basic information */}
                <div className="text-left m-1 w-100">
                  <h6>
                    {item.name} [{item.varient}]
                  </h6>
                  <h6 className="text-sm-left font-weight-bold">
                    Price : {item.quantity}*{item.prices[0][item.varient]}=
                    {item.price}
                  </h6>
                  <h6 style={{ display: "inline" }}>Quantity : </h6>
                  <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                  <b> {item.quantity} </b>
                  <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                  <hr/>
                </div>
                {/* image */}
                <div className='m-10 w-100'>
                    <img src={item.image} style={{ height:'80px',width:'80px'}}/>
                </div>
                {/* delete button */}
                <div className='m-10 w-80 mt-5'>
                <i className="fa fa-trash" style={{color:'red'}} aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                </div>
              </div>
            );
          })}
        </div>
        {/* right side calculate sub total */}
        <div className="col-md-4 text-right">
          <h2 style={{fontSize:'40px'}}>SubTotal : {subtotal} /-</h2>
          {/* <button className="pay-button">Pay Now</button> */}
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
