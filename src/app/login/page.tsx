'use client'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormInput from "@/components/Forms/Fields/FormInput";
import FormInputPassword from "@/components/Forms/Fields/FormInputPassword";
import { schema, LoginFormProps } from "@/components/Forms/Schemas/LoginFormSchema";
import SubmitFormButton from "@/components/Forms/SubmitFormButton";
import RedirectionLoginRegistration from "@/components/RedirectionLoginRegistration";

const Login = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const receiveFormData = (data: LoginFormProps) => {
        console.log(data);
    };

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

            <form
                onSubmit={handleSubmit(receiveFormData)}
                className="flex flex-col gap-6 my-6"
            >
                <FormInput
                    inputName="E-mail"
                    inputType="email"
                    id="email"
                    placeholder="matiasdario75@gmail.com"
                    control={control}
                    errors={errors}
                />

                <FormInputPassword
                    inputName="Senha"
                    id="password"
                    control={control}
                    errors={errors}
                />

                <SubmitFormButton text="Fazer login" />
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
