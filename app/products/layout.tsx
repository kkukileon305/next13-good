import { ReactNode } from 'react';
import ProductsNav from './ProductsNav';

const ProductLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex'>
      <ProductsNav />
      <section className='ml-[200px] w-[calc(100%-200px)] min-h-[100vh]'>{children}</section>
    </div>
  );
};
export default ProductLayout;
