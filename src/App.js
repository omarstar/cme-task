import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PageOne from "./pages/pageOne/PageOne";
import PageTwo from "./pages/pageTwo/PageTwo";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={PageOne} />
        <Route exact path="/counter" component={PageTwo} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
