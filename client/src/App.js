// import logo from "./logo.svg";
import "./App.css";

import Login from "./components/Login";
import List from "./components/List";
import Registration from "./components/Registration";
import Service from "./components/Service";
import Welfare from "./components/Welfare";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className=" margin-top">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
          <Route exact path="/welfare/:id">
            <Welfare />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
