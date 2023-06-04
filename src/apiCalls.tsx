import { IProduct } from "./utilities";

const acquireInfo = (brand: string): Promise<IProduct[]> => {
  return fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
  .then(response => {
      if(!response.ok) {
        throw new Error("Failed to fetch make-up data.");
    }
      return response.json()
    })
};

export default acquireInfo;