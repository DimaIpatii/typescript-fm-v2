interface IPerson {
    firstName?: string;
    middleName?: string;
    lastName?: string;
}
interface IContatcts extends IPerson {
    salutation?: string;
    email?: string;
    phones: {
        [phName: string]: {
            [k: string]: string;
        };
    };
    addresses: {
        [phName: string]: {
            [k: string]: string | number;
        };
    };
}
export declare class AddressBook {
    contacts: IPerson[];
    addContact(contact: IPerson): void;
    findContactByName(filter: IPerson): IPerson[];
}
export declare function formatDate(date: Date): string;
export declare function getVcardText(contact: IContatcts, date?: Date): string;
export {};
