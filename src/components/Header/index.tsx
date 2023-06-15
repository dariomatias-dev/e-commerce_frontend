import { MdOutlineSearch } from "react-icons/md";
import { useState } from 'react';

const Header = () => {
    const [query, setQuery] = useState("");

    return (
        <header className="flex justify-center items-center h-20">
            <div className="flex w-[350px] h-[38px] border-[0.8px] border-black rounded-md overflow-hidden">
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
        </header>
    );
};

export default Header;
