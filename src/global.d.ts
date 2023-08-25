type RequireOnly<T, P extends keyof T> = Partial<T> & Pick<T, P>;
