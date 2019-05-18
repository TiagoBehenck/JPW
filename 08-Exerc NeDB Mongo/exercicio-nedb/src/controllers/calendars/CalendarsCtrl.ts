import { Authenticated, BodyParams, Controller, Delete, Get, PathParams, Post, Put, Required, Status } from "@tsed/common";
import {NotFound} from "ts-httpexceptions";
import {Calendar} from "../../interfaces/Calendar";
import {CalendarsService} from "../../services/calendars/CalendarsService";
import {EventsCtrl} from "../events/EventsCtrl";

@Controller("/calendars", EventsCtrl)
export class CalendarsCtrl {

  constructor(private calendarsService: CalendarsService) {

  }

  @Get("/:id")
  async get(@Required() @PathParams("id") id: string): Promise<Calendar> {

    const calendar = await this.calendarsService.find(id);

    if (calendar) {
      return calendar;
    }

    throw new NotFound("Calendar not found");
  }

  @Put("/")
  save(@BodyParams("name") name: string) {
    return this.calendarsService.create(name);
  }

  /**
   *
   * @param id
   * @param name
   * @returns {Promise<Calendar>}
   */
  @Post("/:id")
  async update(@PathParams("id") @Required() id: string,
               @BodyParams("name") @Required() name: string): Promise<Calendar> {
    return this.calendarsService.update({id, name});
  }

  /**
   *
   * @param id
   * @returns {{id: string, name: string}}
   */
  @Delete("/")
  @Authenticated()
  @Status(204)
  async remove(@BodyParams("id") @Required() id: string): Promise<void> {
    this.calendarsService.remove(id);
  }

  @Get("/")
  @Authenticated()
  async getAllCalendars(): Promise<Calendar[]> {
    return this.calendarsService.query();
  }
}
