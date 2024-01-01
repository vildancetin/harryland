import { useLocation } from "react-router-dom";
import { useProductContext } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";

const HomeCardInfo = () => {
  const { products } = useProductContext();
  const location = useLocation();
  const category = location.state.category;
  const filtered = products.filter((product) => product.category === category);
  return (
    <div className="product-container">
      <>
        {filtered.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </>
    </div>
  );
};

export default HomeCardInfo;
