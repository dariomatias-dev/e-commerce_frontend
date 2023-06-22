import { FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const infos = [
    "Sobre nós",
    "Política de Privacidade",
    "Termos e Condições",
];

const socialMedia = [
    {
        link: "https://www.linkedin.com/in/d%C3%A1rio-matias-dales-gamma-587785243/",
        Icon: FaLinkedinIn,
    },
    {
        link: "https://www.instagram.com/dario_delta10/?theme=dark",
        Icon: FaInstagram,
    },
    {
        link: "https://wa.me/5583986404371",
        Icon: FaWhatsapp,
    },
    {
        link: "https://twitter.com/matiasdario752",
        Icon: FaTwitter,
    },
    {
        link: "https://portfolio-dariomatias-dev.vercel.app/",
        Icon: TbWorld,
    },
];

export { infos, socialMedia };
