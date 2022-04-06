import SingleProduct from "../components/SingleProduct";
import { useState, useEffect } from "react";
// import { useContext } from "react";
// import { cartContext } from "../CartContext";

const Products = ({ bgColor }) => {
  const [products, setProducts] = useState([]);
  // const name = useContext(cartContext);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("http://localhost:5300/api/get");
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <section className={`text-gray-600 body-font py-12 ${bgColor}`}>
      <div className="container px-5 mx-auto">
        <h3
          className={`mb-8 text-lg font-bold ${
            bgColor === "bg-gray-900" ? "text-orange-600" : ""
          }`}
        >
          All Products
        </h3>
        <div className="grid grid-cols-4 gap-16">
          {products.map((product) => {
            return (
              <SingleProduct
                bgColor={bgColor}
                product={product}
                key={product._id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

Products.defaultProps = {
  bgColor: "bg-gray-900",
};

export default Products;
