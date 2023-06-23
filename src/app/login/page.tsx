'use client'

import { useState } from "react";

import RedirectionLoginRegistration from "@/components/RedirectionLoginRegistration";
import ShowPasswordButton from "@/components/ShowPasswordButton";

import styles from "@/utils/styles";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full max-w-[25rem] mx-auto mt-16 mb-20">
            <div className="flex flex-col gap-3">
                <h1 className="text-gray-700 text-3xl text-center font-semibold">
                    Fazer login
                </h1>

                <p className="text-center text-sm">
                    Preencha todos os campos abaixo corretamente
                </p>
            </div>

            <form className="flex flex-col gap-6 my-6">
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
                        Email
                    </label>
                </div>

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
                    <ShowPasswordButton
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full hover:bg-black hover:text-white font-semibold uppercase px-4 py-2 border border-black rounded-md transition duration-300"
                >
                    Fazer login
                </button>
            </form>

            <RedirectionLoginRegistration
                message="Não possui um cadastro?"
                pathName="/cadastro"
                linkName="Crie um"
            />
        </div>
    );
};

export default Login;
