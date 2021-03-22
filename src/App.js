import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewOrder from "./Components/NewOrder";
import Orders from "./Components/Orders";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-order">New order</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/new-order">
          <NewOrder />
        </Route>
        <Route path="/">
          <Orders />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
