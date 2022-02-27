import React from "react";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Card.css";

export default function UpdatedList(props) {
  return (
    
    <>
        <ul className="products-card nav nav-pills nav-justified col-6">
          <li className="nav-item" id="title-1">
            <h3>
              <span className="badge badge-pill badge-primary">
                {props.name}
              </span>
            </h3>
          </li>

          <li className="nav-item" id="quantity-1">
            <div style={{ color: "red" }}> {props.quantity} </div>
          </li>
          <li className="nav-item" id="price-1">
            {props.price} MAD 
          </li>

        </ul>
      
    </>
  );
}
