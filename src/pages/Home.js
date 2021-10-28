import React, { useContext } from "react";
import { H1, H2, Link } from "../components/Common/Common";
import { CartContext } from "../Contexts/CartContext";

const Home = () => {
  const { cart, setCart, resetCart, cartTotalItems } = useContext(CartContext);

  console.log("from home", cart);

  return (
    <div>
      <H1>Home {cartTotalItems()}</H1>
      <H2>Featured Products</H2>
      <H2>New Arrivals</H2>
      <Link url={`https://google.com`} target={false}>
        Click Me Alicia
      </Link>

      <button onClick={resetCart}>Reset Cart</button>
    </div>
  );
};

export default Home;
