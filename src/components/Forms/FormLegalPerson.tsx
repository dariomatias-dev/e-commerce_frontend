import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormInput from "./Fields/FormInput";
import { schema, FormLegalPersonProps } from "./Schemas/LegalPersonFormSchema";

import FormInputPassword from "./Fields/FormInputPassword";
import FormCheckboxes from "./Fields/FormCheckboxes";
import SubmitFormButton from "./SubmitFormButton";

const FormLegalPerson = () => {
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            termsOfUse: true,
        },
        resolver: yupResolver(schema),
    });

    const receiveFormData = (data: FormLegalPersonProps) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(receiveFormData)}
            className="flex flex-col gap-6"
        >
            <div className="flex gap-4">
                <FormInput
                    inputName="Nome Fantasia"
                    id="fantasyName"
                    placeholder="Power Tech"
                    control={control}
                    errors={errors}
                />

                <FormInput
                    inputName="Razão Social"
                    id="corporateName"
                    placeholder="E-commerce"
                    control={control}
                    errors={errors}
                />
            </div>

            <div className="flex gap-4">
                <FormInput
                    inputName="CNPJ"
                    id="cnpj"
                    placeholder="12345678/9012-34"
                    control={control}
                    errors={errors}
                />

                <FormInput
                    inputName="Inscrição Estadual"
                    id="stateRegistration"
                    placeholder=" "
                    control={control}
                    errors={errors}
                />
            </div>

            <div className="flex gap-4">
                <FormInput
                    inputName="CPF"
                    id="cpf"
                    placeholder=" "
                    control={control}
                    errors={errors}
                />

                <FormInput
                    inputName="RG"
                    id="rg"
                    placeholder=" "
                    control={control}
                    errors={errors}
                />
            </div>


            <div className="flex gap-4">
                <FormInput
                    inputName="E-mail"
                    id="email"
                    placeholder=" "
                    control={control}
                    errors={errors}
                />

                <FormInput
                    inputName="Telefone Celular"
                    id="phoneNumber"
                    placeholder=" "
                    control={control}
                    errors={errors}
                />
            </div>

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

            <FormCheckboxes
                register={register}
                errors={errors}
            />

            <SubmitFormButton text="Criar conta" />
        </form>
    );
};

export default FormLegalPerson;
