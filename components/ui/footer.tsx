import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer id="globalFooter">
      <div className="content">
        {/* Banner ------------------------- */}
        <div className="banner">
          <div>
            <Image
              src="/icons/donate.svg"
              title="donate"
              alt="donate"
              width={40}
              height={40}
            />
            <p>
              <strong>DONATE Tech</strong>
              <span>List and trade your unused gadgets.</span>
            </p>
          </div>
          <div>
            <Image
              src="/icons/coins.svg"
              title="claim"
              alt="claim"
              width={40}
              height={40}
            />
            <p>
              <strong>EARN Credits</strong>
              <span>Use your Points to claim gear that you need.</span>
            </p>
          </div>
          <div>
            <Image
              src="/icons/no_trash.svg"
              title="stop"
              alt="stop"
              width={40}
              height={40}
            />
            <p>
              <strong>STOP Waste</strong>
              <span>Keep Hazardous Materials out of landfills.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row-2">
        <div className="content">
          {/* Logo ------------------------- */}
          <div className="logo">
            <Image src="/logo_1.svg" alt="Logo" width={160} height={42}></Image>
            <p className="tagline">Saving Tech from Landfills. Since 2025</p>
            <p className="links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </p>
          </div>
          {/* Links ------------------------- */}
          <nav>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link href="/help/how-it-works">How it Works</Link>
              </li>
              <li>
                <Link href="/list-item">Sell Your Tech</Link>
              </li>
              <li>
                <Link href="/help/shipping">Shipping Info</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
