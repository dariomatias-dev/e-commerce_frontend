import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormInput from "./Fields/FormInput";
import { schema } from "./Schemas/LegalPersonFormSchema";

import FormInputPassword from "./Fields/FormInputPassword";
import FormCheckboxes from "./Fields/FormCheckboxes";
import SubmitFormButton from "./SubmitFormButton";

import sendRegistrationDataToServer from "@/services/sendRegistrationDataToServer";

const FormLegalPerson = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            termsOfUse: true,
        },
        resolver: yupResolver(schema),
    });

    return (
        <form
            onSubmit={handleSubmit(sendRegistrationDataToServer)}
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
                    placeholder="123.456.789.012"
                    control={control}
                    errors={errors}
                />
            </div>

            <div className="flex gap-4">
                <FormInput
                    inputName="CPF"
                    id="cpf"
                    placeholder="123.456.789-01"
                    control={control}
                    errors={errors}
                />

                <FormInput
                    inputName="RG"
                    id="rg"
                    placeholder="12.345-6"
                    control={control}
                    errors={errors}
                />
            </div>

            <div className="flex gap-4">
                <FormInput
                    inputName="E-mail"
                    id="email"
                    placeholder="matiasdario75@gmail.com"
                    maxLength={30}
                    control={control}
                    errors={errors}
                />

                <FormInput
                    inputName="Telefone Celular"
                    id="phone"
                    placeholder="+55 83 98640-4371"
                    control={control}
                    errors={errors}
                />
            </div>

            <div className="flex gap-4">
                <FormInput
                    inputName="Estado"
                    id="state"
                    placeholder="Paraíba"
                    control={control}
                    errors={errors}
                />

                <FormInput
                    inputName="Cidade"
                    id="city"
                    placeholder="Areial"
                    control={control}
                    errors={errors}
                />
            </div>

            <div className="flex gap-4">
                <FormInput
                    inputName="Endereço"
                    id="address"
                    placeholder="Rua São José, 811, Bairro Centro"
                    maxLength={40}
                    control={control}
                    errors={errors}
                />

                <FormInput
                    inputName="CEP"
                    id="cep"
                    placeholder="58140-000"
                    control={control}
                    errors={errors}
                />
            </div>

            <div className="flex gap-4">
                <FormInputPassword
                    inputName="Senha"
                    id="password"
                    control={control}
                    errors={errors}
                />

                <FormInputPassword
                    inputName="Confirmar senha"
                    id="confirmPassword"
                    control={control}
                    errors={errors}
                />
            </div>

            <FormCheckboxes register={register} errors={errors} />

            <SubmitFormButton text="Criar conta" />
        </form>
    );
};

export default FormLegalPerson;
