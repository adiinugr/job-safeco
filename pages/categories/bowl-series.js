import BackButton from "../../components/BackButton";
import CategoryHeader from "../../components/CategoryHeader";
import ProductCard from "../../components/ProductCard";

import { bowlSeries } from "../../helper/products";

const BowlSeries = () => {
  return (
    <div>
      <CategoryHeader title="Bowl Series & Clover Container Series" />
      <BackButton />
      <div className="bg-white py-10 px-4 md:px-40">
        {bowlSeries.map((item) => (
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

export default BowlSeries;
