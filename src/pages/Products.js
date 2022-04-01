import SingleProduct from "../components/SingleProduct";

const Products = ({ bgColor }) => {
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
          <SingleProduct bgColor={bgColor} />
          <SingleProduct bgColor={bgColor} />
          <SingleProduct bgColor={bgColor} />
          <SingleProduct bgColor={bgColor} />
          <SingleProduct bgColor={bgColor} />
          <SingleProduct bgColor={bgColor} />
          <SingleProduct bgColor={bgColor} />
          <SingleProduct bgColor={bgColor} />
          <SingleProduct bgColor={bgColor} />
          <SingleProduct bgColor={bgColor} />
        </div>
      </div>
    </section>
  );
};

Products.defaultProps = {
  bgColor: "bg-gray-900",
};

export default Products;
