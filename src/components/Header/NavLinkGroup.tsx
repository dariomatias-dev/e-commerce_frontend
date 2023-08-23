import Link from 'next/link';

import { resetFormatting } from '@/utils/resetFormatting';

type Props = {
  name: string;
};

export const NavLinkGroup = ({ name }: Props) => {
  const path = resetFormatting(name);

  return (
    <li className="group flex flex-col items-center">
      <Link href={`/${path}`}>{name}</Link>
      <span className="inline-block h-px w-0 bg-gray-700 transition-all duration-300 group-hover:w-full" />
    </li>
  );
};
