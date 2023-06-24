import * as yup from "yup";

const schema = yup.object({
    firstName: yup
        .string()
        .min(3, "O nome é obrigatório e precisa ter 3 ou mais caracteres.")
        .required(),
    lastName: yup
        .string()
        .min(3, "O sobrenome é obrigatório e precisa ter 3 ou mais caracteres.")
        .max(20)
        .required(),
    dateOfBirth: yup
        .string()
        .min(10, "A data de nascimento é obrigatória.")
        .max(10)
        .required(),
    phoneNumber: yup
        .string()
        .min(17, "O número de telefone é obrigatório.")
        .max(17)
        .required(),
    cpf: yup
        .string()
        .min(14, "O CPF é obrigatório.")
        .max(14)
        .required(),
    rg: yup
        .string()
        .min(8, "O RG é obrigatório.")
        .max(8)
        .required(),
    email: yup
        .string()
        .email()
        .required("O email é obrigatório."),
    password: yup
        .string()
        .min(6, "A senha é obrigatória e precisa ter 6 ou mais caracteres.")
        .max(20)
        .required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "A confirmação da senha precisa ser igual a senha")
        .min(6, "A confirmação da senha é obrigatória e precisa ter 6 ou mais caracteres.")
        .max(20)
        .required(),
    termsOfUse: yup
        .bool()
        .oneOf([true], "É obrigatório aceitar.")
        .required(),
    receiveMessages: yup
        .bool()
        .required(),
}).required();

type FormProps = yup.InferType<typeof schema>;

export { schema };
export type { FormProps };
