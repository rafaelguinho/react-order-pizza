import { formatTime } from "../../../util";

const Order = ({ item }) => {
  
  return (
    <li className="item" key={item.id}>
      <span data-testid="order-size" className="size">
        {item.size}
      </span>
      <span data-testid="order-flavor">{item.flavor}</span>
      <span data-testid="order-timestamp" className="timestamp">
        {formatTime(item.timestamp)}
      </span>
    </li>
  );
};

export default Order;
