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

function HeroBanner() {
  return (
    <section className="bg-tints px-0 py-[9.6rem] ">
      <div className="grid grid-cols-2 max-w-[130rem] mx-auto my-0 gap-[9.6rem]">
        <div className="hero-text-box">
          <h1 className="text-[5.2rem] font-bold  leading-[1.05] text-[#333] tracking-[-0.5px] mb-[3.2rem]">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="text-[2rem] leading-[1.6] mb-[4.8rem]">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#" className="link-btn btn--full mr-[1.6rem]">
            Start eating well
          </a>
          <a href="#" className="link-btn btn--outline">
            Learn more &darr;
          </a>
          <div className="flex mt-[3.2rem] items-center gap-[1.6rem]">
            <div className="delivered-imgs">
              <Image src={Customer1} alt="Customer photo" />
              <Image src={Customer2} alt="Customer photo" />
              <Image src={Customer3} alt="Customer photo" />
              <Image src={Customer4} alt="Customer photo" />
              <Image src={Customer5} alt="Customer photo" />
              <Image src={Customer6} alt="Customer photo" />
            </div>
            <p className="text-[1.8rem] font-semibold">
              <span className="text-primary font-bold">250,000+</span> meals
              last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <Image
            src={HeroImg}
            alt="Woman enjoying food,meals in storage container,and food bowl on a table"
            priority
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
