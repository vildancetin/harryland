const ProductCard = ({ product }) => {
  const { thumbnail, name, price } = product;
  return (
    <div className="w-full max-w-[300px] bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative h-[450px]">
      <a href="#">
        <img
          className="p-8 rounded-t-lg w-[300px] h-[300px]"
          src={thumbnail}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">
            {name}
          </h5>
        </a>

        <div className="text-center mb-3">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">
            ${price}
          </span>
        </div>
        <div className=" mb-10">

        <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2">
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
