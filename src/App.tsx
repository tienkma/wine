import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Verification, Alert, SideBar } from "./components";
import { useHomeContact } from "./context/HomeContext";
import {
  CartPage,
  HomePage,
  ProductsPage,
  WineItemPage,
  AboutPage,
  LoginPage,
} from "./pages";

function App() {
  const {
    state: { home_verification, isLogin },
  } = useHomeContact();

  if (home_verification) {
    return <Verification />;
  }

  // TODO error page

  return (
    <Router>
      <Header />
      <SideBar />
      <Alert />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/:id">
          <WineItemPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
