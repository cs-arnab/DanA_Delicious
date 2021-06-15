import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Ordersscreen() {
  AOS.init({
    duration:1200
  })
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div>
      <h2 style={{ fontSize: "30px" }}>My Orders</h2>
      <hr />
      <div className="row justify-content-center m-2">
        {loading && <Loading />}
        {error && <Error error="Something Went Wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div className="col-md-8 m-2 p-1" data-aos="fade-down" style={{backgroundColor:'rgb(120, 119, 99)',color:'white',borderRadius:'10px'}}>
                <div className="myorder flex-container p-3 table-responsive-sm">
                  {/* display items */}
                  <div className="text-left w-100 m-1 mr-2">
                    <h2>Items</h2><hr/>
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.name} [{item.varient}] * {item.quantity} = 
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  {/* display address */}
                  <div className="text-left w-100 m-1 mr-2">
                    <h2>Address</h2><hr/>
                    <p>Street : {order.shippingAddress.street}</p>
                    <p>City : {order.shippingAddress.city}</p>
                    <p>Country : {order.shippingAddress.country}</p>
                    <p>Pincode : {order.shippingAddress.pincode}</p>
                  </div>
                  {/* Order Status */}
                  <div className="text-left w-100 m-1 mr-2">
                    <h2>Status</h2><hr/>
                    <p>Order Amount : {order.orderAmount}</p>
                    <p>Order Id : {order._id}</p>
                    <p>Transaction Id : {order.transactionId}</p>
                    <p>Date : {order.createdAt.substring(0,10)}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
