export interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
  content: string;
}

export interface ItemCardProps {
  item: Item;
}
