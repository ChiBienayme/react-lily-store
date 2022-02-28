import React from "react";
import Icon from "../asset/image/download.png"

// Library

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Header.css";

export default function Header() {
  return (


      <div className="nav navbar-expand-sm navbar-dark bg-primary mb-4 col-lg-12">
        
          <div className="row ">
              <div className="d-flex m-3">
                <img className="logo-store m-2" src={Icon} alt="Logo Lily Store" /> 
                <h2 className="text-white m-3">Welcome to Lily's store</h2>
              </div>
            
          </div>
     
        

        <div className="col number-of-articles m-4">
          <h6 className=""> Number of articles </h6>
        </div>
      </div>

    
  );
}
