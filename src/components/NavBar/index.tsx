import Link from "next/link";

import resetFormatting from "@/utils/resetFormatting";

const itemsNavBar = [
    "Departamentos",
    "Home Office",
    "Monte seu PC",
    "Lançamentos",
    "Promoções",
    "PC Gamer",
    "Baixe o App",
];

const NavBar = () => {
    return (
        <nav className="bg-zinc-100 py-2 px-16">
            <ul className="flex justify-between text-gray-500 font-bold">
                {
                    itemsNavBar.map(item => {
                        const formattedItem = resetFormatting(item);

                        return (
                            <li
                                key={formattedItem}
                                className="flex flex-col items-center group"
                            >
                                <Link href={`/${formattedItem}`}>
                                    {item}
                                </Link>
                                <span className="inline-block w-0 group-hover:w-full h-[1.8px] bg-gray-500 -mt-1 transition-all duration-300" />
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default NavBar;
