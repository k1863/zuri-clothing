import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/Shop/ShopPage.jsx";
import NavContainer from "./components/NavContainer/NavContainer.jsx";

function App() {
  return (
    <div>
      <NavContainer />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
