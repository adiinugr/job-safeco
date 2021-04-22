import Image from "next/image";
import React from "react";

const CategoryHeader = ({ title }) => {
  return (
    <div className="bg-gray-100 flex justify-center items-center py-5">
      <div className="mr-4">
        <Image
          src="/images/logo.jpeg"
          height={90}
          width={90}
          className="rounded-full"
        />
      </div>
      <div className="font-semibold text-2xl text-safeco-pimary">{title}</div>
    </div>
  );
};

export default CategoryHeader;
