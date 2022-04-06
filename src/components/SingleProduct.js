import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../CartContext";

const SingleProduct = ({ bgColor, product }) => {
  const { cart, setCart } = useContext(cartContext);
  const handleAddItem = (product) => {
    setCart([product, ...cart]);
  };
  return (
    <div className="flex  flex-col items-center justify-center border p-4 rounded-md">
      <Link className="cursor-pointer" to="/">
        <img alt="ecommerce" className="h-56" src="/images/peproni.png" />
      </Link>
      <div className="mt-4 flex justify-between items-center w-full px-2">
        <div>
          <h3
            className={`text-xs tracking-widest title-font mb-1  ${
              bgColor === "bg-gray-900" ? "text-white" : ""
            }`}
          >
            {product.size}
          </h3>
          <h2
            className={`title-font text-lg font-medium ${
              bgColor === "bg-gray-900" ? "text-white" : ""
            }`}
          >
            {product.name}
          </h2>
          <p className="mt-1 text-orange-500">
            ${Math.round(product.price / 1000)}
          </p>
        </div>
        <button
          className="bg-orange-500 py-1 px-4 mt-4 rounded-full text-white hover:bg-orange-600 duration-300 ease-in-out"
          onClick={() => handleAddItem(product)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

SingleProduct.defaultProps = {
  bgColor: "bg-gray-900",
};

export default SingleProduct;
