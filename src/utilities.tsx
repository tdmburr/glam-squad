export interface IProduct {
  id: number,
  brand: string,
  name: string,
  price: string,
  // price_sign: null,
  // currency: null,
  image_link: string | null,
  // product_link: string,
  // website_link: string,
  description: string,
  rating: number | null,
  // category: null,
  product_type: string,
  // tag_list: string[],
  // created_at: string,
  // updated_at: string,
  // product_api_url: string,
  // api_featured_image: string,
  // product_colors: IColor[]
}

export interface IColor {
  hex_value: string,
  colour_name: string
}

export const capitalizeFirstLetter = (str: string) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};