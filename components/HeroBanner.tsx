import {
  Customer1,
  Customer2,
  Customer3,
  Customer4,
  Customer5,
  Customer6,
  HeroImg,
} from "@/assets";
import Image from "next/image";
import HeroCustomer from "./HeroCustomer";

const CustomerImagesData = [
  {
    alt: "Customer photo 1",
    src: Customer1,
  },
  {
    alt: "Customer photo 2",
    src: Customer2,
  },
  {
    alt: "Customer photo 3",
    src: Customer3,
  },
  {
    alt: "Customer photo 4",
    src: Customer4,
  },
  {
    alt: "Customer photo 5",
    src: Customer5,
  },
  {
    alt: "Customer photo 6",
    src: Customer6,
  },
];

function HeroBanner() {
  return (
    <section className="bg-tints pt-12 pb-24 ">
      {/* HERO */}
      <div className="max-w-325 mx-auto px-8 grid grid-cols-2  gap-24">
        <div className="hero-text-box">
          <h1 className="text-[52px] font-bold  leading-[1.05] text-grey-dark tracking-[-0.5px] mb-8">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="text-[2rem] leading-[1.6] mb-12">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>

          <a
            href="#"
            className="link-btn bg-primary text-white  mr-4 hover:bg-shades"
          >
            Start eating well
          </a>
          <a
            href="#"
            className="link-btn bg-tints text-grey-light hover:inset-shadow-[0_0_0_3px_white]"
          >
            Learn more &darr;
          </a>

          <HeroCustomer />
        </div>
        <div className="hero-img-box">
          <Image
            src={HeroImg}
            alt="Woman enjoying food,meals in storage container,and food bowl on a table"
            priority
            // className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
