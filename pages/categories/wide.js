import BackButton from "../../components/BackButton";
import CategoryHeader from "../../components/CategoryHeader";
import CustomHead from "../../components/CustomHead";
import ProductCard from "../../components/ProductCard";

import { wide } from "../../helper/products";

const Wide = () => {
  return (
    <div>
      <CustomHead />
      <CategoryHeader title="Wide Container Series" />
      <BackButton />
      <div className="bg-white py-10 px-4 md:px-40">
        {wide.map((item) => (
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

export default Wide;
