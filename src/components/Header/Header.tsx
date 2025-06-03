import logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import type { NavItem, NavItemProps } from "../../interfaces/Nav.interfaces";

const navData: NavItem[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "",
  },
  {
    id: 3,
    name: "Menu",
    url: "",
  },
  {
    id: 4,
    name: "Products",
    url: "",
  },
  {
    id: 5,
    name: "Review",
    url: "",
  },
  {
    id: 6,
    name: "Contact",
    url: "",
  },
  {
    id: 7,
    name: "Blogs",
    url: "",
  },
  {
    id: 8,
    name: "Login",
    url: "/login",
  },
];

const NavItem: React.FC<NavItemProps> = ({ navItems }) => {
  return (
    <li>
      <Link className={styles.header__nav_a} to={navItems.url}>
        {navItems.name}
      </Link>
    </li>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="ロゴ" />
      </div>
      <nav>
        <ul className={styles.header__nav_ul}>
          {navData.map((navItems) => (
            <NavItem key={navItems.id} navItems={navItems} />
          ))}
        </ul>
      </nav>
      <nav>
        <ul className={styles.header__nav_ul}>
          <li className={styles.header__icon_nav_li}>
            <IconButton aria-label="shopping cart">
              <SearchIcon sx={{ fontSize: "2.5rem" }}></SearchIcon>
            </IconButton>
          </li>
          <li className={styles.header__nav_icon_item}>
            <IconButton aria-label="shopping cart">
              <ShoppingCartIcon sx={{ fontSize: "2.5rem" }}></ShoppingCartIcon>
            </IconButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
