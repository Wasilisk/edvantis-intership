type Nullable<T> = T | null;
type NullableFields<T> = { [K in keyof T]: T[K] | null };