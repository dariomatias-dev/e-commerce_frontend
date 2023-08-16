import Link from 'next/link';
import { IconType } from 'react-icons';

type Props = {
  path: string;
  Icon: IconType;
  productIds: string[];
};

export const IconLink = ({ path, Icon, productIds }: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <Link href={`/${path}`} legacyBehavior>
        <a className="flex justify-center items-center">
          <Icon className="w-6 h-6 text-gray-400 hover:text-gray-500 transition-all duration-300" />
        </a>
      </Link>
      {productIds.length !== 0 && (
        <div className="absolute top-0 -right-3 flex justify-center items-center w-5 h-5 bg-gray-100 rounded-full">
          <span className="text-xs text-gray-500">{productIds.length}</span>
        </div>
      )}
    </div>
  );
};
