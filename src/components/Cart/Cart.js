import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            if (value.cart.length === 0) {
              return <EmptyCart />;
            } else {
              return (
                <React.Fragment>
                  <Title name="Your" title="Cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} history={this.props.history} />
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
