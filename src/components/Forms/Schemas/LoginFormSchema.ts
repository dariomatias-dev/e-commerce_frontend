import * as yup from "yup";

export const schema = yup.object({
    email: yup
        .string()
        .email()
        .required("O email é obrigatório."),
    password: yup
        .string()
        .min(6, "A senha precisa ter 6 ou mais caracteres.")
        .max(20)
        .required("A senha é obrigatória."),
});

export type LoginFormProps = yup.InferType<typeof schema>;
