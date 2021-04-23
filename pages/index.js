import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import { Link as ScrollLink } from "react-scroll";

import HomeHeader from "../components/HomeHeader";
import CategoryCard from "../components/CategoryCard";
import YoutubePlayer from "../components/YoutubePlayer";

import { categories } from "../helper/categories";
import { reasonChooseSafeco } from "../helper/reasonChooseSafeco";
import { HiCheck } from "react-icons/hi";
import { youtube } from "../helper/youtube";

import "aos/dist/aos.css";
import CustomHead from "../components/CustomHead";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen">
      <CustomHead />
      <HomeHeader />
      <div className="relative overflow-hidden px-10 md:px-20 bg-safeco-pimary">
        <div className="container relative mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center pt-16 mb-16 md:mb-0 md:pb-0 md:h-screen ">
            <div data-aos="slide-right" className="md:w-1/2 mb-4">
              <p className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8 mt-6 md:mt-0 text-gray-200">
                Safeco Packaging
              </p>
              <p className="mb-6 md:mb-8 leading-5 text-gray-200">
                Plant based material packaging. Biodegradable, compostable,
                healthy, and recyclable. Saving resource and protecting the
                environtment.
              </p>
              <ScrollLink to="category" smooth={true} duration={800}>
                <button className="bg-gray-200 focus:outline-none text-gray-600 font-semibold px-5 md:px-4 py-3 md:py-2 rounded">
                  More Information
                </button>
              </ScrollLink>
            </div>
            <div
              data-aos="slide-left"
              className="md:w-1/2 mt-24 md:mt-0 mb-4 md:mb-0 text-center flex-1 flex justify-end"
            >
              <Image
                src="/images/image1.png"
                height={400}
                width={400}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <section
        id="category"
        className="flex flex-col justify-center items-center bg-white px-10 overflow-hidden"
      >
        <div data-aos="zoom-in" className="py-10 text-gray-800">
          <p className="font-medium text-center text-xl md:text-3xl mb-2">
            Product Categories
          </p>
          <p className="text-center">
            Ada berbagai macam jenis packaging yang dapat menyesuaikan kebutuhan
            kamu.
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

      <section className="flex md:flex-row flex-col pt-10 pb-10 overflow-hidden">
        <div
          data-aos="slide-left"
          className="w-full h-96 md:h-auto md:w-1/2 relative"
        >
          <Image
            src="/images/image2.png"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <div
          data-aos="slide-right"
          className="bg-safeco-pimary w-full md:w-1/2 p-8 md:p-14"
        >
          <p className="text-3xl text-gray-100 mb-6">Why Choose Safeco</p>
          {reasonChooseSafeco.map((item, index) => (
            <div key={index} className="flex text-gray-100">
              <div>
                <HiCheck size={20} />
              </div>
              <div className="ml-4 mb-1">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden">
        <div data-aos="zoom-in" className="py-10 text-gray-800">
          <p className="font-medium text-center text-xl md:text-3xl mb-2">
            Our Video
          </p>
          <p className="text-center">
            Safeco Packaging sangat mengutamakan kualitas untuk hasil yang
            terbaik.
          </p>
        </div>
        {youtube.map((item) => (
          <div
            data-aos="slide-up"
            key={item.id}
            className="relative w-full px-6 md:px-40 mb-4"
          >
            <YoutubePlayer videoId={item.linkId} />
          </div>
        ))}
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
