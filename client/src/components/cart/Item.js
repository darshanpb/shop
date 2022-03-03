import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  updateCartQuantity,
  removeItem,
} from "../../features/actions/cartActions";

const Item = ({ item, updateCartQuantity, removeItem }) => {
  const [state, setState] = useState({
    quantity: item.quantity,
    btnVisible: false,
  });

  useEffect(()=>{
      
  })
  const handleChange = (e) => {
    if (e.target.value <= 0) {
      alert("Quantity must be greater than or equal to 1");
      return;
    }

    if (e.target.value > item?.availableQuantity) {
      alert("You have exceeded the available items of this product!");
      return;
    }

    if (state.quantity !== e.target.value) {
      setState({
        quantity: e.target.value,
        btnVisible: true,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCartQuantity(item.id, state.quantity);
    setState({
      btnVisible: false,
    });
  };

  const handleRemove = (e) => {
      e.preventDefault();
    removeItem(item.id);
  };

  return (
    <div className="row">
      <div className="col-xs-2">
        <img className="img-responsive" alt={"product"} src={item.thumbnail} />
      </div>
      <div className="col-xs-4">
        <h4 className="product-name">
          <strong>{item.title}</strong>
        </h4>
      </div>
      <div className="col-xs-6">
        <div className="col-xs-3 text-right">
          <h4 className="m-2">
            <strong>
              {item.price} <span className="text-muted">x</span>
            </strong>
          </h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="col-xs-4">
            <input
              type="number"
              className="form-control input-sm"
              onChange={handleChange}
              value={state.quantity}
            />
          </div>

          {state.btnVisible ? (
            <div className="col-xs-2">
              <button type="submit" className="btn btn-info">
                Update
              </button>
            </div>
          ) : null}

          <div className="col-xs-2">
            <button
              type="button"
              onClick={handleRemove}
              className="btn btn-link btn-xs"
            >
              <span className="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatchEvent) => {
  return {
    updateCartQuantity: (id, quantity) => {
      return dispatchEvent(updateCartQuantity(id, quantity));
    },
    removeItem: (id) => {
      return dispatchEvent(removeItem(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Item);
