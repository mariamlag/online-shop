interface Items {
  id: number;
  name: string;
  category: string;
  color: string;
  price: number;
  bestseller: boolean;
  picture: string;
}
interface ItemsProps {
  items: Items[];
  setItems?: Dispatch<React.SetStateAction<Items[]>>;
}
interface LabelProps {
  hasError?: boolean;
}
interface InputsProps {
  hasError?: boolean;
}
interface InputsProps {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  // Other props...

  // Define the ref prop with the correct type
  ref?: Ref<HTMLInputElement>;
}
interface TranslateProps {
  str: string;
}

interface GeoToEnMap {
  [key: string]: string;
}
