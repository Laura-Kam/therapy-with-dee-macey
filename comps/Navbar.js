import Link from "next/Link";

const Navbar = () => {
  return (
    <nav>
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
