'use client'

import { useState } from "react";
import Link from "next/link";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import styles from "./styles";

const FormPhysicalPerson = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <form className="flex flex-col gap-6">
            <div className="flex gap-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        id="firstName"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="firstName"
                        className={styles.label}
                    >
                        Nome
                    </label>
                </div>

                <div className="relative w-full">
                    <input
                        type="text"
                        id="lastName"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="lastName"
                        className={styles.label}
                    >
                        Sobrenome
                    </label>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        id="dateOfBirth"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="dateOfBirth"
                        className={styles.label}
                    >
                        Data de Nascimento
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

            <div className="relative w-full">
                <input
                    type="email"
                    id="rg"
                    placeholder=" "
                    className={styles.input}
                />
                <label
                    htmlFor="rg"
                    className={styles.label}
                >
                    E-mail
                </label>
            </div>

            <div className="flex gap-4">
                <div className="relative w-full">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="password"
                        className={styles.label}
                    >
                        Senha
                    </label>
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-1/4 right-2 mt-[2px]"
                    >
                        {
                            showPassword ?
                                <BsEyeFill className="w-5 h-5" />
                                :
                                <BsEyeSlashFill className="w-5 h-5" />
                        }
                    </button>
                </div>

                <div className="relative w-full">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="confirmPassword"
                        className={styles.label}
                    >
                        Confirmar senha
                    </label>
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute top-1/4 right-2 mt-[2px]"
                    >
                        {
                            showConfirmPassword ?
                                <BsEyeFill className="w-5 h-5" />
                                :
                                <BsEyeSlashFill className="w-5 h-5" />
                        }
                    </button>
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

            <div className="flex gap-1 mx-auto">
                <span className="text-gray-700">
                    Já possui um cadastro?
                </span>

                <Link
                    href={""}
                    legacyBehavior
                >
                    <div className="flex flex-col group">
                        <a className="font-semibold">
                            Faça login
                        </a>
                        <span className="inline-block w-0 group-hover:w-full h-[1.8px] bg-gray-500 -mt-1 transition-all duration-300" />
                    </div>
                </Link>
            </div>
        </form>
    );
};

export default FormPhysicalPerson;
