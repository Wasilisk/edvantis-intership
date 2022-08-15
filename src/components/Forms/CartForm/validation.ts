import {Validation} from "../../../hooks";
import {OrderType} from "../../../models";

export const CartFormValidation: Partial<Record<keyof Omit<OrderType, "products">, Validation>> = {
    firstname: {
        required: {
            value: true,
            message: "Firstname is required"
        },
        custom: {
            isValid: (firstname: string) => {
                return firstname.trim().length > 1
            },
            message: "The minimum number of characters is 2",
        }
    },
    surname: {
        required: {
            value: true,
            message: "Surname is required"
        },
        custom: {
            isValid: (surname: string) => {
                return surname.trim().length > 1
            },
            message: "The minimum number of characters is 2",
        }
    },
    email: {
        required: {
            value: true,
            message: "Email is required"
        }
    },
    phone_number: {
        custom: {
            isValid: (phone_number: string) => {
                return phone_number.length >= 9
            },
            message: "The minimum digits in phone number is 9"
        }
    },
    comment: {
        custom: {
            isValid: (text: string) => {
                return text.length <= 150
            },
            message: "The maximum number of characters is  150"
        }
    }
}