declare function arrayToDict<T extends {
    id: string;
}>(array: T[]): {
    [k: string]: T;
};
declare const myDict: {
    [k: string]: {
        id: string;
        value: string;
        lisa: string;
    } | {
        id: string;
        value: string;
        lisa?: undefined;
    };
};
