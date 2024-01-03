import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { error, succesfully } from "../helper/toastHelpers";

const ProductDetail = () => {
  // ? constant variables
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [load, setLoad] = useState(false);
  const [quantity, setQuantity] = useState(1);
  // ? urls
  const postApiUrl = "https://6592c715bb1297071990075e.mockapi.io/harry-cart";
  const url = "https://65853139022766bcb8c80cf2.mockapi.io/harryland-products";
  console.log(product);
  // ? destructuring
  const { name, price, thumbnail } = product;
  const postData = {
    id: id,
    price: price,
    name: name,
    quantity: quantity,
    image: thumbnail,
  };
  const postToCart = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(postApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (!response.status) {
        error("Something went wrong!");
        throw new Error("Somethings went wrong!");
      }
      succesfully("Product added your cart!");
      const result = await response.json();
      console.log("Success:", result);
      setQuantity(0)
    } catch (error) {
      console.log("Error:", error);
    }
  };

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

  return (
    <>
      {load ? (
        <p>Loading .... </p>
      ) : (
        <div className="container mx-auto my-8 p-4 flex xs">
          <div className="flex-1 ">
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

            <button onClick={postToCart} className="btn">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductDetail;
