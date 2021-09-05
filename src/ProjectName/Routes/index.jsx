import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../Views/HomePage";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
