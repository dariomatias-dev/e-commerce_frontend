import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";

import { LegalPersonFormProps } from "../Schemas/LegalPersonFormSchema";
import { PhysicalPersonFormProps } from "../Schemas/PhysicalPersonFormSchema";
import { LoginFormProps } from "../Schemas/LoginFormSchema";

import formatCnpj from "@/utils/formatCnpj";
import formatCpf from "@/utils/formatCpf";
import formatPhoneNumber from "@/utils/formatPhoneNumber";
import formatRg from "@/utils/formatRg";
import formatStateRegistration from "@/utils/formatStateRegistration";
import formatDateOfBirth from "@/utils/formattedDateOfBirth";
import styles from "@/utils/styles";

type FormsProps =
    | LegalPersonFormProps
    | PhysicalPersonFormProps
    | LoginFormProps;

type Props = {
    inputName: string;
    inputType?: string;
    id: string;
    placeholder: string;
    maxLength?: number;
    control:
        | Control<LegalPersonFormProps>
        | Control<PhysicalPersonFormProps>
        | Control<LoginFormProps>;
    errors: FieldErrors<FormsProps>;
};

type OnChangeProps = {
    name: string;
    value: string;
};

const FormInput = ({
    inputName,
    inputType = "text",
    id,
    placeholder,
    maxLength = 20,
    control,
    errors,
}: Props) => {
    const [modifiedValue, setModifiedValue] = useState("");

    const onChange = ({ name, value }: OnChangeProps) => {
        let newValue = "";

        switch (name) {
            case "dateOfBirth":
                newValue = formatDateOfBirth(value);
                break;
            case "phoneNumber":
                newValue = formatPhoneNumber(value);
                break;
            case "cpf":
                newValue = formatCpf(value);
                break;
            case "rg":
                newValue = formatRg(value);
                break;
            case "cnpj":
                newValue = formatCnpj(value);
                break;
            case "stateRegistration":
                newValue = formatStateRegistration(value);
                break;
        }

        if (newValue) setModifiedValue(newValue);
    };

    return (
        <div className="w-full">
            <div className="relative">
                <Controller
                    name={id as keyof FormsProps}
                    control={control as Control<FormsProps>}
                    render={({ field }) => (
                        <input
                            type={inputType}
                            id={id}
                            {...field}
                            placeholder={placeholder}
                            maxLength={maxLength}
                            value={
                                modifiedValue
                                    ? modifiedValue
                                    : (field.value as string)
                            }
                            onChange={(e) => {
                                const value = e.target.value;
                                field.onChange(value);
                                onChange({ name: field.name, value });
                            }}
                            className={styles.input}
                        />
                    )}
                />

                <label htmlFor={id} className={styles.label}>
                    {inputName}
                </label>
            </div>

            <p className="text-red-600 text-xs">
                {errors[id as keyof FormsProps]?.message}
            </p>
        </div>
    );
};

export default FormInput;
