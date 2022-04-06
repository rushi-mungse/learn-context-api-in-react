import { useContext } from "react";
import { cartContext } from "../CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  const handleRemoveItem = (id) => {
    const newCart = cart.filter((item) => item._id !== id);
    setCart(newCart);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      {cart.length === 0 && (
        <div>
          <h1 className="text-xl text-orange-500">Cart is empty.</h1>
        </div>
      )}
      {cart.length > 0 &&
        cart.map((product) => {
          return (
            <div
              className="flex items-center justify-center border p-4 rounded-md w-1/2 my-2"
              key={product._id}
            >
              <Link className="cursor-pointer" to="/">
                <img
                  alt="ecommerce"
                  className="h-20"
                  src="/images/peproni.png"
                />
              </Link>
              <div className=" ml-8 flex justify-between items-center w-full px-2">
                <div>
                  <h3 className={`text-xs tracking-widest title-font mb-1`}>
                    {product.size}
                  </h3>
                  <h2 className={`title-font text-lg font-medium `}>
                    {product.name}
                  </h2>
                  <p className="mt-1 text-indigo-500">${product.price}</p>
                </div>
                <button
                  className="bg-indigo-500 py-1 px-4 mt-4 rounded-full text-white hover:bg-indigo-600 duration-300 ease-in-out"
                  onClick={() => handleRemoveItem(product._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
