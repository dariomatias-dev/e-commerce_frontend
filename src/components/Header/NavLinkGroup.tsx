import Link from 'next/link';

import { resetFormatting } from '@/utils/resetFormatting';

type Props = {
  name: string;
};

export const NavLinkGroup = ({ name }: Props) => {
  const path = resetFormatting(name);

  return (
    <li className="flex flex-col items-center group">
      <Link href={`/${path}`}>{name}</Link>
      <span className="inline-block w-0 group-hover:w-full h-px bg-gray-700 transition-all duration-300" />
    </li>
  );
};
