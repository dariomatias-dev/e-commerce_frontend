'use client'

import { useState } from "react";

import ShowPasswordButton from "@/components/ShowPasswordButton";

import styles from "@/utils/styles";

const FormLegalPerson = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <form className="flex flex-col gap-6">
            <div className="flex gap-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        id="fantasyName"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="fantasyName"
                        className={styles.label}
                    >
                        Nome Fantasia
                    </label>
                </div>

                <div className="relative w-full">
                    <input
                        type="text"
                        id="corporateName"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="corporateName"
                        className={styles.label}
                    >
                        Razão Social
                    </label>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        id="cnpj"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="cnpj"
                        className={styles.label}
                    >
                        CNPJ
                    </label>
                </div>

                <div className="relative w-full">
                    <input
                        type="text"
                        id="stateRegistration"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="stateRegistration"
                        className={styles.label}
                    >
                        Inscrição Estadual
                    </label>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        id="cpf"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="cpf"
                        className={styles.label}
                    >
                        CPF
                    </label>
                </div>

                <div className="relative w-full">
                    <input
                        type="text"
                        id="rg"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="rg"
                        className={styles.label}
                    >
                        RG
                    </label>
                </div>
            </div>


            <div className="flex gap-4">
                <div className="relative w-full">
                    <input
                        type="email"
                        id="email"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="email"
                        className={styles.label}
                    >
                        E-mail
                    </label>
                </div>

                <div className="relative w-full">
                    <input
                        type="tel"
                        id="phoneNumber"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="phoneNumber"
                        className={styles.label}
                    >
                        Telefone Celular
                    </label>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="relative w-full">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder=" "
                        autoComplete="off"
                        className={styles.input}
                    />
                    <label
                        htmlFor="password"
                        className={styles.label}
                    >
                        Senha
                    </label>
                    <ShowPasswordButton
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                </div>

                <div className="relative w-full">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        placeholder=" "
                        autoComplete="off"
                        className={styles.input}
                    />
                    <label
                        htmlFor="confirmPassword"
                        className={styles.label}
                    >
                        Confirmar senha
                    </label>
                    <ShowPasswordButton
                        showPassword={showConfirmPassword}
                        setShowPassword={setShowConfirmPassword}
                    />
                </div>
            </div>

            <div className="text-gray-700">
                <label className="flex gap-2">
                    <input type="checkbox" />
                    Li e concordo com os termos de uso e privacidade da Power Tech
                </label>

                <label className="flex gap-2">
                    <input type="checkbox" />
                    Quero receber ofertas e novidades por e-mail e mensagens no App da Power Tech
                </label>
            </div>

            <button
                type="submit"
                className="w-full hover:bg-black hover:text-white font-semibold uppercase px-4 py-2 border border-black rounded-md transition duration-300"
            >
                Criar conta
            </button>
        </form>
    );
};

export default FormLegalPerson;
