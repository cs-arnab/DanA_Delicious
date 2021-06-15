import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

export default function Filter() {
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("");

  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3 w-100">
          <input
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            value={searchkey}
            type="text"
            className="form-control w-100 mb-1"
            placeholder="search pizzas"
          />
        </div>
        <div className="col-md-3 w-100">
          <select
            className="form-control w-100 mt-2"
            onChange={(e) => {
              setcategory(e.target.value);
            }}
            value={category}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non Veg</option>
          </select>
        </div>
        <div className="col-md-3 w-100">
          {/* <button className="btn w-100 mt-2">FILTER</button> */}
          {/* <button className="filter-button w-100 mt-2">FILTER</button> */}
          <button
            className="filter-button mt-2 w-100 "
            onClick={() => {
              dispatch(filterPizzas(searchkey, category));
            }}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}


//inline style in filter button
// text-white
// bg-warning
// style={{
//   borderRadius: "5px",
//   padding: "3px",
//   fontSize: "20px",
//   border: "none",
//   color:"white",
// }}
