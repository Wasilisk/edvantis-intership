import React, {useState} from 'react';
import {useAppDispatch, useForm} from "../../../hooks";
import {OrderService} from "../../../services";
import {toast} from "react-toastify";
import {OrderType} from "../../../models";
import {FeedbackFormStyles} from "../FeedbackForm/styles";
import FormField from "../../common/FormField";
import Input from "../../common/Input";
import CustomPhoneInput from "../../common/CustomPhoneInput";

import Textarea from "../../common/Textarea";
import Button from "../../common/Button";
import {CartFormValidation} from "./validation";
import {CartFormProps} from "./types";
import {resetBasket} from "../../../store/slices/Basket";

const CartForm = ({products, onClose}: CartFormProps) => {
    const dispatch= useAppDispatch();
    const [isDataUploading, setIsDataUploading] = useState<boolean>(false)

    const submitHandle = () => {
        setIsDataUploading(true);
        OrderService.sendOrder({...data, products})
            .then(() => {
                onClose()
                dispatch(resetBasket());
                toast.success('Your order has been accepted', {
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
    } = useForm<Omit<OrderType, "products">>({
        onSubmit: submitHandle,
        initialValues: {
            firstname: '',
            surname: '',
            email: '',
            phone_number: '',
            comment: ''
        },
        validations: CartFormValidation
    });

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
            <FormField label="Comment" errors={errors.comment}>
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

export default CartForm;