import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { default as ProductComp } from "../components/Product/Product";
import { CartContext } from "../Contexts/CartContext";

const Product = () => {
  const { prodId } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState({ 
    id: prodId,
    category: "8EHrGRS3Nhor3RF6XFjn",
    description: "This is the best mario toy ever, ever.",
    image: "https://firebasestorage.googleapis.com/v0/b/prog-2021.appspot.com/o/placeholder.jpg?alt=media&token=ba7be4c3-b7f1-4fe3-8799-9d281116e5d6",
    name: "Mario Toy",
    price: 200
    });

  //Aca vamos a consultarle a firebase los datos de este producto usando el prodId

  return (
    <div>
      <ProductComp prodId={prodId} product={product} addToCart={addToCart} />
    </div>
  );
};

export default Product;
