import React, { useContext } from 'react';
import { addItemContext } from '../parts/Main';

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Card.css";

import ItemsCard from './ItemsCard';

export default function UpdatedList({ name, quantity,price, onChange, onAdd}) {
    const updatedList = useContext(addItemContext);

    return (
    <>
        {updatedList.stockedItem.map((item) => {

            return (
                <ItemsCard
                    key = {item[0].id}
                    name = {item[0].name}
                    quantity = {item[0].quantity}
                    price = {item[0].price}
                    onChange={item[0].onChange}
                    onClick={item[0].onAdd}
                />
                    
            )
        })}
    </>
        
      
    )
  
}

