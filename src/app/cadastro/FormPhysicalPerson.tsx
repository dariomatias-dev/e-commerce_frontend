'use client'

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ShowPasswordButton from "@/components/ShowPasswordButton";

import formatCpf from "@/utils/formatCpf";
import formatPhoneNumber from "@/utils/formatPhoneNumber";
import formatRg from "@/utils/formatRg";
import formatDateOfBirth from "@/utils/formattedDateOfBirth";
import styles from "@/utils/styles";

const schema = yup.object({
    firstName: yup.string().min(3).max(20),
    lastName: yup.string().min(3).max(20),
    dateOfBirth: yup.string().min(10).max(10),
    phoneNumber: yup.string().min(17).max(17),
    cpf: yup.string().min(14).max(14),
    rg: yup.string().min(7).max(7),
    email: yup.string().email(),
    password: yup.string().min(6).max(20),
    confirmPassword: yup.string().oneOf([yup.ref("password")]).min(6).max(20),
}).required();

type FormProps = yup.InferType<typeof schema>;

const FormPhysicalPerson = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const receiveFormData = (data: FormProps) => {
        console.log(data);
    };

    useEffect(() => {
        const formattedDateOfBirth = formatDateOfBirth(watch("dateOfBirth") as string);
        setValue("dateOfBirth", formattedDateOfBirth);
    }, [watch("dateOfBirth")]);

    useEffect(() => {
        const formattedPhoneNumber = formatPhoneNumber(watch("phoneNumber") as string);
        setValue("phoneNumber", formattedPhoneNumber);
    }, [watch("phoneNumber")]);

    useEffect(() => {
        const formattedCpf = formatCpf(watch("cpf") as string);
        setValue("cpf", formattedCpf);
    }, [watch("cpf")]);

    useEffect(() => {
        const formattedRg = formatRg(watch("rg") as string);
        setValue("rg", formattedRg);
    }, [watch("rg")]);

    return (
        <form
            onSubmit={handleSubmit(receiveFormData)}
            className="flex flex-col gap-6"
        >
            <div className="flex gap-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        id="firstName"
                        placeholder=" "
                        {...register("firstName")}
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
                        {...register("lastName")}
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
                        {...register("dateOfBirth")}
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
                        {...register("phoneNumber")}
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
                        {...register("cpf")}
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
                        {...register("rg")}
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
                    id="email"
                    placeholder=" "
                    {...register("email")}
                    className={styles.input}
                />
                <label
                    htmlFor="email"
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
                        {...register("password")}
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
                        {...register("confirmPassword")}
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

export default FormPhysicalPerson;
