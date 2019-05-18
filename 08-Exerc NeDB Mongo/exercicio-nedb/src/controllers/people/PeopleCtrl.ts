import { BodyParams, Controller, Delete, Get, PathParams, Post, Put, Required } from "@tsed/common";
import { NotFound } from "ts-httpexceptions";
import { PeopleService } from "../../services/people/PeopleService";
import { Pessoa } from "../../interfaces/Pessoa";

@Controller("/people")
export class PeopleCtrl {

    constructor(private peopleService: PeopleService) {
    }

    @Post("/")
    save(@BodyParams() Pessoa: Pessoa) {
        this.peopleService.create(Pessoa);
    }

    @Get("/")
    async getAllPeople(): Promise<Pessoa[]> {
        return this.peopleService.query();
    }

    @Get("/:id")
    async get(@Required() @PathParams("id") id: string): Promise<Pessoa> {
        const people = await this.peopleService.find(id);
        if (people) {
            return people;
        }
        throw new NotFound("Pessoa not found");
    }

    @Put("/:id")
    async update(@PathParams("id") @Required() id: string,
        @BodyParams() @Required() Pessoa: Pessoa): Promise<Pessoa> {
        return this.peopleService.update(id, Pessoa);
    }

    @Delete("/:id")
    async remove(@BodyParams("id") @Required() id: string): Promise<void> {
        this.peopleService.remove(id);
    }
}
