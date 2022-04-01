const SingleProduct = ({ bgColor }) => {
  return (
    <div className="flex  flex-col">
      <a className="cursor-pointer" href="#">
        <img alt="ecommerce" className="" src="/images/peproni.png" />
      </a>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <h3
            className={`text-xs tracking-widest title-font mb-1  ${
              bgColor === "bg-gray-900" ? "text-white" : ""
            }`}
          >
            CATEGORY
          </h3>
          <h2
            className={`title-font text-lg font-medium ${
              bgColor === "bg-gray-900" ? "text-white" : ""
            }`}
          >
            The Catalyzer
          </h2>
          <p className="mt-1 text-orange-500">$16.00</p>
        </div>
        <button className="bg-orange-500 py-1 px-4 mt-4 rounded-full text-white hover:bg-orange-600 duration-300 ease-in-out">
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
