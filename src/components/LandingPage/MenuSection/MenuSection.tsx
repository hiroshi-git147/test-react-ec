import styles from "./MenuSection.module.css";
import image1 from "../../../assets/images/menu-1.png";
import image2 from "../../../assets/images/menu-2.png";
import image3 from "../../../assets/images/menu-3.png";
import image4 from "../../../assets/images/menu-4.png";
import image5 from "../../../assets/images/menu-5.png";
import image6 from "../../../assets/images/menu-6.png";
import type { Menu, MenuCardProps } from "../../../interfaces/Menu.interfaces";

// TODO: 実際のメニューを入れ替える（管理者画面で作る想定？）
const menusData: Menu[] = [
  {
    id: 1,
    name: "カフェラテ",
    price: 800,
    discountedPrice: 0,
    image: image1,
    altText: "カフェラテ",
  },
  {
    id: 2,
    name: "カフェオーレ",
    price: 500,
    discountedPrice: 0,
    image: image2,
    altText: "カフェオーレ",
  },
  {
    id: 3,
    name: "カプチーノ",
    price: 800,
    discountedPrice: 0,
    image: image3,
    altText: "カプチーノ",
  },
  {
    id: 4,
    name: "ホットコーヒー",
    price: 300,
    discountedPrice: 0,
    image: image4,
    altText: "ホットコーヒー",
  },
  {
    id: 5,
    name: "アイスコーヒー",
    price: 300,
    discountedPrice: 0,
    image: image5,
    altText: "アイスコーヒー",
  },
  {
    id: 6,
    name: "ココア",
    price: 300,
    discountedPrice: 0,
    image: image6,
    altText: "ココア",
  },
];

const MenuCard: React.FC<MenuCardProps> = ({ menu }) => {
  return (
    <div className={styles.menu__section_card_box}>
      <img
        className={styles.menu__section_card_box_img}
        src={menu.image}
        alt={menu.altText}
      />
      <h2>{menu.name}</h2>
      <p className={styles.menu__section_card_box_price}>
        {menu.price}
        <span>円</span>
      </p>
    </div>
  );
};

const MenuSection = () => {
  return (
    <section>
      <h1 className={styles.menu__section_h1}>
        Our <span className={styles.menu__section_span}>Menu</span>
      </h1>
      <div className={styles.menu__section_card}>
        {menusData.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
