import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../CartContext";

const Navigation = () => {
  const { cart } = useContext(cartContext);
  return (
    <div className="border-b border-gray-900">
      <nav className="container py-4 flex mx-auto justify-between items-center  ">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <ul className="flex items-center justify-center">
          <li className="mr-8 hover:text-orange-500 duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-8 hover:text-orange-500 duration-300 ease-in-out">
            <Link to="/products">Products</Link>
          </li>
          <li className="bg-orange-500 py-1 px-3 rounded-full hover:bg-orange-600 duration-300 ease-in-out">
            <Link to="/cart" className="flex items-center justify-between">
              <span className="mr-2">{cart.length}</span>
              <img src="/images/cart.png" alt="cart" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
