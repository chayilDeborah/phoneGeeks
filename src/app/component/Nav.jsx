import Image from "next/image";
import navlogo from "../asset/navlogo.png";
import cart from '../asset/cart.svg'
import person from '../asset/person.svg'
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="nav-wrap">
        <div>
          <Image src={navlogo} alt="phoneGeek" className="nav-logo" />
        </div>
        <div className="navoptions-flex">
          <Link href="/">
            <div className="nav-home">Home</div>
          </Link>
          <Link href="/product">
            <div className="nav-home">Products</div>
          </Link>
          <Link href="/stores">
            <div className="nav-home">Stores</div>
          </Link>
          <Link href="/contact">
            <div className="nav-home">Contact</div>
          </Link>
          <Link href="/about">
            <div className="nav-home">About</div>
          </Link>
          <Image src={cart} alt="cart-svg" className="cart"/>
          <Image src={person} alt="person-icon" className="person" />
        </div>
      </div>
    </>
  );
};

export default Nav;
