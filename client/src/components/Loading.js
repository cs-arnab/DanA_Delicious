import React from "react";
// import { Spinner } from 'react-bootstrap'

export default function Loading() {
  return (
    <div className="text-center">
      {/* <div className="spinner-border" role="status" style={{height:'100px' , width:'100px' , marginTop:'100px'}}>
        <span className="sr-only">Loading...</span>
      </div> */}

      <div className="alert alert-warning" role="alert">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        Loading . . .
      </div>
    </div>
  );
}
