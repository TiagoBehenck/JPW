import {Service} from "@tsed/common";

const axios = require("axios");

@Service()
export class CurrencyService {

    private states: Map<string, string> = new Map<string, string>();

    constructor() {
    }

    public static async get(moedaOrigem: string, moedaDestino: string, valor: number): Promise<any> {
        return await axios.get("https://free.currencyconverterapi.com/api/v6/convert?q=" + moedaOrigem + "_" + moedaDestino + "&compact=ultra&apiKey=" + "f6b4e86d590b809abab7");
    }
}
