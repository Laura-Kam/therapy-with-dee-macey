import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 {styles.navbar}">
        <div className="navbar-start">
          <div></div>
          <a className="btn btn-ghost normal-case text-xl">
            Dee Macey Therapist
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
            <a className="btn">Contact me</a>
          </Link>
        </div>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>

      <Link href="/whatisrtt">What is RTT?</Link>

      <Link href="/treatment">Treatment</Link>

      <Link href="/faq">FAQs</Link>

      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
