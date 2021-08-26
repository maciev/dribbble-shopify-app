import React from "react";

export const Checkout = () => {
  class Parent extends React.Component {
    constructor(props) {
      super(props);
      //binding handler because no autobinding
      this.handler = this.handler.bind(this);
    }

    handler() {
      this.setState({ someVar: "6" });
    }
    render() {
      return (
        <div>
          You have {this.state.someVar} number of Kombuchas in your cart
        </div>
      );
    }
  }
};
