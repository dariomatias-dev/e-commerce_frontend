import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";

import { FormProps } from "./FormPhysicalPersonSchema";

import formatCpf from "@/utils/formatCpf";
import formatPhoneNumber from "@/utils/formatPhoneNumber";
import formatRg from "@/utils/formatRg";
import formatDateOfBirth from "@/utils/formattedDateOfBirth";
import styles from "@/utils/styles";

type Props = {
    inputName: string;
    inputType?: string;
    id: string;
    placeholder: string
    maxLength?: number;
    control: Control<FormProps>;
    errors: FieldErrors<FormProps>;
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

    const onChange = ({ name, value }: { name: string, value: string }) => {
        let newValue = "";

        if (name === "dateOfBirth")
            newValue = formatDateOfBirth(value);
        else if (name === "phoneNumber")
            newValue = formatPhoneNumber(value);
        else if (name === "cpf")
            newValue = formatCpf(value);
        else if (name === "rg")
            newValue = formatRg(value);

        if (newValue.length)
            setModifiedValue(newValue);
    };

    return (
        <div className="w-full">
            <div className="relative">
                <Controller
                    name={id as keyof FormProps}
                    control={control}
                    render={({ field }) => (
                        <input
                            type={inputType}
                            id={id}
                            placeholder={placeholder}
                            maxLength={maxLength}
                            value={modifiedValue !== "" ? modifiedValue : field.value as string}
                            onChange={(e) => {
                                field.onChange(e.target.value);
                                onChange({ name: field.name, value: e.target.value });
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
                {errors[id as keyof FormProps]?.message}
            </p>
        </div>
    );
};


export default FormInput;
