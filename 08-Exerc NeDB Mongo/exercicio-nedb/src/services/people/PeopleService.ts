import { Service } from "@tsed/common";
import { Pessoa } from "../../interfaces/Pessoa";

@Service()
export class PeopleService {

    constructor() {
    }

    async find(id: string): Promise<Pessoa> {
        return undefined;
    }

    async create(Pessoa: Pessoa) {
        return undefined;
    }

    async query(): Promise<Pessoa[]> {
        return undefined;
    }

    async update(id: string, Pessoa: Pessoa): Promise<Pessoa> {
        return undefined;
    }

    async remove(id: string): Promise<Pessoa> {
        return null;
    }
}