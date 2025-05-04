import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer id="globalFooter">
      <div className="content">
        {/* Logo ------------------------- */}
        <div className="logo">
          <Image src="/logo_1.svg" alt="Logo" width={160} height={42}></Image>
          <p className="tagline">Saving Tech from Landfills. Since 2025</p>
        </div>
        {/* Banner ------------------------- */}
        <div className="banner">
          <div>
            <img src="/icons/donate.svg" title="donate" alt="donate" />
            <p>
              <strong>DONATE Tech</strong>
              <span>List and trade your unused gadgets.</span>
            </p>
          </div>
          <div>
            <img src="/icons/coins.svg" title="claim" alt="claim" />
            <p>
              <strong>EARN Credits</strong>
              <span>Use your Points to claim gear that you need.</span>
            </p>
          </div>
          <div>
            <img src="/icons/no_trash.svg" title="stop" alt="stop" />
            <p>
              <strong>STOP Waste</strong>
              <span>Keep Hazardous Materials out of landfills.</span>
            </p>
          </div>
        </div>
      </div>
      {/* Links ------------------------- */}
      <nav>
        <ul>
          <li>
            <h5>Quick Links</h5>
          </li>
          <li>
            <Link href="/how-it-works">How it Works</Link>
          </li>
          <li>
            <Link href="/sell-your-tech">Sell Your Tech</Link>
          </li>
          <li>
            <Link href="/shipping-info">Shipping Info</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h5>Go Green</h5>
          </li>
          <li>
            <Link href="/carbon-estimator">Carbon Estimator</Link>
          </li>
          <li>
            <Link href="/shipping-calculator">Shipping Calculator</Link>
          </li>
          <li>
            <Link href="/affiliate-programs">Affiliate Programs</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h5>Company</h5>
          </li>
          <li>
            <Link href="/our-mission">Our Mission</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
