// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Card.css";

// import Buttons
import Increment from "./Buttons/Increment";
import Decrement from "./Buttons/Decrement";
import Delete from "./Buttons/Delete";

export default function ItemsCard(props) {
  return (
    <div className="products-card col-12">
      <ul className="nav nav-pills nav-justified">
        <li className="nav-item" id="title-1">
          <h3>
            <span className="badge badge-pill badge-primary">{props.name}</span>
          </h3>
        </li>

        <li className="nav-item" id="quantity-1">
          <div style={{ color: "red" }}> {props.quantity} </div>
        </li>
        <li className="nav-item" id="price-1">  {props.price} MAD </li>
        <li className="nav-item"> <Increment /> </li>
        <li className="nav-item"> <Decrement /> </li>
        <li className="nav-item"> <Delete /> </li>
      </ul>
      <hr />
    </div>
  )
}
