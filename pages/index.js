import Link from "next/link";
import Image from "next/image";

import HomeHeader from "../components/HomeHeader";
import CategoryCard from "../components/CategoryCard";

import { categories } from "../helper/categories";
import { reasonChooseSafeco } from "../helper/reasonChooseSafeco";
import { HiCheck } from "react-icons/hi";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeHeader />
      <div className="relative overflow-hidden px-10 md:px-20 bg-safeco-pimary">
        <div className="container relative mx-auto">
          <div className="flex flex-col md:flex-row items-center pt-16 mb-16 md:mb-0 md:pb-0 md:h-screen ">
            <div className="md:w-1/2 mt-16 md:mt-0 mb-4 sm:mb-16 md:mb-0">
              <p className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p className="mb-4 md:mb-8 leading-5 text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                praesentium! Molestiae, illo maxime? Suscipit vero voluptatum
                corrupti minima tempore totam maxime fuga id porro sunt.
                Laudantium eius, doloribus, officiis atque magni eum vitae
                veniam debitis nihil perspiciatis ipsum voluptate minus voluptas
                consequatur ab sit. Itaque, iusto? Inventore natus quibusdam ad
                quisquam dolore deserunt magni facere eligendi dolorum quidem!
                Quam, dolore.
              </p>
              <Link href="/">
                <button className="bg-gray-200 focus:outline-none text-gray-600 font-semibold px-5 md:px-4 py-4 md:py-3 rounded">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 mt-16 sm:mt-0 text-center flex-1 flex justify-end">
              <Image src="/images/placeholder.png" height={400} width={400} />
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col justify-center items-center bg-white px-10">
        <div className="py-10 text-gray-800">
          <p className="font-medium text-center text-xl md:text-3xl mb-2">
            Product Categories
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quia recusandae nemo iusto fugit maxime esse unde eligendi,
            quibusdam cum!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-3 pb-10 text-gray-200">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              imagePath={category.imagePath}
              uri={category.uri}
            />
          ))}
        </div>
      </section>

      <section className="flex pt-10 pb-20">
        <div className="w-1/2 relative">
          <Image
            src="/images/placeholder.png"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <div className="bg-safeco-pimary w-1/2 p-14">
          <p className="text-3xl text-gray-100 mb-6">Why Choose Safeco</p>
          {reasonChooseSafeco.map((item, index) => (
            <div className="flex text-gray-100">
              <HiCheck size={20} />
              <p key={index} className="ml-4 mb-1">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-safeco-pimary">
        <div className="container mx-auto px-6 py-12 text-center border-t border-gray-300">
          <p className="text-gray-200">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="font-semibold">- Safeco</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
