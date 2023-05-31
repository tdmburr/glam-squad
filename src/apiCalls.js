const acquireInfo = () => {
  return fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
  `).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch make-up data.");
    }
    console.log(response.json());
    //  return response.json()
  });
};

export default acquireInfo;
