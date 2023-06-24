import { UseFormRegister } from "react-hook-form";

import { FormProps } from "./FormPhysicalPersonSchema";

type FormCheckboxesProps = {
    register: UseFormRegister<FormProps>;
};

const FormCheckboxes = ({ register }: FormCheckboxesProps) => {
    return (
        <div>
            <FormCheckbox
                message="Li e concordo com os termos de uso e privacidade da Power Tech"
                id="termsOfUse"
                register={register}
            />

            <FormCheckbox
                message="Quero receber ofertas e novidades por e-mail e mensagens no App da Power Tech"
                id="receiveMessages"
                register={register}
            />
        </div>
    );
};

interface FormCheckboxProps extends FormCheckboxesProps {
    message: string;
    id: string;
};

const FormCheckbox = ({ message, id, register }: FormCheckboxProps) => {
    return (
        <label className="flex gap-2 text-gray-700">
            <input
                type="checkbox"
                {...register(id as keyof FormProps)}
            />
            {message}
        </label>
    );
};

export default FormCheckboxes;
