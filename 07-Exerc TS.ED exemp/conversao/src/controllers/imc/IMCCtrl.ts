import {Controller, Get, PathParams, Required} from "@tsed/common";
import {NotFound} from "ts-httpexceptions";
import {EventsCtrl} from "../events/EventsCtrl";
import {IMCService} from "../../services/imc/IMCService";


@Controller("/imc", EventsCtrl)
export class IMCCtrl {

    constructor(private imcService: IMCService) {

    }

    @Get("/:peso/:altura")
    async get(
        @Required() @PathParams("peso") peso: number,
        @Required() @PathParams("altura") altura: number): Promise<any> {

        const imc = await IMCService.get(peso, altura);
        if (imc) {
            return imc;
        }
        throw new NotFound("Calendar not found");
    }
}
