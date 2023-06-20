'use client'

import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const contacts = [
    {
        content: "Telefone: +55 83 8640-4371",
        icon: BsFillTelephoneFill,
    },
    {
        content: "Email: matiasdario75@gmail.com",
        icon: MdEmail,
    },
    {
        content: "Endereço: Areial PB - Brasil",
        icon: MdLocationOn,
    },
];

const Contacts = () => {
    const [showMessage, setShowMessage] = useState(false);

    const copyToClipboard = (text: string) => {
        const twoPointsLocation = text.indexOf(":");
        navigator.clipboard.writeText(text.slice(twoPointsLocation + 2));

        setShowMessage(true);
        hideMessage();
    };

    const hideMessage = () => {
        let timer: ReturnType<typeof setTimeout>;
        timer = setTimeout(() => {
            setShowMessage(false);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    };

    return (
        <div>
            <h2 className="text-xl font-bold">
                Contato
            </h2>
            <ul className="flex flex-col gap-3 mt-3 text-gray-200">
                {
                    contacts.map((contact, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => copyToClipboard(contact.content)}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <contact.icon className="w-5 h-5 text-white" />
                                {contact.content}
                            </li>
                        )
                    })
                }
            </ul>

            <div className={`${showMessage ? "opacity-100" : "opacity-0"} fixed bottom-5 mx-auto bg-[#101010] px-4 py-1 rounded-full transition duration-1000`}>
                <p>
                    Texto copiado para a área de transferência
                </p>
            </div>
        </div>
    );
};

export default Contacts;
