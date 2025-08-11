export const fetchData = () => {
  return fetch('https://fakestoreapi.com/products')
    .then((res) => {
     res.json();
    }).then((res)=>res)
};