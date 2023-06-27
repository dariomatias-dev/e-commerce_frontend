import { FieldErrors, UseFormRegister } from "react-hook-form";

import { FormProps } from "../Schemas/PhysicalPersonFormSchema";

interface FormCheckboxProps {
    message: string;
    id: string;
    register: UseFormRegister<FormProps>;
    errors: FieldErrors<FormProps>;
};

const FormCheckbox = ({ message, id, register, errors }: FormCheckboxProps) => {
    return (
        <>
            <label className="flex gap-2 text-gray-700">
                <input
                    type="checkbox"
                    {...register(id as keyof FormProps)}
                />
                {message}
            </label>

            {
                id === "termsOfUse" && (
                    <p className="text-red-600 text-xs">
                        {errors.termsOfUse?.message}
                    </p>
                )
            }
        </>
    );
};

export default FormCheckbox;
