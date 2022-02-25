import React from "react";

// Library

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Header.css";

export default function Header() {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary mb-4 col-12">
      <div className="row">
          <div className="col">
            <img className="logo-store" src="./asset/image/download.png" alt="Logo Lily Store" />
            <h3 className="text-white">Welcome to Lily store</h3>
          </div>
        
      </div>

      <div className="col number-of-articles m-3">
        <h6 className=""> Number of articles </h6>
      </div>
    </div>
  );
}
