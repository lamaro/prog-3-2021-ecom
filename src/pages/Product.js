import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { default as ProductComp } from "../components/Product/Product";
import { CartContext } from "../Contexts/CartContext";
import { getFirestore } from "../services/firebase";

const Product = () => {
  const { prodId } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const addToCartWithFeedback = (product) => {
    addToCart(product);
    setShowNotification(product.name);
    setTimeout(() => {
        setShowNotification(false);
    }, 5000);
    
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = getFirestore();
      try {
        const itemsCollection = db.collection(`products`);
        const itemSnapshot = await itemsCollection.doc(prodId).get();
        if (!itemSnapshot.exists) {
          console.log("No matching documents.");
          return;
        }

        setProduct({ id: itemSnapshot.id, ...itemSnapshot.data() });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [prodId]);

  //Aca vamos a consultarle a firebase los datos de este producto usando el prodId

  return (
    <div>
      {showNotification && <p>{`PRODUCT ADDED TO CART: ${showNotification}`}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductComp
          prodId={prodId}
          product={product}
          addToCart={addToCartWithFeedback}
        />
      )}
    </div>
  );
};

export default Product;
