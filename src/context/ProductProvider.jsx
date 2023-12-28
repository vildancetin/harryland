const { createContext, useContext, useState,useEffect } = require("react");

const ProductContext=createContext()

const ProductProvider = ({children}) => {
const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://65853139022766bcb8c80cf2.mockapi.io/harryland-products";
  const getProducts = async () => {
    try {
      setLoading(true);
      await fetch(url)
        .then((res) => {
          if (!res.status) {
            throw new Error("Somethings went wrong!");
          }
          return res.json();
        })
        .then((data) => setProducts(data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const values={
    loading,
    products,
  }

  return (
    <ProductContext.Provider value={values} >{children}</ProductContext.Provider>
  )
}
export const useProductContext=()=>{
    return useContext(ProductContext)
}

export default ProductProvider