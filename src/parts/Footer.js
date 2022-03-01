import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div>
      <code className="text-dark position-absolute top-100 start-50 translate-middle">
        Created by
        <a
          href="https://github.com/ChiBienayme/react-lily-store.git"
          target="none"
        >
          <span> Ha Chi HOANG </span>
        </a>
        by using React - 25/02/2022
      </code>
    </div>
  );
}
