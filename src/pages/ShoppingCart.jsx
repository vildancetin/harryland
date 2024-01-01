import React, { useEffect, useState } from "react";

const ShoppingCart = () => {
  const postApiUrl = "https://6592c715bb1297071990075e.mockapi.io/harry-cart";
  const [data, setData] = useState([]);
  const total=data.reduce((acc, val) => acc + val.quantity * val.price, 0)
  const getData = async () => {
    try {
      const res = await fetch(postApiUrl);
      const data = await res.json();
      if (!res.status) {
        throw new Error("somethings went wrong");
      }
      return setData(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    getData();
  }, [data]);
  const checkout=()=>{
    setData([])
  }
  return (
    <div>
      <div className="pt-10">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <ul className="block">
            {data.map((product) => (
              <li className="rounded-lg md:w-full ">
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start border-[#AA8855] border">
                  <img
                    src={product.image}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <span className="h-full w-1 bg-[#AA8855]"></span>
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-s font-semibold text-gray-700">
                        $ {product.price * product.quantity}
                      </p>
                    </div>
                    <form>
                      <div className="flex items-center rounded border border-gray-200 ">
                        <button
                          type="button"
                          className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75 hover:bg-[#AA8855] font-bold border-[#AA8855] border"
                        >
                          -
                        </button>

                        <input
                          type="number"
                          id="Quantity"
                          value={product.quantity}
                          className="h-10 w-10 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        />

                        <button
                          type="button"
                          className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75 hover:bg-[#AA8855] font-bold border-[#AA8855] border"
                        >
                          +
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 h-full rounded-lg bg-white p-6 shadow-md md:mt-0 md:w-1/3 border-[#AA8855] border">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">
                ${total}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">${total+4.99} USD</p>
                <p className="text-xs text-gray-700 float-right">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-[#AA8855] btn py-1.5 font-medium text-blue-50 " onClick={checkout}>
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
