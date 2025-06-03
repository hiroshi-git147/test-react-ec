import styles from "./ItemDetailSection.module.css";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import type { Item } from "../../../interfaces/Item.interfaces";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { itemId } = useParams<{ itemId: string }>(); // URLからitemIdを取得
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState<Item | null>(null); // 単一のアイテム、または見つからない場合はnull
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!itemId) return; // itemIdがない場合は何もしない

    const fetchItemDetail = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get<Item>(`/api/items/${itemId}`);
        console.log("商品詳細APIレスポンス:", response.data);
        setItem(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const axiosError = err as AxiosError;
          if (axiosError.response) {
            if (axiosError.response.status === 404) {
              setError("商品が見つかりませんでした。");
              console.error(
                `商品詳細取得失敗 (404) for ID ${itemId}:`,
                axiosError.message
              );
            } else if (axiosError.response.status === 401) {
              setError(
                "商品詳細の取得に失敗しました。認証エラーが発生しました。"
              );
              console.error(
                `商品詳細取得失敗 (401) for ID ${itemId}:`,
                axiosError.message
              );
            } else {
              setError("商品詳細の取得中にサーバーエラーが発生しました。");
              console.error(
                `商品詳細取得API error for ID ${itemId}:`,
                axiosError.message
              );
            }
          } else {
            setError(
              "通信エラーが発生しました。ネットワーク接続を確認してください。"
            );
            console.error(
              `商品詳細取得API network error for ID ${itemId}:`,
              axiosError.message
            );
          }
        } else {
          setError("予期せぬエラーが発生しました。");
          console.error(
            `Unexpected error during item detail fetch for ID ${itemId}:`,
            err
          );
        }
        setItem(null);
      }
      setIsLoading(false);
    };

    fetchItemDetail();
  }, [itemId]); // itemIdが変更されたら再実行

  if (isLoading) {
    return <p className={styles.loadingMessage}>商品情報を読み込み中...</p>;
  }

  if (error) {
    return <p className={styles.errorMessage}>エラー: {error}</p>;
  }

  if (!item) {
    return <p className={styles.noItemMessage}>商品情報が見つかりません。</p>;
  }

  // 取得した商品情報を表示
  return (
    <section className={styles.itemDetailSection}>
      <h1 className={styles.itemName}>{item.name}</h1>
      <img src={item.image} alt={item.name} className={styles.itemImage} />
      <p className={styles.itemPrice}>{item.price}円</p>
      <div className={styles.itemContent}>
        <h2>商品説明</h2>
        <p>{item.content}</p>
      </div>
      {/* 他にも表示したい情報があればここに追加 */}
      <p className={styles.itemIdInfo}>商品ID: {item.id}</p>
    </section>
  );
};

export default ItemDetail;
