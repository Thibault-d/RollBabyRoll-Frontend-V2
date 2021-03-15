import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";
import Strollers from "./views/Strollers";
import {MyContext} from "./services/MyContext.js";

export default function App() {
  return (
    <MyContext>
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="Workspace">
          <div className="Menu">
            <Menu />
          </div>
          <div className="Comparator">
            <div className="ActionBar"></div>
            <Switch>
              <Route exact path="/" component={() => <Strollers />} />
              {/*<Route
              exact
              path="/add"
              component={() => (user ? <AddStrollers /> : <Protected />)}
            />
            <Route
              exact
              path="/update"
              component={() => (user ? <UpdateStroller /> : <Protected />)}
            />
            <Route
              exact
              path="/delete"
              component={() => (user ? <DeleteStroller /> : <Protected />)}
            />
           */}
            </Switch>
          </div>
        </div>
      </div>
    </MyContext>
  );
}
