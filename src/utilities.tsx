export interface IProduct {
  id: number;
  brand: string;
  name: string;
  price: string;
  image_link: string | null;
  description: string;
  rating: number | null;
  product_type: string;
}

export interface IColor {
  hex_value: string;
  colour_name: string;
}

export const capitalizeFirstLetter = (str: string) => {
  if (str) {
    if (str.includes("_")) {
      const words = str.split("_");
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );
      return capitalizedWords.join(" ");
    } else {
      const words = str.split(" ");
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );
      return capitalizedWords.join(" ");
    }
  }
  return "";
};

export const formatPrice = (price: string): string => {
  const numericPrice = parseFloat(price);
  return isNaN(numericPrice) ? price : numericPrice.toFixed(2);
};