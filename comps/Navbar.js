import Link from "next/Link";
import style from "../styles/globals.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="navbar1">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a>
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="logo">
        <h1>MY NAV BAR Rapid Transformational Therapy with Dee</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about"> About</Link>

      <Link href="/howitworks">HowItWorks</Link>

      <Link href="/rttsessions">RTTSessions</Link>

      <Link href="/testimonials">Testimonials</Link>

      <Link href="/mybackground">MyBackground</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
