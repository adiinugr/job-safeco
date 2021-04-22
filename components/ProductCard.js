import Image from "next/image";

const ProductCard = ({ imagePath, title, desc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-safeco-pimary px-6 md:px-20 py-10 mb-6 rounded-md shadow-lg">
      <div className="w-80 h-80 mb-4 md:mb-0 relative">
        <Image
          src={imagePath}
          layout="fill"
          className="rounded-lg"
          objectFit="cover"
        />
      </div>
      <div className="md:w-1/2 md:ml-10">
        <p className="text-2xl text-gray-100 font-semibold mb-4">{title}</p>
        <div className="grid grid-cols-2 gap-4">
          {desc.map((d) => (
            <div key={d.id} className="text-gray-100 mb-2">
              <p className="font-bold">{d.title}</p>
              <p className="">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
