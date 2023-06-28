import * as yup from "yup";

export const schema = yup.object({
    fantasyName: yup
        .string()
        .min(3, "O nome precisa ter 3 ou mais caracteres.")
        .required("O nome é obrigatório."),
    corporateName: yup
        .string()
        .min(3, "O nome precisa ter 3 ou mais caracteres.")
        .required("O nome é obrigatório."),
    cnpj: yup
        .string()
        .min(3, "O nome precisa ter 3 ou mais caracteres.")
        .required("O nome é obrigatório."),
    stateRegistration: yup
        .string()
        .min(3, "O nome precisa ter 3 ou mais caracteres.")
        .required("O nome é obrigatório."),
    phoneNumber: yup
        .string()
        .min(17, "O número de telefone é obrigatório.")
        .max(18)
        .required("O número de telefone é obrigatório."),
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
    email: yup
        .string()
        .email()
        .required("O email é obrigatório."),
    password: yup
        .string()
        .min(6, "A senha precisa ter 6 ou mais caracteres.")
        .max(20)
        .required("A senha é obrigatória."),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "A confirmação da senha precisa ser igual a senha.")
        .min(6, "A confirmação da senha precisa ser igual a senha.")
        .max(20)
        .required("A confirmação da senha é obrigatória."),
    termsOfUse: yup
        .bool()
        .oneOf([true], "É obrigatório aceitar.")
        .required("É obrigatório aceitar."),
    receiveMessages: yup
        .bool()
        .required(),
}).required();

export type LegalPersonFormProps = yup.InferType<typeof schema>;
