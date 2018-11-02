type FunctionArgType<T> = T extends (...args: Array<infer R>) => any ? R : any;

export { FunctionArgType };
