import { use } from 'react';

const getCategories = async (): Promise<string[]> => {
  const res = await fetch('https://dummyjson.com/products/categories');

  return res.json();
};

const ProductsNav = () => {
  const categories = use(getCategories());

  return <nav>{categories}</nav>;
};
export default ProductsNav;
