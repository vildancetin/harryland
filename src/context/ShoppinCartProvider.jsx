import React, { createContext, useContext, useEffect, useState } from "react";
import { error, succesfully } from "../helper/toastHelpers";

const ShoppingCartContext = createContext();

const ShoppinCartProvider = ({ children }) => {
    // ? constant variables
  const postApiUrl = "https://6592c715bb1297071990075e.mockapi.io/harry-cart";
  const [data, setData] = useState([]);
  const total = data.reduce((acc, val) => acc + val.quantity * val.price, 0);
// ? update quantiity functions
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
        error("Too many request,try again!");
        throw new Error("Transaction failed ");
      }
      succesfully("Quantity changed!");
      const data = await response.json();
      console.log("Güncelleme işlemi başarılı:", data);
    } catch (error) {
      console.error("Hata oluştu:", error.message);
    }
  };

//   ? get data from api
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

  const values={
    plusUpdate,total,minussUpdate,data,setData,getData
  }
  return <ShoppingCartContext.Provider value={values}>{children}</ShoppingCartContext.Provider>;
};


export const useShoppingCart=()=>{
    return useContext(ShoppingCartContext)
}

export default ShoppinCartProvider;
