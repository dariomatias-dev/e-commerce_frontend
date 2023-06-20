import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import Contacts from "../Contacts";

const Footer = () => {
    return (
        <footer>
            <div className="bg-black text-white px-24 pb-8">
                <div className="flex justify-end pt-12 mb-8">
                    <ul className="flex gap-8">
                        <li className="hover:bg-zinc-800/50 p-2 rounded-md transition duration-300">
                            <a
                                href="https://www.linkedin.com/in/d%C3%A1rio-matias-dales-gamma-587785243/"
                                target="_blank"
                            >
                                <FaLinkedinIn className="w-5 h-5" />
                            </a>
                        </li>

                        <li className="hover:bg-zinc-800/50 p-2 rounded-md transition duration-300">
                            <a
                                href="https://www.instagram.com/dario_delta10/?theme=dark"
                                target="_blank"
                            >
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </li>

                        <li className="hover:bg-zinc-800/50 p-2 rounded-md transition duration-300">
                            <a
                                href="https://wa.me/5583986404371"
                                target="_blank"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                            </a>
                        </li>

                        <li className="hover:bg-zinc-800/50 p-2 rounded-md transition duration-300">
                            <a
                                href="https://twitter.com/matiasdario752"
                                target="_blank"
                            >
                                <FaTwitter className="w-5 h-5" />
                            </a>
                        </li>

                        <li className="hover:bg-zinc-800/50 p-2 rounded-md transition duration-300">
                            <a
                                href="https://portfolio-dariomatias-dev.vercel.app/"
                                target="_blank"
                            >
                                <TbWorld className="w-5 h-5" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-6 justify-between">
                    <div>
                        <h2 className="text-xl font-bold">
                            Sobre
                        </h2>
                        <p className="max-w-[300px] mt-3 text-gray-200 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum odio officiis velit tenetur amet minima nemo ex suscipit, ipsum, itaque fugiat autem labore deserunt mollitia inventore libero numquam cumque illum.
                        </p>
                    </div>

                    <Contacts />

                    <div>
                        <h2 className="text-xl font-bold">
                            Informação
                        </h2>
                        <ul className="inline-flex flex-col gap-3 mt-3 text-gray-200">
                            <li>
                                <div className="inline-flex flex-col group">
                                    <Link href={""}>
                                        Sobre nós
                                    </Link>
                                    <span className="inline-block w-0 group-hover:w-full h-px bg-zinc-300 -mt-[2px] transition-all duration-300" />
                                </div>
                            </li>
                            <li>
                                <div className="inline-flex flex-col group">
                                    <Link href={""}>
                                        Política de Privacidade
                                    </Link>
                                    <span className="inline-block w-0 group-hover:w-full h-px bg-zinc-300 -mt-[2px] transition-all duration-300" />
                                </div>
                            </li>
                            <li>
                                <div className="inline-flex flex-col group">
                                    <Link href={""}>
                                        Termos e Condições
                                    </Link>
                                    <span className="inline-block w-0 group-hover:w-full h-px bg-zinc-300 -mt-[2px] transition-all duration-300" />
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="w-[300px] flex flex-col gap-3">
                        <h2 className="text-xl font-bold">
                            Inscreva-se
                        </h2>

                        <input
                            type="email"
                            placeholder="Insirá seu email aqui"
                            className="w-full bg-zinc-50/10 px-1 py-1 border border-zinc-400 hover:border-zinc-300 focus:border-zinc-300 rounded-sm outline-none transition duration-500"
                        />

                        <button
                            type="button"
                            className="w-full hover:bg-zinc-100 hover:text-black font-bold uppercase py-1 border border-zinc-200 hover:border-zinc-100 rounded-md transition duration-300"
                        >
                            Inscrever
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center px-24 py-2 bg-[#101010] text-zinc-500">
                <p>
                    Criado por <span className="text-zinc-400 font-semibold">Dário</span> | &copy; 2023 Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
};

export default Footer;
