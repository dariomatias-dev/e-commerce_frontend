import { FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-24 py-12">
            <div className="flex justify-end">
                <ul className="flex gap-8">
                    <li className="hover:bg-zinc-800 p-2 rounded-md transition duration-300">
                        <a
                            href="https://www.linkedin.com/in/d%C3%A1rio-matias-dales-gamma-587785243/"
                            target="_blank"
                        >
                            <FaLinkedinIn className="w-5 h-5" />
                        </a>
                    </li>
                    <li className="hover:bg-zinc-800 p-2 rounded-md transition duration-300">
                        <a
                            href="https://www.instagram.com/dario_delta10/?theme=dark"
                            target="_blank"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                    </li>
                    <li className="hover:bg-zinc-800 p-2 rounded-md transition duration-300">
                        <a
                            href="https://wa.me/5583986404371"
                            target="_blank"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                        </a>
                    </li>
                    <li className="hover:bg-zinc-800 p-2 rounded-md transition duration-300">
                        <a
                            href="https://twitter.com/matiasdario752"
                            target="_blank"
                        >
                            <FaTwitter className="w-5 h-5" />
                        </a>
                    </li>
                    <li className="hover:bg-zinc-800 p-2 rounded-md transition duration-300">
                        <a
                            href="https://portfolio-dariomatias-dev.vercel.app/"
                            target="_blank"
                        >
                            <TbWorld className="w-5 h-5" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
