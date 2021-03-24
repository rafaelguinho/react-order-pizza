import { formatTime } from "../../../util";
import { Item, Size, Timestamp } from "./styles";

const Order = ({ item }) => {
  
  return (
    <Item key={item.id}>
      <Size data-testid="order-size" className="size">
        {item.size}
      </Size>
      <span data-testid="order-flavor">{item.flavor}</span>
      <Timestamp data-testid="order-timestamp" className="timestamp">
        {formatTime(item.timestamp)}
      </Timestamp>
    </Item>
  );
};

export default Order;
