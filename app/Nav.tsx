import Link from 'next/link';
import NavItem from './NavItem';

export type NavData = {
  title: string;
  url: string;
};

const navList: NavData[] = [
  {
    title: 'products',
    url: 'products',
  },
  {
    title: 'todos',
    url: 'todos',
  },
];

const Nav = () => {
  return (
    <nav className='w-[200px] min-h-[100vh] fixed bg-blue-400'>
      <h1 className='font-bold text-3xl mb-2 px-4 py-4'>
        <Link href={'/'}>Main</Link>
      </h1>

      <ul className='pl-1'>
        {navList.map(navData => (
          <NavItem key={navData.title} navData={navData} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
