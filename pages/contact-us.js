import Image from "next/image";
import { SiWhatsapp } from "react-icons/si";

import BackButton from "../components/BackButton";
import CategoryHeader from "../components/CategoryHeader";
import CustomHead from "../components/CustomHead";

import { sosmed } from "../helper/sosmed";

const ContactUs = () => {
  return (
    <div>
      <CustomHead />
      <CategoryHeader title="Contact Us" />
      <BackButton />
      <div className="bg-white flex flex-col md:flex-row py-10 px-4 md:px-40 overflow-hidden">
        <div
          data-aos="slide-right"
          className="md:w-1/2  bg-gray-200 shadow-sm h-48 p-6 md:mr-2 mb-4 md:mb-0"
        >
          <div className="mb-4 border-safeco-pimary border-b-2 pb-1">
            Temukan produk kami di
          </div>
          <div>
            {sosmed.map((item) => (
              <div key={item.id} className="flex items-center m-2">
                <Image src={item.imagePath} width={25} height={25} />
                <p className="ml-2">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="slide-left"
          className="md:w-1/2 bg-gray-200 shadow-sm h-48 p-6 md:ml-2"
        >
          <div className="mb-4 border-safeco-pimary border-b-2 pb-1">
            Hubungi kami melalui WhatsApp
          </div>
          <div className="flex justify-center items-center px-4 py-2 rounded-sm cursor-pointer bg-green-700 text-gray-100 w-44">
            <SiWhatsapp />
            <a
              href="https://api.whatsapp.com/send?phone=6281234511848&text=Hai%20*Safeco*%2C%0ASaya%20mau%20order%20sbb%3A%0A1.%20Nama%3A%20%0A2.%20Alamat%3A%20%0A3.%20HP%3A%20%0A4.%20Kode%20Pos%3A%20%0A5.%20Order%3A%20"
              className="ml-2"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
