export type Product = {
  id: string;
  title: string;
  price: number;
  image?: string; // placeholder now
  tags?: string[];
  isNew?: boolean;
  rating?: number; // 0..5
  color?: string; // basic color tag
  size?: "S" | "M" | "L";
  label?: string; // e.g., "Label"
};