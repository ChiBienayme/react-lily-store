import React from 'react';

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Card.css";

// import Buttons
import Increment from "./Buttons/Increment";
import Decrement from "./Buttons/Decrement";
import Delete from "./Buttons/Delete";

export default function Initial() {
  const milkPrice = 3.2;

    return (
      
            <div className='products-card col-12'>
                <ul className='nav nav-pills nav-justified'>

                  <li className='nav-item' id='title-1'>
                    <h3>
                      <span className='badge badge-pill badge-primary'>
                          Milk
                      </span>
                    </h3>
                  </li>

                  <li className='nav-item' id='quantity-1'>
                      <div style={{color: "red"}}> Out of stock </div>
                  </li>

                  <li className='nav-item' id='price-1'>
                      {milkPrice} MAD
                  </li>

                  <li className='nav-item'>
                    <Increment />
                  </li>

                  <li className='nav-item'>
                    <Decrement/>
                  </li>

                  <li className='nav-item'>
                    <Delete />
                  </li>
                </ul>
                <hr />
                
            </div>
      
    )
  
}

