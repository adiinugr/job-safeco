import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

const BackButton = () => {
  return (
    <Link href="/">
      <div className="flex pt-4 pl-10 items-center text-safeco-pimary cursor-pointer hover:text-yellow-500">
        <HiArrowNarrowLeft size={20} />
        <div className="ml-2">Back</div>
      </div>
    </Link>
  );
};

export default BackButton;
