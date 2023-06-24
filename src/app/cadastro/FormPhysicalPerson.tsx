'use client'

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import FormCheckboxes from "./FormCheckboxes";
import FormInput from "./FormInput";
import FormInputPassword from "./FormInputPassword";
import { schema } from "./FormPhysicalPersonSchema";

import formatCpf from "@/utils/formatCpf";
import formatPhoneNumber from "@/utils/formatPhoneNumber";
import formatRg from "@/utils/formatRg";
import formatDateOfBirth from "@/utils/formattedDateOfBirth";
import SubmitFormButton from "./SubmitFormButton";

type FormProps = yup.InferType<typeof schema>;

const FormPhysicalPerson = () => {
    const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            termsOfUse: true,
        },
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
                <FormInput
                    inputName="Nome"
                    id="firstName"
                    placeholder="Dário"
                    register={register}
                    errors={errors}
                />

                <FormInput
                    inputName="Sobrenome"
                    id="lastName"
                    placeholder="Matias"
                    register={register}
                    errors={errors}
                />
            </div>

            <div className="flex gap-4">
                <FormInput
                    inputName="Data de Nascimento"
                    id="dateOfBirth"
                    placeholder="06/03/2005"
                    register={register}
                    errors={errors}
                />

                <FormInput
                    inputName="Telefone Celular"
                    id="phoneNumber"
                    placeholder="+55 83 98640-4371"
                    register={register}
                    errors={errors}
                />
            </div>

            <div className="flex gap-4">
                <FormInput
                    inputName="CPF"
                    id="cpf"
                    placeholder="123.456.789-01"
                    register={register}
                    errors={errors}
                />

                <FormInput
                    inputName="RG"
                    id="rg"
                    placeholder="12.345-6"
                    register={register}
                    errors={errors}
                />
            </div>

            <FormInput
                inputName="E-mail"
                id="email"
                placeholder="matiasdario75@gmail.com"
                maxLength={30}
                register={register}
                errors={errors}
            />

            <div className="flex gap-4">
                <FormInputPassword
                    inputName="Senha"
                    id="password"
                    register={register}
                    errors={errors}
                />

                <FormInputPassword
                    inputName="Confirmar senha"
                    id="confirmPassword"
                    register={register}
                    errors={errors}
                />
            </div>

            <FormCheckboxes register={register} />

            <SubmitFormButton />
        </form>
    );
};

export default FormPhysicalPerson;
