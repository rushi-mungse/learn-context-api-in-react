import SingleProduct from "../components/SingleProduct";

const Products = () => {
  return (
    <section className="text-gray-600 body-font pt-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-4 gap-16">
          <SingleProduct />
        </div>
      </div>
    </section>
  );
};

export default Products;
