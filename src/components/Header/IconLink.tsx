import Link from 'next/link';
import { IconType } from 'react-icons';

type Props = {
  path: string;
  Icon: IconType;
  productIds: string[];
};

export const IconLink = ({ path, Icon, productIds }: Props) => {
  return (
    <div className="relative flex items-center justify-center">
      <Link href={`/${path}`} legacyBehavior>
        <a className="flex items-center justify-center">
          <Icon className="h-6 w-6 text-gray-400 transition-all duration-300 hover:text-gray-500" />
        </a>
      </Link>
      {productIds.length !== 0 && (
        <div className="absolute -right-3 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100">
          <span className="text-xs text-gray-500">{productIds.length}</span>
        </div>
      )}
    </div>
  );
};
