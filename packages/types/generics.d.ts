export {}

declare global {
    /** Generic type where the value may be `T` or `undefined` */
    type Maybe<T> = T | undefined

    /** Generic type where the value may be `T` or `null` */
    type Nullable<T> = T | null

    /** Generic type where the properties of `T` and `U` are merged together */
    type Merged<T, U> = T & U

    type Constructor<T, U extends unknown[] = unknown[]> = {
        new (...args: U): T
    }

    type Property<T, U extends keyof T> = T[U]

    type Enum<T> = {
        [K in keyof T]: T[K]
    }
}
