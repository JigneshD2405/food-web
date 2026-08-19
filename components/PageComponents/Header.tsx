import { HEADER_NAV } from "@/Constants";
import { OmniHeaderLogo } from "@/image";
import Image from "next/image";
import NavList from "../UIComponents/NavList";

function Header() {
  return (
    <header className="flex items-center justify-between bg-primary-tint-1 px-48 h-96">
      <a href="#">
        <Image
          src={OmniHeaderLogo}
          alt="Omnifood logo"
          className="h-22 w-full"
        />
      </a>
      <div>
        <ul className="flex items-center gap-48 ">
          {HEADER_NAV.map((e) => (
            <NavList
              key={e.label}
              label={e.label}
              url={e.url}
              isLast={e.isLast}
            />
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
