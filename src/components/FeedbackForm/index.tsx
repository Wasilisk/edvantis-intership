import React, {useEffect, useState} from 'react';
import {FeedbackFormStyles} from "./styles";
import Input from "../common/Input";
import FormField from "../common/FormField";
import StarRating from "../common/StarRating";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import {AppService, FeedbackService} from "../../services";
import {OptionType} from "../../models/common";
import Button from "../common/Button";
import CustomPhoneInput from "../common/CustomPhoneInput";
import {useForm} from "../../hooks";
import {FeedbackFormValidation} from "./validation";
import {toast} from "react-toastify";
import {FeedbackType} from "../../models";
import {addFeedback} from "../../store/slices/Feedbacks";
import {useAppDispatch} from "../../hooks";
import {FeedbackFormProps} from "./types";

const FeedbackForm = ({onClose}: FeedbackFormProps) => {
    const dispatch = useAppDispatch();
    const [isDataUploading, setIsDataUploading] = useState<boolean>(false)
    const [departments, setDepartments] = useState<Nullable<string[]>>(null)

    const submitHandle = () => {
        data.created_at = Date.now();
        setIsDataUploading(true);
        FeedbackService.postFeedback(data)
            .then((response) => {
                dispatch(addFeedback(response.data))
                onClose();
                toast.success('Your feedback has been sent successfully', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .finally(() => {
                setIsDataUploading(false)
                resetForm();
            })

    }

    const {
        setFieldValue,
        validateField,
        handleSubmit,
        handleChange,
        resetForm,
        data,
        errors,
    } = useForm<FeedbackType>({
        onSubmit: submitHandle,
        initialValues: {
            firstname: '',
            surname: '',
            email: '',
            phone_number: '',
            department: '',
            rating: 0,
            comment: ''
        },
        validations: FeedbackFormValidation
    });

    useEffect(() => {
        AppService.getDepartments()
            .then(res => setDepartments(res.data));
    }, [])

    const selectOptions: Nullable<OptionType[]> = departments && departments.map(department => ({
        label: department,
        value: department,
    }))

    return (
        <FeedbackFormStyles onSubmit={handleSubmit}>
            <FormField label="Firstname" errors={errors.firstname} isRequired>
                <Input
                    placeholder="Your firstname"
                    value={data.firstname}
                    onChange={handleChange('firstname')}
                    onBlur={() => validateField('firstname')}
                />
            </FormField>
            <FormField label="Surname" errors={errors.surname} isRequired>
                <Input
                    placeholder="Your surname"
                    value={data.surname}
                    onChange={handleChange('surname')}
                    onBlur={() => validateField('surname')}
                />
            </FormField>
            <FormField label="Email" errors={errors.email} isRequired>
                <Input
                    placeholder="Your email"
                    type="email"
                    value={data.email}
                    onChange={handleChange('email')}
                    onBlur={() => validateField('email')}
                />
            </FormField>
            <FormField label="Telephone number" errors={errors.phone_number}>
                <CustomPhoneInput
                    country={'ua'}
                    value={data.phone_number}
                    onChange={phone => setFieldValue('phone_number', phone)}
                    onBlur={() => validateField('phone_number')}
                />
            </FormField>
            <FormField label="Select our department" errors={errors.department} isRequired>
                <Select options={selectOptions as OptionType[]}
                        hasNoneValue
                        value={data.department}
                        onChange={handleChange('department')}
                        onBlur={() => validateField('department')}
                />
            </FormField>
            <FormField label="Rating" errors={errors.rating} isRequired>
                <StarRating
                    precision={0.5}
                    activeStar={data.rating}
                    onChange={event => setFieldValue('rating', event)}
                    onBlur={() => validateField('rating')}
                />
            </FormField>
            <FormField label="Comment" errors={errors.comment} isRequired>
                <Textarea
                    placeholder="Your comment"
                    value={data.comment}
                    onChange={handleChange('comment')}
                    onBlur={() => validateField('comment')}
                />
            </FormField>
            <Button
                variant="filled"
                size="medium"
                label="Send"
                type="submit"
                fullWidth
                disabled={isDataUploading}
            />
        </FeedbackFormStyles>
    );
};

export default FeedbackForm;