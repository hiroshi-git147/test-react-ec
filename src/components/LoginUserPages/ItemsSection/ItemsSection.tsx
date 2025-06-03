import styles from "./ItemsSection.module.css";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import type { Item, ItemCardProps } from "../../../interfaces/Item.interfaces";
import React from "react";
import { Link } from "react-router-dom";

interface ApiResponse {
  currentPage: number;
  form: number;
  lastPage: number;
  lastPageUrl: string;
  nextPageUrl: string;
  path: string;
  perPage: number;
  prevPageUrl: string;
  to: number;
  total: number;
  data: Item[];
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className={styles.item__section_card_box}>
      <img
        className={styles.item__section_card_box_img}
        src={item.image}
        alt={item.name}
      />
      <h2 className={styles.item__section_h2}>
        <Link to={`/items/${item.id}`}>{item.name}</Link>
      </h2>
      <p className={styles.item__section_card_box_price}>
        {item.price}
        <span>円</span>
      </p>
    </div>
  );
};

const Items = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // API呼び出し
        const response = await axios.get<ApiResponse>("/api/items");
        console.log("商品一覧API response (items array):", response.data);
        // API通信成功でレスポンスの値を返す
        setItems(response.data.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const axiosError = err as AxiosError;
          if (axiosError.response && axiosError.response.status === 401) {
            setError(
              "商品一覧の取得に失敗しました。認証エラーが発生しました。"
            );
            console.error("商品一覧取得失敗 (401):", axiosError.message);
          } else {
            setError(
              "通信エラーが発生しました。サーバーが起動しているか確認してください。"
            );
            console.error("商品一覧取得API error:", axiosError.message);
          }
        } else {
          setError("予期せぬエラーが発生しました。");
          console.error("Unexpected error during item fetch:", err);
        }
        // 失敗の場合は空の配列を返す
        setItems([]);
      }
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  return (
    <section>
      <h1 className={styles.item__section_h1}>商品一覧</h1>
      {isLoading && <p>商品情報を読み込み中...</p>}
      {error && <p style={{ color: "red" }}>エラー: {error}</p>}
      {!isLoading && !error && items.length === 0 && (
        <p>表示できる商品がありません。</p>
      )}
      {!isLoading && !error && items.length > 0 && (
        <div className={styles.item__section_card}>
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Items;
