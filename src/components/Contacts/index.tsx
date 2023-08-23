'use client';

import { useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const contacts = [
  {
    content: 'Telefone: +55 83 8640-4371',
    icon: BsFillTelephoneFill,
  },
  {
    content: 'Email: matiasdario75@gmail.com',
    icon: MdEmail,
  },
  {
    content: 'Endereço: Areial PB - Brasil',
    icon: MdLocationOn,
  },
];

const Contacts = () => {
  const [message, setMessage] = useState({
    showMessage: false,
    contactName: '',
  });

  const copyToClipboard = (text: string) => {
    const twoPointsLocation = text.indexOf(':');
    navigator.clipboard.writeText(text.slice(twoPointsLocation + 2));

    setMessage({
      showMessage: true,
      contactName: text.slice(0, twoPointsLocation),
    });
    hideMessage();
  };

  const hideMessage = () => {
    let timer: ReturnType<typeof setTimeout>;
    const time = 2500;
    timer = setTimeout(() => {
      setMessage((prevState) => {
        return {
          ...prevState,
          showMessage: false,
        };
      });
    }, time);

    return () => {
      clearInterval(timer);
    };
  };

  return (
    <div className="mx-auto">
      <h2 className="text-xl font-bold">Contato</h2>

      <ul className="mt-3 flex flex-col gap-3 text-gray-200">
        {contacts.map((contact, index) => (
          <li
            key={index}
            onClick={() => copyToClipboard(contact.content)}
            className="flex cursor-pointer items-center gap-2"
          >
            <contact.icon className="h-5 w-5 text-white" />
            {contact.content}
          </li>
        ))}
      </ul>

      <div
        className={`${
          message.showMessage ? 'opacity-100' : 'opacity-0'
        } fixed bottom-5 left-2/4 -translate-x-2/4 rounded-full bg-[#101010] px-4 py-1 transition duration-1000`}
      >
        <p>{message.contactName} copiado para a área de transferência</p>
      </div>
    </div>
  );
};

export default Contacts;
