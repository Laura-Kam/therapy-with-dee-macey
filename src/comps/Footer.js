import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="footer footer-center p-7 flex-wrap"
      style={{
        backgroundColor: "#F5F5F5",
        color: "black",
        fontFamily: "Open Sans",
        fontSize: "16px",
      }}
    >
      <div className="footerDiv grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-3 items-center text-center mb-5 flex-wrap">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/whatisrtt" className="link link-hover">
          What is RTT&#174;?
        </Link>
        <Link href="/treatment" className="link link-hover">
          Treatment
        </Link>
        <Link href="/articles" className="link link-hover">
          Articles
        </Link>
        <Link href="/faq" className="link link-hover">
          FAQs
        </Link>
        <Link href="/about" className="link link-hover">
          About Me
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact
        </Link>
      </div>

      <div className="flex justify-center flex-wrap">
        <Image
          src="/rttroundedlogo.png"
          alt="My Image"
          width={100}
          height={100}
          layout="fixed"
          className="max-w-full h-auto object-contain"
        />
      </div>

      <div className="mt-3">
        <p>Copyright © 2023 Laura Kam Web Development</p>
      </div>
    </footer>
  );
};

export default Footer;
