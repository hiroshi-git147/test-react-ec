export interface SnsItem {
  // index
  id: number;

  // 商品画像URL
  image: string;

  // 画像の代替えテキスト
  altText: string;

  // URL
  url: string;
}

export interface SnsProps {
  sns: SnsItem;
}
