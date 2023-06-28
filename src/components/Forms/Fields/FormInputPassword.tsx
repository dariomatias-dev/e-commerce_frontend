import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";

import { LegalPersonFormProps } from "../Schemas/LegalPersonFormSchema";
import { PhysicalPersonFormProps } from "../Schemas/PhysicalPersonFormSchema";
import { LoginFormProps } from "../Schemas/LoginFormSchema";

import ShowPasswordButton from "@/components/ShowPasswordButton";

import styles from "@/utils/styles";

type FormsProps = LegalPersonFormProps | PhysicalPersonFormProps | LoginFormProps;

type Props = {
    inputName: string;
    id: string;
    control: Control<LegalPersonFormProps> | Control<PhysicalPersonFormProps> | Control<LoginFormProps>;
    errors: FieldErrors<FormsProps>;
};

const FormInputPassword = ({
    inputName,
    id,
    control,
    errors
}: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full">
            <div className="relative">
                <Controller
                    name={id as keyof FormsProps}
                    control={control as Control<FormsProps>}
                    render={({ field }) => (
                        <input
                            type={showPassword ? "text" : "password"}
                            id={id}
                            {...field}
                            placeholder="••••••••"
                            className={styles.input}
                        />
                    )}
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
