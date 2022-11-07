import Image from 'next/image';
import { use } from 'react';
import { ProductsResponse } from '../../interface';

const getProducts = async (category: string): Promise<ProductsResponse> => {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);

  return res.json();
};

const Detail = ({ params: { category } }: { params: { category: string } }) => {
  const productResponse = use(getProducts(category));

  return (
    <div className='bg-gray-600 text-white'>
      <h2 className='p-4 font-bold text-3xl'>
        {category}
        {"'"}s Products
      </h2>
      <ul className='flex flex-wrap gap-4 p-4'>
        {productResponse.products.map(product => (
          <li className='w-[calc((100%-16px)/2)] p-4 aspect-square border rounded select-none' key={product.id}>
            <Image className='block w-[200px] aspect-square mx-auto mb-4 object-contain' priority src={product.thumbnail} alt={product.title} width='200' height={200} />
            <h4 className='font-bold mb-2'>{product.title}</h4>
            <p className='mb-2'>{product.description}</p>
            <p className='font-bold text-right'>{product.price}$</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Detail;
