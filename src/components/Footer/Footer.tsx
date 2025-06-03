import styles from "./Footer.module.css";
import image1 from "../../assets/images/sns/icons8-facebook-24.png";
import image2 from "../../assets/images/sns/icons8-instagram-24.png";
import image3 from "../../assets/images/sns/icons8-line-24.png";
import image4 from "../../assets/images/sns/icons8-tiktok-24.png";
import image5 from "../../assets/images/sns/icons8-X-24.png";
import image6 from "../../assets/images/sns/icons8-youtube-24.png";
import { Link } from "react-router-dom";
import type { SnsItem, SnsProps } from "../../interfaces/Sns.interfaces";
import type { NavItem, NavItemProps } from "../../interfaces/Nav.interfaces";

const navData: NavItem[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "会社情報",
    url: "https://www.littleheroes.jp/w/about",
  },
  {
    id: 3,
    name: "LHについて",
    url: "https://www.littleheroes.jp/w",
  },
  {
    id: 4,
    name: "会社情報",
    url: "https://www.littleheroes.jp/w/terms",
  },
];

const snsData: SnsItem[] = [
  {
    id: 1,
    image: image1,
    altText: "facebook",
    url: "https://www.facebook.com/",
  },
  {
    id: 2,
    image: image2,
    altText: "instagram",
    url: "https://www.instagram.com/",
  },
  {
    id: 3,
    image: image3,
    altText: "line",
    url: "https://line.me/",
  },
  {
    id: 4,
    image: image4,
    altText: "tiktok",
    url: "https://www.tiktok.com/",
  },
  {
    id: 5,
    image: image5,
    altText: "X",
    url: "https://twitter.com/",
  },
  {
    id: 6,
    image: image6,
    altText: "youtube",
    url: "https://www.youtube.com/",
  },
];

const NavItem: React.FC<NavItemProps> = ({ navItems }) => {
  return (
    <li>
      <Link className={styles.footer__nav_a} to={navItems.url}>
        {navItems.name}
      </Link>
    </li>
  );
};

const SnsNav: React.FC<SnsProps> = ({ sns }) => {
  return (
    <li className={styles.footer__sns_nav_li}>
      <Link to={sns.url}>
        <img
          src={sns.image}
          alt={sns.altText}
          className={styles.footer__sns_nav_li_a_img}
        />
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className={styles.footer__nav}>
          {snsData.map((sns) => (
            <SnsNav key={sns.id} sns={sns} />
          ))}
        </ul>
      </nav>
      <nav>
        <ul className={styles.footer__nav}>
          {navData.map((navItems) => (
            <NavItem key={navItems.id} navItems={navItems} />
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
