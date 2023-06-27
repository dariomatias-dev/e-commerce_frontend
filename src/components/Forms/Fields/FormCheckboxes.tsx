import { FieldErrors, UseFormRegister } from "react-hook-form";

import { FormProps } from "../Schemas/PhysicalPersonFormSchema";
import FormCheckbox from "./FormCheckbox";

export type FormCheckboxesProps = {
    register: UseFormRegister<FormProps>;
    errors: FieldErrors<FormProps>;
};

const FormCheckboxes = ({ register, errors }: FormCheckboxesProps) => {
    return (
        <div>
            <FormCheckbox
                message="Li e concordo com os termos de uso e privacidade da Power Tech"
                id="termsOfUse"
                register={register}
                errors={errors}
            />

            <FormCheckbox
                message="Quero receber ofertas e novidades por e-mail e mensagens no App da Power Tech"
                id="receiveMessages"
                register={register}
                errors={errors}
            />
        </div>
    );
};

export default FormCheckboxes;