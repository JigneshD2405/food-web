import {
  Customer1,
  Customer2,
  Customer3,
  Customer4,
  Customer5,
  Customer6,
} from "@/assets";
import Image from "next/image";

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

function HeroCustomer() {
  return (
    <div className="flex mt-8 items-center gap-4">
      <div className="flex">
        {CustomerImagesData.map((ele) => (
          <Image
            key={ele.alt}
            src={ele.src}
            alt={ele.alt}
            className="h-12 w-12 rounded-[50%] -mt-4 border-3 border-s-tints last:mr-0"
          />
        ))}
      </div>
      <p className="text-[1.8rem] font-semibold">
        <span className="text-primary font-bold">250,000+</span> meals last
        year!
      </p>
    </div>
  );
}

export default HeroCustomer;
