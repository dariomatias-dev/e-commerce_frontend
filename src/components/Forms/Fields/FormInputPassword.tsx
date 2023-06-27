import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { LegalPersonFormSchema } from "../Schemas/LegalPersonFormSchema";
import { PhysicalPersonFormSchema } from "../Schemas/PhysicalPersonFormSchema";
import { LoginFormProps } from "../Schemas/LoginFormSchema";

import ShowPasswordButton from "@/components/ShowPasswordButton";

import styles from "@/utils/styles";

type FormsProps = LegalPersonFormSchema | PhysicalPersonFormSchema | LoginFormProps;

type Props = {
    inputName: string;
    id: string;
    register: UseFormRegister<FormsProps>;
    errors: FieldErrors<FormsProps>;
};

const FormInputPassword = ({
    inputName,
    id,
    register,
    errors
}: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full">
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    id={id}
                    maxLength={20}
                    {...register(id as keyof FormsProps)}
                    placeholder="••••••••"
                    className={styles.input}
                />

                <label
                    htmlFor={id}
                    className={styles.label}
                >
                    {inputName}
                </label>

                <ShowPasswordButton
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />
            </div>

            <p className="text-red-600 text-xs">
                {errors[id as keyof FormsProps]?.message}
            </p>
        </div>
    )
};

export default FormInputPassword;
