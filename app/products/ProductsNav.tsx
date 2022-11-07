import { use } from 'react';
import CategoryItem from './CategoryItem';

const getCategories = async (): Promise<string[]> => {
  const res = await fetch('https://dummyjson.com/products/categories');

  return res.json();
};

const ProductsNav = () => {
  const categories = use(getCategories());

  return (
    <nav className='h-[100vh] overflow-y-scroll px-2 py-4 w-[200px] fixed'>
      <ul>
        {categories.map(category => (
          <CategoryItem key={category} category={category} />
        ))}
      </ul>
    </nav>
  );
};
export default ProductsNav;
