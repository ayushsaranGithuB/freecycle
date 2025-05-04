import Image from "next/image";
const Footer = () => {
  return (
    <footer id="globalFooter">
      <div className="content">
        <div className="logo">
          <Image src="/logo_1.svg" alt="Logo" width={100} height={100}></Image>
          <p>Saving Tech from Landfills. Since 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
