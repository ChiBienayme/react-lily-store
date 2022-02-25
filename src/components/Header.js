import React from 'react';

// Library


// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Header.css"


export default function Header() {

    return (
     
            <div className='nav container col-12'>
                <div className='d-flex col-6'>
                    

                   <h2>Welcome to my store</h2>
                  
                </div>
                 
                 <div className='d-flex col-6 float-left'>
                  <h2>Number of articles</h2>
                 </div>
                
            </div>
      
    )
  
}

