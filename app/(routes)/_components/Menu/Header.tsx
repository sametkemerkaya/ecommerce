import Image from 'next/image';
import React from 'react';

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';
import { Input } from '@/components/ui/input';
import { Heart, Search, ShoppingCart, UserIcon } from 'lucide-react';
import { NavMenu } from './NavMenu';

const poppins = Poppins({
   weight: '600',
   subsets: ['latin'],
   display: 'swap'
});

const Header = () => {
   return (
      <header className='shadow-md'>
         <div className='container mx-auto'>
            <div className='flex flex-row items-center justify-between p-5'>
               <Link href='/' className='flex items-center'>
                  <Image src={`./iconImage/snow-mountain.svg`} width={40} height={40} alt='Logo' />
                  <h3 className={`font-semibold text-2xl ms-2 -tracking-wide ${poppins.className}`}> Botanik Market</h3>
               </Link>

               <div className='hidden md:block relative md:min-w-96'>
                  <Input className='w-full' type='text' placeholder='Bir şeyler arayın..' />
                  <Search className='absolute top-2.5 right-3 text-gray-400' size={16} />
               </div>

               <div className='flex items-center space-x-3'>
                  <ModeToggle />
                  <Heart size={20} />
                  <ShoppingCart size={20} />
                  <UserIcon size={20} />
               </div>
            </div>
         </div>

         <div className='bg-gray-100'>
            <div className='container mx-auto'>
               <NavMenu />
            </div>
         </div>
      </header>
   );
};

export default Header;
