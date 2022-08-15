export type CartFormProps = {
    products: Array<{id: number, count: number}>,
    onClose: () => void;
}