'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { NavData } from './Nav';

interface NavItemProps {
  navData: NavData;
}

const NavItem = ({ navData }: NavItemProps) => {
  const segment = useSelectedLayoutSegment();

  return (
    <li className='relative mb-4'>
      <div
        className={`absolute w-2 h-2 right-0 bottom-full transition-[0.3s] before:transition-[0.3s] before:block before:absolute before:w-full before:h-full before:left-0 before:top-0 before:rounded-br-full before:bg-blue-400 ${
          segment === navData.url ? 'bg-gray-200' : ' bg-blue-400'
        }`}
      />
      <Link //
        className={`block rounded-l-full px-4 py-2 font-bold transition-[0.3s] ${segment === navData.url ? 'text-black bg-gray-200' : 'text-white bg-transparent hover:bg-gray-200/50'} `}
        href={navData.url}
      >
        {navData.title}
      </Link>
      <div
        className={`absolute w-2 h-2 right-0 top-full transition-[0.3s] before:transition-[0.3s] before:block before:absolute before:w-full before:h-full before:left-0 before:top-0 before:rounded-tr-full before:bg-blue-400 ${
          segment === navData.url ? 'bg-gray-200' : ' bg-blue-400'
        }`}
      />
    </li>
  );
};
export default NavItem;
