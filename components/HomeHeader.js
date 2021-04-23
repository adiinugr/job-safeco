import { useState } from "react";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="bg-white">
          <div className="px-5 py-4 md:px-12 md:py-3 flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/images/logo.jpeg" height={90} width={90} />
              <div className="font-medium text-safeco-pimary text-lg md:text-3xl ml-4">
                Safeco
              </div>
            </div>
            <div className="hidden md:flex items-center text-safeco-pimary">
              <Link href="/">
                <button className="px-4 py-2 hover:text-gray-500 focus:outline-none focus:text-gray-500">
                  Home
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="px-4 py-2 hover:text-gray-500 focus:outline-none focus:text-gray-500">
                  Contact Us
                </button>
              </Link>
            </div>
            <div></div>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className=" md:hidden text-safeco-pimary focus:outline-none"
            >
              <MdMenu size={25} />
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="bg-white p-6 text-safeco-pimary flex flex-col">
            <Link href="/">
              <button className="px-4 py-2 font-medium">Home</button>
            </Link>
            <Link href="/contact-us">
              <button className="px-4 py-2 font-medium">Contact us</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeHeader;
