import './globals.css';
import Nav from './Nav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='w-[1060px] flex mx-auto'>
        <Nav />
        <main className='ml-[200px] w-[calc(100%-200px)] min-h-[100vh] bg-gray-200'>{children}</main>
      </body>
    </html>
  );
}
