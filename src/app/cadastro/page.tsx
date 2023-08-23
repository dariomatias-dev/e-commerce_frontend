'use client';

import { useState } from 'react';

import FormLegalPerson from '@/components/Forms/FormLegalPerson';
import FormPhysicalPerson from '@/components/Forms/FormPhysicalPerson';

import RedirectionLoginRegistration from '@/components/RedirectionLoginRegistration';

const Cadastro = () => {
  const [form, setForm] = useState('physicalPerson');

  return (
    <div className="mx-auto mb-20 mt-16 w-full max-w-[40rem]">
      <div className="flex flex-col gap-3">
        <h1 className="text-center text-3xl font-semibold text-gray-700">
          Criar minha conta
        </h1>

        <p className="text-center text-sm">
          Preencha todos os campos abaixo corretamente
        </p>
      </div>

      <div className="my-6 flex flex-col">
        <h2 className="font-semibold text-gray-500">Tipo de conta</h2>

        <form className="flex gap-4">
          <label className="flex gap-2">
            <input
              type="radio"
              name="accountType"
              value="physicalPerson"
              checked={form === 'physicalPerson'}
              onChange={(e) => setForm(e.target.value)}
            />
            <span>Pessoa Física</span>
          </label>

          <label className="flex gap-2">
            <input
              type="radio"
              name="accountType"
              value="legalPerson"
              checked={form === 'legalPerson'}
              onChange={(e) => setForm(e.target.value)}
            />
            <span>Pessoa Jurídica</span>
          </label>
        </form>
      </div>

      {form === 'physicalPerson' ? <FormPhysicalPerson /> : <FormLegalPerson />}

      <RedirectionLoginRegistration
        message="Já possui um cadastro?"
        pathName="/login"
        linkName="Faça login"
      />
    </div>
  );
};

export default Cadastro;
