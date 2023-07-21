import * as yup from "yup";

export const schema = yup
    .object({
        fantasyName: yup
            .string()
            .min(3, "O nome fantasia precisa ter 3 ou mais caracteres.")
            .required("O nome fantasia é obrigatório."),
        corporateName: yup
            .string()
            .min(3, "A razão social precisa ter 3 ou mais caracteres.")
            .required("A razão social é obrigatória."),
        cnpj: yup
            .string()
            .min(18, "O CNPJ precisa ter 3 ou mais caracteres.")
            .max(19)
            .required("O CNPJ é obrigatório."),
        stateRegistration: yup
            .string()
            .min(15, "A inscrição estadual precisa ter 3 ou mais caracteres.")
            .max(16)
            .required("A inscrição estadual é obrigatória."),
        cpf: yup
            .string()
            .min(14, "O CPF é obrigatório.")
            .max(15)
            .required("O CPF é obrigatório."),
        rg: yup
            .string()
            .min(8, "O RG é obrigatório.")
            .max(9)
            .required("O RG é obrigatório."),
        email: yup.string().email().required("O email é obrigatório."),
        phone: yup
            .string()
            .min(17, "O número de telefone é obrigatório.")
            .max(18)
            .required("O número de telefone é obrigatório."),
        state: yup
            .string()
            .min(3, "O estado precisa ter 3 ou mais caracteres.")
            .required("O estado é obrigatório."),
        city: yup
            .string()
            .min(3, "A cidade precisa ter 3 ou mais caracteres.")
            .required("A cidade é obrigatório."),
        address: yup
            .string()
            .min(3, "O endereço precisa ter 3 ou mais caracteres.")
            .required("O endereço é obrigatório."),
        cep: yup
            .string()
            .min(9, "O CEP é obrigatório.")
            .max(10)
            .required("O CEP é obrigatório."),
        password: yup
            .string()
            .min(6, "A senha precisa ter 6 ou mais caracteres.")
            .max(20)
            .required("A senha é obrigatória."),
        confirmPassword: yup
            .string()
            .oneOf(
                [yup.ref("password")],
                "A confirmação da senha precisa ser igual a senha."
            )
            .min(6, "A confirmação da senha precisa ser igual a senha.")
            .max(20)
            .required("A confirmação da senha é obrigatória."),
        termsOfUse: yup
            .bool()
            .oneOf([true], "É obrigatório aceitar.")
            .required("É obrigatório aceitar."),
        receiveMessages: yup.bool().required(),
    })
    .required();

export type LegalPersonFormProps = yup.InferType<typeof schema>;
