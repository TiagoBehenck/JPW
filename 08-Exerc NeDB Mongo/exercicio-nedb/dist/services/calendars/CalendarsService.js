"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const ts_httpexceptions_1 = require("ts-httpexceptions");
const ts_log_debug_1 = require("ts-log-debug");
const MemoryStorage_1 = require("../storage/MemoryStorage");
let CalendarsService = class CalendarsService {
    constructor(memoryStorage) {
        this.memoryStorage = memoryStorage;
        this.memoryStorage.set("calendars", require("../../../resources/calendars.json"));
    }
    $onInit() {
        ts_log_debug_1.$log.info("===useToken", this.useToken);
    }
    /**
     * Find a calendar by his ID.
     * @param id
     * @returns {undefined|Calendar}
     */
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const calendars = yield this.query();
            return calendars.find(calendar => calendar.id === id);
        });
    }
    /**
     * Create a new Calendar
     * @param name
     * @returns {{id: any, name: string}}
     */
    create(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const calendar = { id: require("node-uuid").v4(), name: name };
            const calendars = this.memoryStorage.get("calendars");
            calendars.push(calendar);
            this.memoryStorage.set("calendars", calendars);
            return calendar;
        });
    }
    /**
     *
     * @returns {Calendar[]}
     */
    query() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.memoryStorage.get("calendars");
        });
    }
    /**
     *
     * @param calendar
     * @returns {Calendar}
     */
    update(calendar) {
        return __awaiter(this, void 0, void 0, function* () {
            const calendars = yield this.query();
            const index = calendars.findIndex((value) => value.id === calendar.id);
            calendars[index] = calendar;
            this.memoryStorage.set("calendars", calendars);
            return calendar;
        });
    }
    /**
     *
     * @param id
     * @returns {Promise<Calendar>}
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const calendar = yield this.find(id);
            if (!calendar) {
                throw new ts_httpexceptions_1.NotFound("Calendar not found");
            }
            const calendars = yield this.query();
            this.memoryStorage.set("calendars", calendars.filter(calendar => calendar.id === id));
            return calendar;
        });
    }
};
__decorate([
    common_1.Constant("calendar.token"),
    __metadata("design:type", Boolean)
], CalendarsService.prototype, "useToken", void 0);
CalendarsService = __decorate([
    common_1.Service(),
    __metadata("design:paramtypes", [MemoryStorage_1.MemoryStorage])
], CalendarsService);
exports.CalendarsService = CalendarsService;
//# sourceMappingURL=CalendarsService.js.map