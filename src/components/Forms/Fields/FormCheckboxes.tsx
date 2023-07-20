import { FieldErrors, UseFormRegister } from "react-hook-form";

import { LegalPersonFormProps } from "../Schemas/LegalPersonFormSchema";
import { PhysicalPersonFormProps } from "../Schemas/PhysicalPersonFormSchema";
import FormCheckbox from "./FormCheckbox";

type FormsProps = LegalPersonFormProps | PhysicalPersonFormProps;
type UseFormsRegisterProps = UseFormRegister<FormsProps>;

export type FormCheckboxesProps = {
    register:
        | UseFormRegister<LegalPersonFormProps>
        | UseFormRegister<PhysicalPersonFormProps>;
    errors: FieldErrors<FormsProps>;
};

const FormCheckboxes = ({ register, errors }: FormCheckboxesProps) => {
    return (
        <div>
            <FormCheckbox
                message="Li e concordo com os termos de uso e privacidade da Power Tech"
                id="termsOfUse"
                register={register as UseFormsRegisterProps}
                errors={errors}
            />

            <FormCheckbox
                message="Quero receber ofertas e novidades por e-mail e mensagens no App da Power Tech"
                id="receiveMessages"
                register={register as UseFormsRegisterProps}
                errors={errors}
            />
        </div>
    );
};

export default FormCheckboxes;
