import React, { useState, useEffect } from "react";
import { Container } from "./styled";
import { Link } from "react-router-dom";
import { getFirestore } from "../../services/firebase";

const Navbar = () => {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = getFirestore();
      try {
        const itemsCollection = db.collection(`categories`);
        const itemSnapshot = await itemsCollection.get();
        const cats = itemSnapshot.docs.map((doc) => {
          return { catId: doc.id, ...doc.data() };
        });

        setCategories(cats);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/shop`}>Shop</Link>
          </li>
          {!loading &&
            categories.map(({ catId, name }) => (
              <li>
                <Link to={`/category/${catId}`}>{name}</Link>
              </li>
            ))}
          <li>
            <Link to={`/checkout`}>Checkout</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
