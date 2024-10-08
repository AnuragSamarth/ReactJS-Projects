import axios from "axios";



export function fetchProducts() {
  return axios.get("https://dummyjson.com/products");
}

export function fetchCategorys(){
  return axios.get('https://dummyjson.com/products/category-list')
}

export function fetchCategoryProducts(category){
  return axios.get(`https://dummyjson.com/products/category/${category}`);
}

