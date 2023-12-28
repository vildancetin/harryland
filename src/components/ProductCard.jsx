import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { thumbnail, name, price, id } = product;
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative h-[450px] mb-5">
      <div
        className="border-[#AA8855] border-2 rounded-lg"
        onClick={() => navigate(`${id}`)}
      >
        <img
          className="p-8 rounded-t-lg w-[300px] h-[300px]"
          src={thumbnail}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">
          {name}
        </h5>

        <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 mt-10">
          <div className="text-center mb-3">
            <span className="text-2xl font-bold text-gray-900 dark:text-white ">
              ${price}
            </span>
          </div>
          <div className="">
            <Link
              to="/"
              className="btn"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
