import React from 'react';
import Header from './_components/Menu/Header';

interface RoutesProps {
   children: React.ReactNode;
}

const Routes = ({ children }: RoutesProps) => {
   return (
      <>
         <Header/>
         {children}
         Footer
      </>
   );
};

export default Routes;
