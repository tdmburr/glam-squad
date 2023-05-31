import { IProduct } from "./utilities";

const acquireInfo: () => Promise<IProduct[]> = () => {
  return fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=Almay`)
  .then(response => {
      if(!response.ok) {
        throw new Error("Failed to fetch make-up data.");
    }
     return response.json()
   })
}


export default acquireInfo;
