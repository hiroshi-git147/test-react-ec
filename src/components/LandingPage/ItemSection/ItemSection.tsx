import styles from "./ItemSection.module.css";
import image1 from "../../../assets/images/product-1.png";
import image2 from "../../../assets/images/product-2.png";
import image3 from "../../../assets/images/product-3.png";
import type { Item, ItemCardProps } from "../../../interfaces/Item.interfaces";
import React from "react";
// TODO: 実際の商品を入れ替える（管理者画面で作る想定？）
const itemsData: Item[] = [
  {
    id: 1,
    name: "ブレンド系コーヒー大",
    price: 2800,
    image: image1,
    content: "商品詳細",
    altText: "ブレンド系コーヒー大",
  },
  {
    id: 2,
    name: "シングル系コーヒー大",
    price: 2500,
    image: image1,
    content: "商品詳細",
    altText: "シングル系コーヒー大",
  },
  {
    id: 3,
    name: "ブレンド系コーヒー中",
    price: 1800,
    content: "商品詳細",
    image: image2,
    altText: "ブレンド系コーヒー中",
  },
  {
    id: 4,
    name: "シングル系コーヒー中",
    price: 1300,
    content: "商品詳細",
    image: image2,
    altText: "シングル系コーヒー中",
  },
  {
    id: 5,
    name: "お試しブレンド系800円小袋（今だけお得）",
    price: 300,
    content: "商品詳細",
    image: image3,
    altText: "お試しブレンド系800円小袋（今だけお得）",
  },
  {
    id: 6,
    name: "お試しシングル系500円小袋（今だけお得）",
    price: 300,
    content: "商品詳細",
    image: image3,
    altText: "お試しシングル系500円小袋（今だけお得）",
  },
];

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className={styles.item__section_card_box}>
      <img
        className={styles.item__section_card_box_img}
        src={item.image}
        alt={item.altText}
      />
      <h2>{item.name}</h2>
      <p className={styles.item__section_card_box_price}>
        {item.price}
        <span>円</span>
      </p>
    </div>
  );
};

const ItemSection = () => {
  return (
    <section>
      <h1 className={styles.item__section_h1}>
        <span className={styles.item__section_span}>Our </span>
        Products
      </h1>
      {/* TODO: 実際の商品を表示させる */}
      <div className={styles.item__section_card}>
        {itemsData.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ItemSection;
