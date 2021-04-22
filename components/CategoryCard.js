import Image from "next/image";
import Link from "next/link";
import { HiEye } from "react-icons/hi";

const CategoryCard = ({ title, imagePath, uri }) => {
  return (
    <div className="flex flex-col bg-safeco-pimary rounded-sm p-6 justify-between">
      <div className="font-semibold text-center mb-4 text">{title}</div>
      <div>
        <div className="mb-2">
          <Image
            src={imagePath}
            height={300}
            width={300}
            layout="responsive"
            className="rounded-md"
          />
        </div>
        <Link href={uri}>
          <div className="w-full rounded-md px-5 py-2 flex justify-center items-center bg-gray-200 text-safeco-pimary cursor-pointer">
            <HiEye size={20} />
            <p className="ml-2">See Details</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
