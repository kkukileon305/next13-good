'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface CategoryItemProps {
  category: string;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const segment = useSelectedLayoutSegment();

  return (
    <li key={category} className='mb-1'>
      <Link className={`block px-4 py-2 font-bold  border-b transition-[0.3s] rounded-full ${segment === category ? 'border-black bg-gray-600 text-white' : 'border-transparent hover:bg-gray-400 text-gray-500'}`} href={`products/${category}`}>
        {category}
      </Link>
    </li>
  );
};
export default CategoryItem;
