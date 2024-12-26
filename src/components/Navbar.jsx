import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>
          <div className="amazon-home">
            <img src="/assets/amazon-logo2.png" alt="amazon logo" />
          </div>
        </Link>
        <div className="location">
          <div>
            <p>Delivering to Hyderabad</p>
          </div>
          <div>
            <p>Update location</p>
          </div>
        </div>
        <div className="search">
          <div className="search-type">
            <select>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
            </select>
          </div>
          <div className="search-input">
            <input type="text" placeholder="search Amazon" />
          </div>
          <div className="search-icon">
            <button>search</button>
          </div>
        </div>
        <div className="language">
          <select>
            <option value="EN">English</option>
            <option value="HI">Hindi</option>
          </select>
        </div>
        <div className="cart">
          <Link to="/cart">
            <button className="cart-button">
              <img src="/assets/cart.png" alt="cart" />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
