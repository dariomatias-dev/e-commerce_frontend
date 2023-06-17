import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineSearch } from "react-icons/md";

const Header = () => {
    const [query, setQuery] = useState("");

    return (
        <header className="py-3 flex justify-between items-center px-20">
            <div className="flex items-end gap-7">
                <Link
                    href="/"
                    legacyBehavior
                >
                    <a className="flex items-center gap-2">
                        <Image
                            src="/logo-2.png"
                            width={500}
                            height={500}
                            alt="Logo"
                            className="w-full max-w-[25px] h-auto"
                        />
                        <h1 className="text-gray-500 text-xl font-bold">
                            Power Tech
                        </h1>
                    </a>
                </Link>

                <ul className="flex gap-5 text-gray-600 text-xs mb-[3px]">
                    <li className="flex flex-col items-center group">
                        <Link href="/">
                            Sobre nós
                        </Link>
                        <span className="inline-block w-0 group-hover:w-full h-px bg-gray-700 transition-all duration-300" />
                    </li>
                    <li className="flex flex-col items-center group">
                        <Link href="/">
                            Contato
                        </Link>
                        <span className="inline-block w-0 group-hover:w-full h-px bg-gray-700 transition-all duration-300" />
                    </li>
                </ul>
            </div>

            <div className="flex w-[450px] h-10 border-[0.8px] hover:border-px border-gray-500 hover:border-black rounded-md overflow-hidden transition-all duration-300">
                <input
                    type="text"
                    minLength={4}
                    maxLength={40}
                    placeholder="Digite algo..."
                    onChange={e => setQuery(e.target.value)}
                    className="w-full pl-2 outline-none"
                />

                <button className="h-full bg-black px-2">
                    <MdOutlineSearch className="w-6 h-6 text-white select-none" />
                </button>
            </div>

            <div className="flex gap-6">
                <Link
                    href="/"
                    legacyBehavior
                >
                    <a
                        className="flex justify-center items-center"
                    >
                        <BsCart3 className="w-5 h-5 text-gray-400 hover:text-gray-500 transition-all duration-300" />
                    </a>
                </Link>

                <Link
                    href="/"
                    legacyBehavior
                >
                    <a
                        className="flex justify-center items-center"
                    >
                        <MdFavoriteBorder className="w-5 h-5 text-gray-400 hover:text-gray-500 transition-all duration-300" />
                    </a>
                </Link>

                <Link
                    href="/"
                    legacyBehavior
                >
                    <a
                        className="flex justify-center items-center p-2 border border-gray-500 hover:text-gray-600 rounded-full transition-all duration-300 group"
                    >
                        <IoPersonAddOutline className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-all duration-300" />
                    </a>
                </Link>
            </div>
        </header>
    );
};

export default Header;
