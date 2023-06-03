export interface IProduct {
  id: number,
  brand: string,
  name: string,
  price: string,
  image_link: string | null,
  description: string,
  rating: number | null,
  product_type: string,
};

export interface IColor {
  hex_value: string,
  colour_name: string
};

export const capitalizeFirstLetter = (str: string) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};