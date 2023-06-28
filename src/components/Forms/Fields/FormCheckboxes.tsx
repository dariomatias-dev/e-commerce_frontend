import { FieldErrors, UseFormRegister } from "react-hook-form";

import { LegalPersonFormSchema } from "../Schemas/LegalPersonFormSchema";
import { PhysicalPersonFormSchema } from "../Schemas/PhysicalPersonFormSchema";
import FormCheckbox from "./FormCheckbox";

type FormsProps = LegalPersonFormSchema | PhysicalPersonFormSchema;

export type FormCheckboxesProps = {
    register: UseFormRegister<FormsProps>;
    errors: FieldErrors<FormsProps>;
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
