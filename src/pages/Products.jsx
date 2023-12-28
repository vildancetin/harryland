import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
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

  console.log(products);
  return (
    <>
    {loading && <p>Loading...</p>}
    <div className="grid grid-cols-3 gap-x-3 gap-y-2 justify-items-center mt-5">
      {products.map((product)=>(

      <ProductCard key={product.id} product={product}/>
      ))}
    </div>
    </>
  );
};

export default Products;
