import React  from 'react';
import { useForm,  useFieldArray } from "react-hook-form";

// components
import  InitialCard   from "../components/InitialCard";
import UpdatedList from '../components/UpdatedList';

// CSS
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
       test: [{ name: "Milk", quantity: 1, price: 3.2 }]
     }
  });
  
  const {
    fields,
    insert
  } = useFieldArray({
    control,
    name: "bread",
    quantity: 1,
    price: 1,
  });

  const onSubmit = (data) => console.log("data", data);

    return  (
      <>
 
          {fields.map((item) => (
            <ul className='nav nav-pills nav-justified'>
              <UpdatedList
                key={item.id}
                name = {item.name}
                quantity = {item.quantity}
                price = {item.price}
                
              />
            </ul>

            ))} 
            
            
          {/* FORM */}
          <form className='input-group mb-3 d-flex' onSubmit={handleSubmit(onSubmit)} >
            

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
            />
            {errors.price && <span>Please enter the price of product</span>}

            <button
              type="submit"
              className='btn btn-primary'
              onClick={() =>
                insert(parseInt(2, 10), {
                })
              }
            >
              Create
            </button>
          </form>

      

      </>
    ) 
  
}