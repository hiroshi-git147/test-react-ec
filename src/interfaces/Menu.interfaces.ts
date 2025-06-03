export interface Menu {
  // 商品ID
  id: number;

  // 商品名
  name: string;

  // 通常価格
  price: number;

  // セール価格
  discountedPrice: number;

  // 商品画像URL
  image: string;

  // 画像の代替えテキスト
  altText: string;
}

export interface MenuCardProps {
  menu: Menu;
}
