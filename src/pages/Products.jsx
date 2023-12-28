import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/ProductProvider";

const Products = () => {
  // ? it went to productcontext
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const url = "https://65853139022766bcb8c80cf2.mockapi.io/harryland-products";
  // const getProducts = async () => {
  //   try {
  //     setLoading(true);
  //     await fetch(url)
  //       .then((res) => {
  //         if (!res.status) {
  //           throw new Error("Somethings went wrong!");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => setProducts(data));
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   getProducts();
  // }, []);
const {products,loading}=useProductContext()
  console.log(products);
  return (
    <>
    {loading && <p>Loading...</p>}
    <div className="product-container">
      {products.map((product)=>(

      <ProductCard key={product.id} product={product}/>
      ))}
    </div>
    </>
  );
};

export default Products;
