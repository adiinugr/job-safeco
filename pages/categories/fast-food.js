import BackButton from "../../components/BackButton";
import CategoryHeader from "../../components/CategoryHeader";
import ProductCard from "../../components/ProductCard";

import { fastFood } from "../../helper/products";

const FastFood = () => {
  return (
    <div>
      <CategoryHeader title="Fast Food Container Series" />
      <BackButton />
      <div className="bg-white py-10 px-40">
        {fastFood.map((item) => (
          <ProductCard
            key={item.id}
            imagePath={item.imagePath}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default FastFood;
