import React from "react";
import { connect } from "react-redux";
import Item from "./cart/Item";

const Cart = ({ items }) => {
  let total = 0;
  total =
    items &&
    items.reduce(
      (total, item) => (total += item.price * item.quantity ?? 1),
      0
    );

  const cart =
    items.length > 0 ? (
      <div>
        <div className="panel-body">
          {items.map((item) => {
            return (
              <div key={item.id}>
                <Item item={item} />
                <hr />
              </div>
            );
          })}
        </div>
        <div className="panel-footer">
          <div className="row text-center">
            <div className="col-xs-11">
              <h4 className="text-right">
                Total <strong>${total.toFixed(3)}</strong>
              </h4>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="panel-body">
        <p>Cart is empty</p>
      </div>
    );
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-xs-12">
          <div className="row">
            <h5>My Shopping Cart</h5>
            {cart}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.myCart,
  };
};

export default connect(mapStateToProps)(Cart);
