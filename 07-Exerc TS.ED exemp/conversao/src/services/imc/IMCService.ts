import {Service} from "@tsed/common";

const axios = require("axios");

@Service()
export class IMCService {

    constructor() { }

    /** Retorna calcula do IMC **/
    public static async get(peso: number, altura: number): Promise<any> {
        return (peso * (altura * altura));
    }
}