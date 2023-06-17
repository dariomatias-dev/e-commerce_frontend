import resetFormatting from "@/utils/resetFormatting";
import Link from "next/link";

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
                            <Link href={`/${formattedItem}`}>
                                {item}
                            </Link>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default NavBar;
