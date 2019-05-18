import {Controller, Get, PathParams} from "@tsed/common";

interface Calendar{
    id: string;
    name: string;
}

@Controller("/calendars")
export class CalendarCtrl {

    @Get("/:id")
    public get(
        @PathParams("id") id: string
    ): Promise<Calendar> {

        return new Promise<Calendar>((resolve: Function, reject: Function) => {
            resolve({
                id,
                name: "test"
            });
        });

    }
    // or
    @Get("/:id")
    async get(
        @PathParams("id") id: string

    ): Promise<Calendar> {

        return {
            id,
            name: "test"
        };
    }
}