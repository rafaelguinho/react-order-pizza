const Order = ({ item }) => {
  return (
    <li key={item.id}>
      {item.flavor} {item.size}
    </li>
  );
};

export default Order;
