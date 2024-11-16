import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Affilier from "./components/Affilier";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Affilier" component={Affilier} />
      </Switch>
    </Router>
  );
};

export default Routes;
