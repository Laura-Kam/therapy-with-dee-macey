import Link from "next/link";
import Image from "next/image";
import rttlogo from "../../public/rttfulllogo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 {styles.navbar}">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">
            <Image
              src="/rttfulllogo.png"
              alt="My Image"
              width={210}
              height={210}
            />
            Dee Macey Therapy
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
          <Link legacyBehavior href="/contact">
            <a className="btn btnContact hover:bg-gray-custom shadow-gray-custom">
              Contact me
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
