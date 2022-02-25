import React, {  createContext,  useState } from 'react';
import { useForm } from "react-hook-form";

// components
import  InitialCard   from "../components/InitialCard";
import UpdatedList from '../components/UpdatedList';

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

export const addItemContext = createContext({
  stockedItem: [],
});

const initialList = [
  {
    name: "Milk",
    quantity: 1,
    price: 3.2,
  }
]

export default function Home() {

  const [list, setList] = useState(initialList);
  // const [addNewItem, setAddNewItem] = useState([]);
  const [stockedItem, setStockedItem] = useState([]);

  const value = {
    stockedItem: stockedItem,
    setStockedItem: setStockedItem,
  }
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //    test: [{ name: "Milk", quantity: 1, price: 3.2 }]
    // }
  });

  
  // Function Submit
  const handleChange = (e) => {
    setList(e.target.value)
  }
  const getItem = () => {
    setList(!list)
  }

  // const handleAdd = (i) => {
  //  const newList = list.concat({ 
  //    name: i.target.value, 
  //    quantity: Number(i.target.value),
  //    price: Number(i.target.value),
  //   });
  //   setList(newList);
  //   setAddNewItem('');

  // }


    return  (
      <>
        <addItemContext.Provider value={value}>
           {list.map((item) => (
            <ul className='nav nav-pills nav-justified'>
              <UpdatedList
                name = {item.name}
                quantity = {item.quantity}
                price = {item.price}
                onChange={handleChange} 
                onClick={handleSubmit(getItem)}
                />
            </ul>

          ))} 
          
              
          {/* FORM */}
          <form className='input-group mb-3 d-flex' >
              
                <InitialCard />

                <div className='input-group-prepend'>
                  <span className='input-group-text'> Articles </span>
                </div>

                <input
                  name="name" type="text"
                  className="form-control"
                  placeholder="Name"
                  {...register("name", {
                    required: true,
                    
                  })}
                  onChange={handleChange}
                  
                />
                {errors.name && <span>Please enter a number of product</span>}


                <input
                  name="quality" type="number"
                  className="form-control"
                  placeholder="Quantity"
                  {...register("quantity", {
                    required: true,
                    value:/[0-9]/,
                  })}
                  onChange={handleChange}
                />
                {errors.quantity && <span>Please enter a number of product</span>}

                <input
                  name="price" type="number"
                  className="form-control"
                  placeholder="Price"
                  {...register("price", {
                    required: true,
                    value:/[0-9]/,
                  })}
                  onChange={handleChange}
                />
                {errors.price && <span>Please enter the price of product</span>}

                <button
                  type="submit"
                  className='btn btn-primary'
                >
                  Create
                </button>
          </form>

        </addItemContext.Provider>

      </>
    ) 
  
}

