import React, { useState } from "react";

// components
import UpdatedList from "../components/UpdatedList";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [items, setItems] = useState([
    { itemName: "Milk", quantity: 1, price: 3.2, isSelected: false },
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
      isSelected: false,
    };


    const newItems = [...items, newItem];

    setItems(newItems);
    setInputName("");
    setInputQuantity("");
    setInputPrice("");

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
    
    newItems[index].quantity--;

    setItems(newItems);

  };

  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
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
            {items.map((item, index) => (
              <div
                className="nav nav-pills nav-justified row"
                onClick={() => toggleComplete(index)}
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
                  onClick={() => handleRemove(index,1)}>
                    DELETE
                  </button>
                </li> 
              </div>
            ))}
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

        <button className="btn btn-danger btn-sm" id="remove-1"
                  onClick={() => handleRemove()}>
                    DELETE
                  </button>
      </div>

    </>
  );
}
