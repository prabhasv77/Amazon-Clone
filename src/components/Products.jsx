import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, setCurrentPage } from "../store/productsSlice";
import ProductCard from "./ProductCard";
import "./Products.css";
import "./ProductCard.css";
import { addToCart } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, currentPage, totalPages, loading } = useSelector(
    (state) => state.products
  );
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProducts({ productsPerPage: 20, currentPage }));
  }, [dispatch, currentPage]);

  const loadNext = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const loadPrev = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.length > 0 && (
          <div className="products">
            {products.map((prod) => (
              <div key={prod.id} className="product-card-container">
                <ProductCard key={prod.id} product={prod} />
                <button onClick={() => handleAddToCart(prod)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )
      )}

      <button onClick={loadPrev} disabled={currentPage === 1}>
        Prev
      </button>
      <button onClick={loadNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Products;
