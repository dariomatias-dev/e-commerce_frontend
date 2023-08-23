'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { IoPersonAddOutline } from 'react-icons/io5';
import { MdFavoriteBorder, MdOutlineSearch } from 'react-icons/md';

import { IconLink } from './IconLink';

import { useUserPreferences } from '@/contexts/UserPreferencesContext';
import { NavLinkGroup } from './NavLinkGroup';

const Header = () => {
  const [query, setQuery] = useState('');

  const { push } = useRouter();

  const { cartProductIds, wishlistProductIds } = useUserPreferences();

  const validateQueryValue = () => {
    const value = query.trim();
    const valueExists = value.length;
    const minimumSize = value.length >= 3;
    const maximumSize = value.length <= 20;

    return valueExists && minimumSize && maximumSize;
  };

  const search = () => {
    const validValue = validateQueryValue();

    if (validValue) push(`/busca/${query}`);
  };

  return (
    <header className="flex items-center justify-between px-20 py-3">
      <div className="flex items-end gap-7">
        <Link href="/" legacyBehavior>
          <a className="flex items-center gap-2">
            <Image
              src="/logo-2.png"
              width={500}
              height={500}
              alt="Logo"
              className="h-auto w-full max-w-[25px]"
            />
            <h1 className="text-xl font-bold text-gray-500">Power Tech</h1>
          </a>
        </Link>

        <ul className="mb-[3px] flex gap-5 text-xs text-gray-600">
          <NavLinkGroup name="Sobre nós" />
          <NavLinkGroup name="Contato" />
        </ul>
      </div>

      <div className="hover:border-px flex h-10 w-[450px] overflow-hidden rounded-md border-[0.8px] border-gray-500 transition-all duration-300 hover:border-black">
        <input
          type="text"
          minLength={4}
          maxLength={40}
          placeholder="Pesquise aqui..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') search();
          }}
          className="w-full pl-2 outline-none"
        />

        <button type="button" onClick={search} className="h-full bg-black px-2">
          <MdOutlineSearch className="h-6 w-6 select-none text-white" />
        </button>
      </div>

      <div className="flex gap-6">
        <IconLink path="carrinho" Icon={BsCart3} productIds={cartProductIds} />

        <IconLink
          path="lista-de-desejos"
          Icon={MdFavoriteBorder}
          productIds={wishlistProductIds}
        />

        <Link href="/login" legacyBehavior>
          <a className="group flex items-center justify-center rounded-full border border-gray-500 p-2 transition-all duration-300 hover:text-gray-600">
            <IoPersonAddOutline className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:text-gray-600" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
