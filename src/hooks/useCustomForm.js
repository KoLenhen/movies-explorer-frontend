import { useCallback, useState } from 'react';


export function useCustomForm() {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
    }
    return [values, handleChange, setValues];
}

export function useCustomFormValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState({});

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest('form').checkValidity());
        // console.log(isValid);
    }

    const resetForm = useCallback((
        newValues = {}, newErrors = {}, newIsValid = false
    ) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);

    }, [setValues, setErrors, setIsValid]);

    return { values, handleChange, errors, isValid, resetForm };
}