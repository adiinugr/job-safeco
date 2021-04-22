import Image from "next/image";

const ProductCard = ({ imagePath, title, desc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-safeco-pimary px-6 md:px-20 py-10 mb-6 rounded-md shadow-lg">
      <div className="md:w-1/2 h-full mb-4 md:mb-0">
        <Image
          src={imagePath}
          height={300}
          width={300}
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
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
