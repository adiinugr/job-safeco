import Image from "next/image";
import React from "react";

const CategoryHeader = ({ title }) => {
  return (
    <div className="bg-gray-100 flex justify-center items-center py-5">
      <div className="mr-4">
        <Image src="/images/placeholder.png" height={80} width={80} />
      </div>
      <div className="font-semibold text-2xl text-safeco-pimary">{title}</div>
    </div>
  );
};

export default CategoryHeader;
