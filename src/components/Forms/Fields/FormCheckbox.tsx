import { FieldErrors, UseFormRegister } from "react-hook-form";

import { LegalPersonFormProps } from "../Schemas/LegalPersonFormSchema";
import { PhysicalPersonFormProps } from "../Schemas/PhysicalPersonFormSchema";

type FormsProps = LegalPersonFormProps | PhysicalPersonFormProps;

type FormCheckboxProps = {
    message: string;
    id: string;
    register: UseFormRegister<FormsProps>;
    errors: FieldErrors<FormsProps>;
};

const FormCheckbox = ({ message, id, register, errors }: FormCheckboxProps) => {
    return (
        <>
            <label className="flex gap-2 text-gray-700">
                <input type="checkbox" {...register(id as keyof FormsProps)} />
                {message}
            </label>

            {id === "termsOfUse" && (
                <p className="text-red-600 text-xs">
                    {errors.termsOfUse?.message}
                </p>
            )}
        </>
    );
};

export default FormCheckbox;
