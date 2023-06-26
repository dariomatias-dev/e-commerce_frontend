'use client'

import { useState } from "react";

import FormLegalPerson from "@/components/Forms/FormLegalPerson";
import FormPhysicalPerson from "@/components/Forms/FormPhysicalPerson";

import RedirectionLoginRegistration from "@/components/RedirectionLoginRegistration";

const Cadastro = () => {
    const [form, setForm] = useState("physicalPerson");

    return (
        <div className="w-full max-w-[40rem] mx-auto mt-16 mb-20">
            <div className="flex flex-col gap-3">
                <h1 className="text-gray-700 text-3xl text-center font-semibold">
                    Criar minha conta
                </h1>

                <p className="text-center text-sm">
                    Preencha todos os campos abaixo corretamente
                </p>
            </div>

            <div className="flex flex-col my-6">
                <h2 className="text-gray-500 font-semibold">
                    Tipo de conta
                </h2>

                <form className="flex gap-4">
                    <label className="flex gap-2">
                        <input
                            type="radio"
                            name="accountType"
                            value="physicalPerson"
                            checked={form === "physicalPerson"}
                            onChange={e => setForm(e.target.value)}
                        />
                        <span>Pessoa Física</span>
                    </label>

                    <label className="flex gap-2">
                        <input
                            type="radio"
                            name="accountType"
                            value="legalPerson"
                            checked={form === "legalPerson"}
                            onChange={e => setForm(e.target.value)}
                        />
                        <span>Pessoa Jurídica</span>
                    </label>
                </form>
            </div>

            {
                form === "physicalPerson" ?
                    <FormPhysicalPerson />
                    :
                    <FormLegalPerson />
            }

            <RedirectionLoginRegistration
                message="Já possui um cadastro?"
                pathName="/login"
                linkName="Faça login"
            />
        </div>
    );
};

export default Cadastro;
