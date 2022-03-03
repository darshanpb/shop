import react, { useState } from "react";
import { connect } from "react-redux";
import { addProduct } from "../features/actions/cartActions";
const Add = ({ addProduct, items }) => {
  const [item, setItem] = useState({
    title: "",
    description: "",
    availableQuantity: 0,
    thumbnail: "",
    price: 0,
  });
  const handleChange = (type, value) => {
    switch (type) {
      case "title":
        setItem({ ...item, title: value });
        break;
      case "description":
        setItem({ ...item, description: value });
        break;
      case "thumbnail":
        setItem({ ...item, thumbnail: value });
        break;
      case "price":
        setItem({ ...item, price: value });
        break;
      case "availableQuantity":
        setItem({ ...item, availableQuantity: value });
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    console.log(items.length);
    event.stopPropagation();
    addProduct(item, items.length);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="row">
              <h5>Add Product</h5>
              <div>
                <div className="input-group row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="title" className="form-label">
                      Name:{" "}
                    </label>
                    <input
                      id="title"
                      type={"text"}
                      required={true}
                      value={item.title}
                      className={"form-control"}
                      onChange={(event) =>
                        handleChange("title", event.target.value)
                      }
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="description" className="form-label">
                      Description :
                    </label>
                    <input
                      id="description"
                      type={"text"}
                      required={true}
                      value={item.description}
                      className={"form-control"}
                      onChange={(event) =>
                        handleChange("description", event.target.value)
                      }
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="availableQuantity" className="form-label">
                      Quantity :
                    </label>
                    <input
                      id="availableQuantity"
                      type={"number"}
                      min={1}
                      required={true}
                      value={item.availableQuantity}
                      className={"form-control"}
                      onChange={(event) =>
                        handleChange("availableQuantity", event.target.value)
                      }
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="thumbnail" className="form-label">
                      Product Image :
                    </label>
                    <input
                      id="thumbnail"
                      type={"url"}
                      required={true}
                      value={item.thumbnail}
                      className={"form-control"}
                      onChange={(event) =>
                        handleChange("thumbnail", event.target.value)
                      }
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="price" className="form-label">
                      Product Price :
                    </label>
                    <input
                      id="price"
                      type={"number"}
                      required={true}
                      min={0}
                      value={item.price}
                      className={"form-control"}
                      onChange={(event) =>
                        handleChange("price", event.target.value)
                      }
                    />
                  </div>
                </div>
                <hr className="my-4" />
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={(event) => handleSubmit(event)}
                >
                  Add product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatchEvent) => {
  return {
    addProduct: (item, id) => {
      dispatchEvent(addProduct(item, id));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
