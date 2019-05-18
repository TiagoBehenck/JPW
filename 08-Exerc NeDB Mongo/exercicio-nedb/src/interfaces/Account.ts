import { Pessoa } from "./Pessoa";
import { AccountType } from "./AccountType";

export interface Account {
    description: string,
    person: Pessoa,
    type: AccountType,
    value: number
}