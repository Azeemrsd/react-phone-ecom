import NavBar from "./components/NavBar";
import "./App.css";
import React, { Component } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Default from "./components/Default";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}
