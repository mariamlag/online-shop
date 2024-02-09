interface Items {
  id: number;
  name: string;
  category: string;
  price: number;
  bestseller: boolean;
  picture: string;
}
interface ItemsProps {
  items: Items[];
  setItems: Dispatch<React.SetStateAction<Items[]>>;
}
