import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  updateCartQuantity,
  removeItem,
} from "../../features/actions/cartActions";
import fallback from "../../assets/fallback.svg";
const Item = ({ item, updateCartQuantity, removeItem }) => {
  const [state, setState] = useState({
    quantity: item.quantity,
    btnVisible: false,
  });

  useEffect(() => {});
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
      <div className="col-sm-2">
        <img
        style={{width:"100px",height:'100px'}}
          className="img-responsive"
          alt={"product"}
          src={item.thumbnail}
          onError={(e) => (e.target.src = fallback)}
        />
      </div>
      <div className="col-sm-10">
        <h4 className="product-name">
          <strong>{item.title}</strong>
        </h4>
      <div className="row">
        <div className="col-xs-8 d-flex align-items-center" style={{position:'relative'}}>
          <div className="col-sm-3 text-right">
            <h4 className="m-2">
              <strong>
                ${item.price} <span className="text-muted">x</span>
              </strong>
            </h4>
          </div>
          <div className="d-flex gap-2">
            <input
              type="number"
              className="form-control input-sm"
              onChange={handleChange}
              value={state.quantity}
            />

            {state.btnVisible ? (
              <button
                type="submit"
                className="btn btn-info"
                onClick={(e) => handleSubmit(e)}
              >
                Update
              </button>
            ) : null}
          </div>
          <div style={{position:'absolute',right:'0'}}>
            <button
              type="button"
              onClick={handleRemove}
              className="btn btn-link btn-xs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
              </svg>{" "}
            </button>
          </div>
        </div>
      </div>
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
