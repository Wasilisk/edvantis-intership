import {ChangeEvent, FormEvent, useState} from "react";

export interface Validation {
    required?: {
        value: boolean;
        message: string;
    };
    pattern?: {
        value: string;
        message: string;
    };
    custom?: {
        isValid: (value: string) => boolean;
        message: string;
    };
}

type ErrorRecord<T> = Partial<Record<keyof T, string>>;

type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

export const useForm = <T extends Record<keyof T, any> = {}>(options?: {
    validations?: Validations<T>;
    initialValues?: Partial<T>;
    onSubmit?: () => void;
}) => {
    const [data, setData] = useState<T>((options?.initialValues || {}) as T);
    const [errors, setErrors] = useState<ErrorRecord<T>>({});

    const setFieldValue = ( key: keyof T, value: any) => {
        validateField(key, value);
        setData({
            ...data,
            [key]: value,
        });
    }

    const handleChange = <S extends unknown>(
        key: keyof T,
        sanitizeFn?: (value: string) => S
    ) => (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
        const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
        setFieldValue(key, value);
    };

    const validateField = (key: keyof T, value?: any) => {
        const validation = options?.validations && options.validations[key];
        let valid = true;
        let newError = '';
        if(validation) {
            const fieldValue = value ? value : data[key]

            const pattern = validation?.pattern;
            if (pattern?.value && !RegExp(pattern.value).test(fieldValue)) {
                valid = false;
                newError = pattern.message;
            }

            const custom = validation?.custom;
            if (custom?.isValid && !custom.isValid(fieldValue)) {
                valid = false;
                newError = custom.message;
            }

            if (validation?.required?.value && !fieldValue) {
                valid = false;
                newError = validation?.required?.message;
            }
        }

        if (!valid) {
            setErrors({...errors, [key]: newError});
            return;
        } else {
            setErrors({...errors, [key]: null});
            return;
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validations = options?.validations;
        if (validations) {
            let valid = true;
            const newErrors: ErrorRecord<T> = {};
            for (const key in validations) {
                const value = data[key];
                const validation = validations[key];

                const pattern = validation?.pattern;
                if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = pattern.message;
                }

                const custom = validation?.custom;
                if (custom?.isValid && !custom.isValid(value)) {
                    valid = false;
                    newErrors[key] = custom.message;
                }

                if (validation?.required?.value && !value) {
                    valid = false;
                    newErrors[key] = validation?.required?.message;
                }
            }

            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }

        setErrors({});

        if (options?.onSubmit) {
            options.onSubmit();
        }
    };

    const resetForm = () => {
        setData(options?.initialValues as T)
    }

    return {
        data,
        setFieldValue,
        validateField,
        handleChange,
        handleSubmit,
        resetForm,
        errors,
    };
};