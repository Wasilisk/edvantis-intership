export type TabProps = {
    label: number | string,
    value: number | string,
    isActive: boolean
    onClick: () => void
}

export type TabStylesProps = {
    isActive: boolean
}