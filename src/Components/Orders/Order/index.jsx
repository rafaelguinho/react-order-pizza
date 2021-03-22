const Order = ({ item }) => {
  const formatTime = (timestamp) => {
    var date = new Date(timestamp);
    return date.toLocaleTimeString("pt-BR");
  };
  return (
    <li className="item" key={item.id}>
      <span className="size">{item.size}</span> {item.flavor}
      <span className="timestamp">{formatTime(item.timestamp)}</span>
    </li>
  );
};

export default Order;
