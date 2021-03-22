import React, { useState, useEffect } from "react";
import axios from "axios";
import Order from "./Order";

function Orders() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(`${isLoaded}: isLoaded changed`);
  }, [isLoaded]);

  useEffect(() => {
    axios.get("https://localhost:5005/api/orders").then(
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
      <ul className="items">
        {items.map((item) => (
          <Order key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}

export default Orders;
