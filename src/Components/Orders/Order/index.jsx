import React, { useEffect } from "react";

function Order({ item }) {
  useEffect(() => {
    console.log("once");
  }, []);

  useEffect(() => {
    console.log(`${JSON.stringify(item)}: props changed`);
  }, []);

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  });

  useEffect(() => {
    return () => {
      console.log("after every render");
    };
  });

  return (
    <li key={item.id}>
      {item.flavor} {item.size}
    </li>
  );
}

export default Order;
