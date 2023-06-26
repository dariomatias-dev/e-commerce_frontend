import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";

import { FormLegalPersonProps } from "../Schemas/FormLegalPersonSchema";
import { FormPhysicalPersonProps } from "../Schemas/FormPhysicalPersonSchema";

import formatCnpj from "@/utils/formatCnpj";
import formatCpf from "@/utils/formatCpf";
import formatPhoneNumber from "@/utils/formatPhoneNumber";
import formatRg from "@/utils/formatRg";
import formatStateRegistration from "@/utils/formatStateRegistration";
import formatDateOfBirth from "@/utils/formattedDateOfBirth";
import styles from "@/utils/styles";

type Props = {
    inputName: string;
    inputType?: string;
    id: string;
    placeholder: string
    maxLength?: number;
    control: Control<FormLegalPersonProps> | Control<FormPhysicalPersonProps>;
    errors: FieldErrors<FormLegalPersonProps | FormPhysicalPersonProps>;
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
    errors
}: Props) => {
    const [modifiedValue, setModifiedValue] = useState('');

    const onChange = ({ name, value }: OnChangeProps) => {
        let newValue = "";

        if (name === "dateOfBirth")
            newValue = formatDateOfBirth(value);
        else if (name === "phoneNumber")
            newValue = formatPhoneNumber(value);
        else if (name === "cpf")
            newValue = formatCpf(value);
        else if (name === "rg")
            newValue = formatRg(value);
        else if (name === "cnpj")
            newValue = formatCnpj(value);
        else if (name === "stateRegistration")
            newValue = formatStateRegistration(value);

        if (newValue)
            setModifiedValue(newValue);
    };

    return (
        <div className="w-full">
            <div className="relative">
                <Controller
                    name={id as keyof FormLegalPersonProps & keyof FormPhysicalPersonProps}
                    control={control as Control<(FormLegalPersonProps | FormPhysicalPersonProps)>}
                    render={({ field }) => (
                        <input
                            type={inputType}
                            id={id}
                            {...field}
                            placeholder={placeholder}
                            maxLength={maxLength}
                            value={modifiedValue ? modifiedValue : field.value as string}
                            onChange={e => {
                                const value = e.target.value;
                                field.onChange(value);
                                onChange({ name: field.name, value });
                            }}
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
            </div>

            <p className="text-red-600 text-xs">
                {errors[id as keyof (FormLegalPersonProps | FormPhysicalPersonProps)]?.message}
            </p>
        </div>
    );
};


export default FormInput;
