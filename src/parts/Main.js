import React, { useState } from "react";

// components
import UpdatedList from "../components/UpdatedList";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [items, setItems] = useState([
    { itemName: "Milk", quantity: 1, price: 3.2},
  ]);

  // New List
  const [inputName, setInputName] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");
  const [inputPrice, setInputPrice] = useState("");


  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputName,
      quantity: inputQuantity,
      price: inputPrice,
    };
    const newItems = [...items, newItem];
      if(inputName !== "" && inputQuantity !== "" && inputPrice !=="") {
        setItems(newItems);
        setInputName("");
        setInputQuantity("");
        setInputPrice("");
      } else {
        console.log("Error");
      }

  };

  // Increment button
  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);

  };

  // Decrement button
  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 0) {
      newItems[index].quantity--;
      setItems(newItems);
    }  else {
      newItems.quantity = 0;
    }
    
  };

  // Delete button
  const handleRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <>
      {/* Add new item */}
      <div className="container">
        <div className="row">
          <div className="item-list col-12">
            {items.map((item, index) => { 
              return (
              <div
                className="nav nav-pills nav-justified row"
               
              >
                <UpdatedList 
                  key={item.id}
                  name={item.itemName}
                  quantity={item.quantity}
                  price={item.price}
                />

                <li className="nav-item">
                  <button
                    className="btn btn-secondary btn-sm"
                    id="increment-1"
                    onClick={() => handleQuantityIncrease(index)}
                  >
                    INCREMENT
                  </button>
                </li>

                
                  <li className="nav-item">
                     <button
                        className="btn btn-secondary btn-sm"
                        id="decrement-1"
                        onClick={() => handleQuantityDecrease(Math.max(index, 0))}
                      >
                        DECREMENT
                      </button>
                    
                      
                    
                  </li>
                
                  <li className="nav-item">
                    <button className="btn btn-danger btn-sm" id="remove-1"
                    onClick={() => handleRemove(index)}>
                      DELETE
                    </button>
                  </li> 

              </div>
            )})}
          </div>
        </div>
      </div>
      

      {/* FORM */}
      <div className="input-group mb-3 d-flex">
        <div className="input-group-prepend">
          <span className="input-group-text"> Articles </span>
        </div>

        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="Name"
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
        />

        <input
          name="quality"
          type="number"
          className="form-control"
          placeholder="Quantity"
          value={inputQuantity}
          onChange={(event) => setInputQuantity(event.target.value)}
        />

        <input
          name="price"
          type="number"
          className="form-control"
          placeholder="Price"
          value={inputPrice}
          onChange={(event) => setInputPrice(event.target.value)}
        />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => handleAddButtonClick()}
        >
          Create
        </button>
      </div>

    </>
  );
}