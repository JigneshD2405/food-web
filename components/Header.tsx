import { OmniFoodLogo } from "@/assets";
import Image from "next/image";

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
        <ul className="main-nav-list">
          <li>
            <a href="#">Section 1</a>
          </li>
          <li>
            <a href="#">Section 2</a>
          </li>
          <li>
            <a href="#">Section 3</a>
          </li>
          <li>
            <a href="#">Section 4</a>
          </li>
          <li>
            <a href="#">Section 5</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
