export * from './types/api.schema';
export * from './types/file';
export * from "./types/auth"

export type Unpacked<T> = T extends Array<infer U> ? U : T;
