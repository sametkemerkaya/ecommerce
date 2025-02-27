import Image from 'next/image';
import React from 'react';

interface AuthLayoutProps {
   children: React.ReactNode;
}

const layout = ({ children }: AuthLayoutProps) => {
   return (
      <div className='flex flex-row items-center justify-center'>
         <div className='hidden lg:block lg:w-3/6 h-screen'>
            <Image alt='Login Image' priority={true} src={`/login.jpg`} width={1080} height={1920} className='w-full h-screen object-cover brightness-75' />
         </div>
         <div className='w-full lg:w-3/6 px-10 '>{children}</div>
      </div>
   );
};

export default layout;
