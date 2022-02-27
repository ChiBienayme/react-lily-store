import React from "react";
import Icon from "../asset/image/download.png"

// Library

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Header.css";

export default function Header() {
  return (


      <div className="nav navbar-expand-sm navbar-dark bg-primary mb-4 col-12">
        
          <div className="row">
              <div className="m-3">
                <img className="logo-store" src={Icon} alt="Logo Lily Store" /> 
                <h3 className="text-white">Welcome to Lily store</h3>
              </div>
            
          </div>
     
        

        <div className="col number-of-articles m-3">
          <h6 className=""> Number of articles </h6>
        </div>
      </div>

    
  );
}
