export type OrderType = {
    products: Array<{id: number, count: number}>
    firstname: string,
    surname: string,
    email: string,
    phone_number: string,
    comment: string
}