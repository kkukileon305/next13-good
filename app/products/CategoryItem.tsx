'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface CategoryItemProps {
  category: string;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const segment = useSelectedLayoutSegment();

  return (
    <li key={category} className='mb-4 relative'>
      <div
        className={`absolute w-2 h-2 right-0 bottom-full transition-[0.3s] before:transition-[0.3s] before:block before:absolute before:w-full before:h-full before:left-0 before:top-0 before:rounded-br-full before:bg-gray-200 ${
          segment === category ? 'bg-gray-600' : ' bg-gray-200'
        }`}
      />
      <Link className={`block px-4 py-2 font-bold  border-b transition-[0.3s] rounded-l-full ${segment === category ? 'border-black bg-gray-600 text-white' : 'border-transparent hover:bg-gray-400 text-gray-500'}`} href={`products/${category}`}>
        {category}
      </Link>
      <div
        className={`absolute w-2 h-2 right-0 top-full transition-[0.3s] before:transition-[0.3s] before:block before:absolute before:w-full before:h-full before:left-0 before:top-0 before:rounded-tr-full before:bg-gray-200 ${
          segment === category ? 'bg-gray-600' : ' bg-gray-200'
        }`}
      />
    </li>
  );
};
export default CategoryItem;
