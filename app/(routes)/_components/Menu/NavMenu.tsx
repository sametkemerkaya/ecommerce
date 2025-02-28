'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Home } from 'lucide-react';

const Categories: { title: string; href: string; description: string }[] = [
   {
      title: 'Yeni Gelenler',
      href: '/docs/plants/new-arrivals',
      description: 'Dükkanımıza yeni eklenen bitkiler.'
   },
   {
      title: 'Popüler Bitkiler',
      href: '/docs/plants/popular',
      description: 'En çok tercih edilen ve popüler bitkiler.'
   },
   {
      title: 'İndirimdeki Bitkiler',
      href: '/docs/plants/on-sale',
      description: 'Şu anda indirimde olan bitkiler.'
   },
   {
      title: 'Kapalı Alan Bitkileri',
      href: '/docs/plants/indoor',
      description: 'Ev ve ofis için uygun kapalı alan bitkileri.'
   },
   {
      title: 'Dış Mekan Bitkileri',
      href: '/docs/plants/outdoor',
      description: 'Bahçe ve dış mekan için uygun bitkiler.'
   },
   {
      title: 'Bakım Ürünleri',
      href: '/docs/plants/care-products',
      description: 'Bitki bakım ürünleri ve aksesuarları.'
   }
];

export function NavMenu() {
   return (
      <NavigationMenu className='py-2 px-5'>
         <NavigationMenuList>
            <NavigationMenuItem>
               <Link href='/' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                     <Home className='hover:text-theme-green' />
                  </NavigationMenuLink>
               </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <Link href='/docs' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Yeni Gelenler</NavigationMenuLink>
               </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <Link href='/docs' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>İndirimdeki Bitkiler</NavigationMenuLink>
               </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <Link href='/docs' legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-theme-red hover:bg-theme-red hover:text-white`}>En Çok Tercih Edilenler</NavigationMenuLink>
               </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <NavigationMenuTrigger className='cursor-pointer bg-transparent hover:text-theme-green data-[state=open]:text-theme-green data-[state=open]:bg-white'>Canlı Bitkiler</NavigationMenuTrigger>
               <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                     {Categories.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href}>
                           {item.description}
                        </ListItem>
                     ))}
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <NavigationMenuTrigger className='cursor-pointer bg-transparent hover:text-theme-green data-[state=open]:text-theme-green data-[state=open]:bg-white'>Bitki Bakımı</NavigationMenuTrigger>
               <NavigationMenuContent>
                  <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                     <li className='row-span-3'>
                        <NavigationMenuLink asChild>
                           <a className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md' href='/'>
                              <div className='mb-2 mt-4 text-lg font-medium'>shadcn/ui</div>
                              <p className='text-sm leading-tight text-muted-foreground'>Beautifully designed components built with Radix UI and Tailwind CSS.</p>
                           </a>
                        </NavigationMenuLink>
                     </li>
                     <ListItem href='/docs' title='Introduction'>
                        Re-usable components built using Radix UI and Tailwind CSS.
                     </ListItem>
                     <ListItem href='/docs/installation' title='Installation'>
                        How to install dependencies and structure your app.
                     </ListItem>
                     <ListItem href='/docs/primitives/typography' title='Typography'>
                        Styles for headings, paragraphs, lists...etc
                     </ListItem>
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <Link href='/docs' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Botanik Market</NavigationMenuLink>
               </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <Link href='/docs' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Bize Ulaşın</NavigationMenuLink>
               </Link>
            </NavigationMenuItem>
         </NavigationMenuList>
      </NavigationMenu>
   );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
   return (
      <li>
         <NavigationMenuLink asChild>
            <a ref={ref} className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', className)} {...props}>
               <div className='text-sm font-medium leading-none'>{title}</div>
               <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
            </a>
         </NavigationMenuLink>
      </li>
   );
});

ListItem.displayName = 'ListItem';
