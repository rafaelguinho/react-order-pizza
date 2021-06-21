import React, { useState, useEffect } from "react";
import axios from "axios";
import Order from "./Order";
import Items from "./styles";

function Orders() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(`${isLoaded}: isLoaded changed`);
  }, [isLoaded]);

  useEffect(() => {
    axios.get("http://localhost:5006/api/orders").then(
      (response) => {
        setIsLoaded(true);
        setItems(response.data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Items>
        {items.map((item) => (
          <Order key={item.id} item={item} />
        ))}
      </Items>
    );
  }
}

export default Orders;
