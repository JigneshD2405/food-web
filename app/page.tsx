import { OmniHeaderLogo } from "@/image";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between bg-primary-tint-1  px-48 h-96">
        <a href="#" className="font-">
          <Image
            src={OmniHeaderLogo}
            alt="Omnifood logo"
            className="h-22 w-fit"
          />
        </a>
        <nav>
          <ul className="flex items-center justify-between gap-48">
            <li>
              <a
                href="#"
                className="text-18 font-medium text-grey-dark hover:text-primary-shade-1  "
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-18 font-medium text-grey-dark  hover:text-primary-shade-1"
              >
                Meals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-18 font-medium text-grey-dark  hover:text-primary-shade-1"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-18 font-medium text-grey-dark hover:text-primary-shade-1 "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-18 font-medium text-white bg-primary px-24 py-12 rounded-[9px] hover:bg-primary-shade-1"
              >
                Try for free
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
