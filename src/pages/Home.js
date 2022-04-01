import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="hero py-16 bg-gray-900 full-height">
        <div className="container flex items-center mx-auto pt-12">
          <div className="w-1/2 pl-28">
            <h6 className="text-xl font-medium text-white">
              <em>Are you hungry?</em>
            </h6>
            <h1 className="text-6xl font-bold text-white">Don't Wait!</h1>
            <button className="bg-orange-500 py-1 px-4 mt-4 rounded-full text-white hover:bg-orange-600 duration-300 ease-in-out">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img src="/images/pizza.png" alt="pizza" />
          </div>
        </div>
      </div>
      <Products bgColor={"bg-white"} />
    </>
  );
};

export default Home;
