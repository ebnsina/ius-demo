import Link from 'next/link';
import Image from 'next/image';
import MENU from '../../data/menu';
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector('.header');
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add('bg-brand-50', 'text-black')
      : header.classList.remove('bg-brand-50', 'text-black');
  };

  return (
    <header className='header fixed top-0 left-0 w-full z-10 py-3 text-white transition'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='/images/logo-white.png'
            alt='IUS'
            width={180}
            height={50}
          />
        </Link>

        <nav>
          <ul className='flex items-center space-x-2 text-sm'>
            {MENU.map((link) => (
              <li key={link.id}>
                <Link href={`/link.slug`}>
                  <a className='hover:bg-brand-100 hover:text-white px-6 py-2 rounded-full transition'>
                    {link.text}
                  </a>
                </Link>
              </li>
            ))}

            <li>
              <Link href='https://iems.ius.edu.bd'>
                <a className='px-6 py-2 bg-brand text-white rounded-full uppercase font-semibold tracking-wider'>
                  i-ems
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
