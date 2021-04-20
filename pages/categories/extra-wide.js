import BackButton from "../../components/BackButton";
import CategoryHeader from "../../components/CategoryHeader";
import ProductCard from "../../components/ProductCard";

import { extraWide } from "../../helper/products";

const ExtraWide = () => {
  return (
    <div>
      <CategoryHeader title="Extra Wide Container Series" />
      <BackButton />
      <div className="bg-white py-10 px-40">
        {extraWide.map((item) => (
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

export default ExtraWide;
