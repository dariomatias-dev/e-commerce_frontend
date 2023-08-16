import Link from 'next/link';

import { infos, socialMedia } from './data';

import Contacts from '../Contacts';

import resetFormatting from '@/utils/resetFormatting';

const Footer = () => {
  return (
    <footer className="select-none">
      <section className="bg-black text-white px-20 pb-8">
        <div className="flex justify-end pt-12 mb-8">
          <ul className="flex gap-8">
            {socialMedia.map(({ link, Icon }, index) => {
              return (
                <li
                  key={index}
                  className="hover:bg-zinc-800/50 p-2 rounded-md transition duration-300"
                >
                  <a href={link} target="_blank">
                    <Icon className="w-5 h-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-wrap justify-between gap-10">
          <div className="mx-auto">
            <h2 className="text-xl font-bold">Sobre</h2>
            <p className="max-w-[300px] mt-3 text-gray-200 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum odio
              officiis velit tenetur amet minima nemo ex suscipit, ipsum, itaque
              fugiat autem labore deserunt mollitia inventore libero numquam
              cumque illum.
            </p>
          </div>

          <Contacts />

          <div className="mx-auto">
            <h2 className="text-xl font-bold">Informações</h2>
            <ul className="inline-flex flex-col gap-3 mt-3 text-gray-200">
              {infos.map((info, index) => {
                const formattedInfoName = resetFormatting(info);

                return (
                  <li key={index}>
                    <div className="inline-flex flex-col group">
                      <Link href={formattedInfoName}>{info}</Link>
                      <span className="inline-block w-0 group-hover:w-full h-px bg-zinc-300 -mt-[2px] transition-all duration-300" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-full max-w-[300px] flex flex-col gap-3 mx-auto">
            <h2 className="text-xl font-bold">Inscreva-se</h2>

            <input
              type="email"
              placeholder="Insirá seu email aqui"
              className="w-full bg-zinc-500/10 px-1 py-1 border border-zinc-400 hover:border-zinc-300 focus:border-zinc-300 rounded-sm outline-none transition duration-500"
            />

            <button
              type="button"
              className="w-full hover:bg-zinc-100 hover:text-black font-bold uppercase py-1 border border-zinc-200 hover:border-zinc-100 rounded-md transition duration-300"
            >
              Inscrever
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-6 sm:px-12 md:px-20 py-2 bg-[#101010] text-zinc-500">
        <p>
          Criado por <span className="text-zinc-400 font-semibold">Dário</span>{' '}
          | &copy; 2023 Todos os direitos reservados
        </p>
      </section>
    </footer>
  );
};

export default Footer;
