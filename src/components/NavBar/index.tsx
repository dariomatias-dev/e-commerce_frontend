import Link from 'next/link';

import { resetFormatting } from '@/utils/resetFormatting';

const itemsNavBar = [
  'Departamentos',
  'Home Office',
  'Monte seu PC',
  'Lançamentos',
  'Promoções',
  'PC Gamer',
  'Baixe o App',
];

const NavBar = () => {
  return (
    <nav className="bg-zinc-100 px-16 py-2">
      <ul className="flex justify-between font-bold text-gray-500">
        {itemsNavBar.map((item) => {
          const formattedItem = resetFormatting(item);

          return (
            <li
              key={formattedItem}
              className="group flex flex-col items-center"
            >
              <Link href={`/${formattedItem}`}>{item}</Link>
              <span className="-mt-1 inline-block h-[1.8px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full" />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
