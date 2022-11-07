import { ReactNode } from 'react';
import ProductsNav from './ProductsNav';

const ProductLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProductsNav />
      <section>{children}</section>
    </>
  );
};
export default ProductLayout;
