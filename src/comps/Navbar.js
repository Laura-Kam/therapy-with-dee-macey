import Link from "next/link";
import Image from "next/image";
import rttlogo from "../../public/rttroundedlogo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownMenu = isOpen ? (
    <div className="dropdown-menu mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <ul className="menu menu-compact">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/whatisrtt">What is RTT?</Link>
        </li>
        <li>
          <Link href="/treatment">Treatment</Link>
        </li>
        <li>
          <Link href="/faq">FAQs</Link>
        </li>
        <li>
          <Link href="/about">About Me</Link>
        </li>
      </ul>
    </div>
  ) : null;

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {dropdownMenu}
          </div>
          <a className="btn btn-ghost normal-case text-xl flex items-center">
            <Image
              src="/rttroundedlogo.png"
              alt="My Image"
              width={170}
              height={170}
              layout="fixed"
              className="w-12 h-12 object-contain"
            />
            <span className="ml-2 inline-block">Dee Macey</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/whatisrtt">What is RTT?</Link>
            </li>
            <li>
              <Link href="/treatment">Treatment</Link>
            </li>
            <li>
              <Link href="/faq">FAQs</Link>
            </li>
            <li>
              <Link href="/about">About Me</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/contact" className="btn">
            CONTACT ME
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
