import { OmniFoodLogo } from "@/assets";
import Image from "next/image";

const NavData = [
  {
    name: "Section 1",
  },
  {
    name: "Section 2",
  },
  {
    name: "Section 3",
  },
  {
    name: "Section 4",
  },
  {
    name: "Section 5",
    isCTA: true,
  },
];

function Header() {
  return (
    <header className="header">
      <Image
        className="logo"
        alt="Omnifood Logo"
        src={OmniFoodLogo}
        height={"22"}
      />
      <nav className="main-nav">
        {/* <ul className="main-nav-list"> */}
        <ul className="flex gap-8 items-center">
          {NavData.map((ele) => (
            <li key={ele.name}>
              {/* <a className="main-nav-link" href="#"> */}
              <a
                className={`inline-block text-grey-dark font-medium text-[1.8rem] transition-all duration-300 hover:text-shades ${ele.isCTA ? "py-3 px-6 rounded-[9px] text-white bg-primary hover:bg-shades hover:text-white" : ""} `}
                href="#"
              >
                {ele.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
