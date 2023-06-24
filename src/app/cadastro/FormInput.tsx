import { FieldErrors, UseFormRegister } from "react-hook-form";

import { FormProps } from "./FormPhysicalPersonSchema";

import styles from "@/utils/styles";

type Props = {
    inputName: string;
    inputType?: string;
    id: string;
    placeholder: string
    maxLength?: number;
    register: UseFormRegister<FormProps>;
    errors: FieldErrors<FormProps>;
};

const FormInput = ({
    inputName,
    inputType = "text",
    id,
    placeholder,
    maxLength = 20,
    register,
    errors
}: Props) => {
    return (
        <div className="w-full">
            <div className="relative">
                <input
                    type={inputType}
                    id={id}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    {...register(id as keyof FormProps)}
                    className={styles.input}
                />

                <label
                    htmlFor={id}
                    className={styles.label}
                >
                    {inputName}
                </label>
            </div>

            <p className="text-red-600 text-xs">
                {errors[id as keyof FormProps]?.message}
            </p>
        </div>
    );
};


export default FormInput;
