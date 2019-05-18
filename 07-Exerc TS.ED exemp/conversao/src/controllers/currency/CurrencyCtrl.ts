import {Controller, Get, PathParams, QueryParams, Required, MergeParams} from "@tsed/common";
import {NotFound} from "ts-httpexceptions";
import {EventsCtrl} from "../events/EventsCtrl";
import {CurrencyService} from "../../services/currency/CurrencyService";


@Controller("/currency", EventsCtrl)
@MergeParams(true)
export class CurrencyCtrl {

    constructor(private currencyService: CurrencyService) {}

    @Get("/:mOrigem/:mDestino")
    async get(
        @Required() @PathParams("mOrigem") mOrigem: string,
        @Required() @PathParams("mDestino") mDestino: string,
        @Required() @QueryParams("valor") valor: number): Promise<any> {

        let resp;
        mOrigem = mOrigem.toUpperCase();
        mDestino = mDestino.toUpperCase();
        const valorConvertido = await CurrencyService.get(mOrigem.toUpperCase(), mDestino.toUpperCase(), Number(valor));
        resp = {
            mOrigem,
            mDestino,
            valor,
            valorConvertido: valorConvertido.data[`${mOrigem}_${mDestino}`] * valor
        };
        console.log(resp);

        return resp;
        throw new NotFound("Conversao nao realizada");
    }
}