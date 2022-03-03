import React, { useEffect } from "react";
import ItemCard from "./Card";
import { connect } from "react-redux";
import { addToCart } from "../features/actions/cartActions";
import { fetchData } from "../features/actions/cartActions";
const Home = ({ items = [], myCart = [], addToCart, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = (event, id) => {
    addToCart(id);
  };
  return (
    <div
      xs={1}
      md={2}
      sm={3}
      lg={4}
      className="d-flex flex-row flex-wrap gap-5"
    >
      {items.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          src={item.thumbnail}
          title={item.title}
          description={item.description}
          price={item.price}
          inCart={myCart.some((product) => product.id === item.id)}
          onClick={(event) => handleClick(event, item.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    myCart: state.myCart,
  };
};

const mapDispatchToProps = (dispatchEvent) => {
  return {
    addToCart: (id) => {
      dispatchEvent(addToCart(id));
    },
    fetchData: () => {
      dispatchEvent(fetchData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
