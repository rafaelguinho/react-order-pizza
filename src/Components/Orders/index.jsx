import React, { useState, useEffect } from "react";
import Order from './Order'

function Orders() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(`${isLoaded}: isLoaded changed`);
  }, [isLoaded]);

  useEffect(() => {
    fetch("https://localhost:5005/api/orders")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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
      <ul>
        {items.map((item) => (
          <Order key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}

export default Orders;
