'use client'; // Make sure to add this line at the top

import React from 'react';
import Link from 'next/link';
import Button from '../common/Button';
import { usePathname } from 'next/navigation';
import { useCount } from '@/context/CountContext';

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useCount();

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>

        {/* Button Group or Counter Display */}
        <div className="flex gap-4 items-center">
          {pathname !== '/counter-app' ? (
            <>
              <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
              <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
            </>
          ) : (
            <p className="font-semibold text-lg">Current count: {count}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;