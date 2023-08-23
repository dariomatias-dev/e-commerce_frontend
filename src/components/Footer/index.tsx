import Link from 'next/link';

import { infos, socialMedia } from './data';

import Contacts from '../Contacts';

import { resetFormatting } from '@/utils/resetFormatting';

const Footer = () => {
  return (
    <footer className="select-none">
      <section className="bg-black px-20 pb-8 text-white">
        <div className="mb-8 flex justify-end pt-12">
          <ul className="flex gap-8">
            {socialMedia.map(({ link, Icon }, index) => {
              return (
                <li
                  key={index}
                  className="rounded-md p-2 transition duration-300 hover:bg-zinc-800/50"
                >
                  <a href={link} target="_blank">
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-wrap justify-between gap-10">
          <div className="mx-auto">
            <h2 className="text-xl font-bold">Sobre</h2>
            <p className="mt-3 max-w-[300px] text-justify text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum odio
              officiis velit tenetur amet minima nemo ex suscipit, ipsum, itaque
              fugiat autem labore deserunt mollitia inventore libero numquam
              cumque illum.
            </p>
          </div>

          <Contacts />

          <div className="mx-auto">
            <h2 className="text-xl font-bold">Informações</h2>
            <ul className="mt-3 inline-flex flex-col gap-3 text-gray-200">
              {infos.map((info, index) => {
                const formattedInfoName = resetFormatting(info);

                return (
                  <li key={index}>
                    <div className="group inline-flex flex-col">
                      <Link href={formattedInfoName}>{info}</Link>
                      <span className="-mt-[2px] inline-block h-px w-0 bg-zinc-300 transition-all duration-300 group-hover:w-full" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mx-auto flex w-full max-w-[300px] flex-col gap-3">
            <h2 className="text-xl font-bold">Inscreva-se</h2>

            <input
              type="email"
              placeholder="Insirá seu email aqui"
              className="w-full rounded-sm border border-zinc-400 bg-zinc-500/10 px-1 py-1 outline-none transition duration-500 hover:border-zinc-300 focus:border-zinc-300"
            />

            <button
              type="button"
              className="w-full rounded-md border border-zinc-200 py-1 font-bold uppercase transition duration-300 hover:border-zinc-100 hover:bg-zinc-100 hover:text-black"
            >
              Inscrever
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#101010] px-6 py-2 text-zinc-500 sm:px-12 md:px-20">
        <p>
          Criado por <span className="font-semibold text-zinc-400">Dário</span>{' '}
          | &copy; 2023 Todos os direitos reservados
        </p>
      </section>
    </footer>
  );
};

export default Footer;
