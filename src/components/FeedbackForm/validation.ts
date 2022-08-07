import {Validation} from "../../hooks";
import {FeedbackType} from "../../models";

export const FeedbackFormValidation: Partial<Record<keyof FeedbackType, Validation>> = {
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
    department: {
        required: {
            value: true,
            message: "Choose one of our departments"
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
    rating: {
        required: {
            value: true,
            message: "You forgot to rate our services"
        }
    },
    comment: {
        required: {
            value: true,
            message: "Your comment is required"
        },
        custom: {
            isValid: (text: string) => {
                return text.length >= 100 && text.length <= 150
            },
            message: "The minimum number of characters is 100, maximum - 150"
        }
    }
}