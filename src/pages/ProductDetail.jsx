import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [load, setLoad] = useState(false);
  console.log(id);

  const url = "https://65853139022766bcb8c80cf2.mockapi.io/harryland-products";

  const getDetail = () => {
    setLoad(true);
    try {
      fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };
  useEffect(() => {
    getDetail();
  }, []);

  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    console.log(`Sepete eklendi: ${quantity} adet `);
  };

  return (
    <>
      {load ? (
        <p>Loading .... </p>
      ) : (
        <div className="container mx-auto my-8 p-4 flex">
          <div className="flex-1">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-auto mb-4"
            />
          </div>

          <div className="flex-1 ml-8">
            <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-semibold mb-4">${product.price}</p>

            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-16 p-2 border border-gray-300"
              />
            </div>

            <button onClick={addToCart} className="btn">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductDetail;
