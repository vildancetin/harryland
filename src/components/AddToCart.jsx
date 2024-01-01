import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AddToCart = ({ closeCart }) => {
  const postApiUrl = "https://6592c715bb1297071990075e.mockapi.io/harry-cart";
  const [data, setData] = useState([]);
  // const [stock, setStock] = useState(1);
  // const updatedData = {
  //   quantity: stock,
  // };

  const plusUpdate = async (id, stock) => {
    await updateData(id, stock);
    await getData();
    // setStock(stock+1)
  };
  const minussUpdate = async (id, stock) => {
    await updateData(id, stock);
    await getData();
    // setStock(stock-1)
  };

  const updateData = async (id, stock) => {
    try {
      const response = await fetch(`${postApiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: stock }),
      });

      if (!response.ok) {
        throw new Error("Transaction failed ");
      }

      const data = await response.json();
      console.log("Güncelleme işlemi başarılı:", data);
    } catch (error) {
      console.error("Hata oluştu:", error.message);
    }
  };
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
  const handleDelete = async (id) => {
    await deleteData(id);
    await getData();
  };
  const deleteData = async (id) => {
    try {
      const response = await fetch(`${postApiUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.status) {
        throw new Error("Delete isn't successful");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  useEffect(() => {
   getData();
  }, [data]);

  return (
    <div className="z-[1000]  fixed top-2 right-2">
      <div
        className="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        <button
          className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
          onClick={closeCart}
        >
          <span className="sr-only">Close cart</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mt-4 space-y-6">
          <ul className="space-y-4">
            {data.map((item) => (
              <li className="flex items-center gap-4" key={item.id}>
                <img
                  src={item.image}
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-gray-900">{item.name}</h3>

                  <dl className="mt-0.5 space-y-px text-[13px] text-gray-600">
                    <div>
                      <dt className="inline pr-3">Price:</dt>
                      <dd className="inline">$ {item.price*item.quantity}</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <div className="flex items-center rounded border border-gray-200">
                      <button
                        type="button"
                        className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
                        onClick={
                          item.quantity > 0
                            ? () => minussUpdate(item.id, item.quantity - 1)
                            : () => handleDelete(item.id)
                        }
                      >
                        -
                      </button>

                      <input
                        type="number"
                        id="Quantity"
                        value={item.quantity}
                        className="h-10 w-10 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />

                      <button
                        type="button"
                        className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
                        onClick={() => plusUpdate(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </form>

                  <button
                    className="text-gray-600 transition hover:text-red-600"
                    onClick={() => handleDelete(item.id)}
                  >
                    <span className="sr-only">Remove item</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
            <span className="w-full h-1 bg-gray-600 block"></span>
          <div className="space-y-4 text-center">
            <Link
              to={"shoppingcart"}
              onClick={closeCart}
              className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
            >
              View my cart
            </Link>

            <a
              href="#"
              className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              Checkout
            </a>

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
