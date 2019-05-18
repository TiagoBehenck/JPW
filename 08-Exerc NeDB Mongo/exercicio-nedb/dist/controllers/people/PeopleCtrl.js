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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const PeopleService_1 = require("../../services/people/PeopleService");
let PeopleCtrl = class PeopleCtrl {
    constructor(peopleService) {
        this.peopleService = peopleService;
    }
    save(person) {
        this.peopleService.create(person);
    }
    getAllPeople() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.peopleService.query();
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const people = yield this.peopleService.find(id);
            if (people) {
                return people;
            }
            throw new ts_httpexceptions_1.NotFound("Person not found");
        });
    }
    /**
     *
     * @param id
     * @param name
     * @returns {Promise<Calendar>}
     */
    update(id, person) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.peopleService.update(id, person);
        });
    }
    /**
     *
     * @param id
     * @returns {{id: string, name: string}}
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.peopleService.remove(id);
        });
    }
};
__decorate([
    common_1.Post("/"),
    __param(0, common_1.BodyParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PeopleCtrl.prototype, "save", null);
__decorate([
    common_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PeopleCtrl.prototype, "getAllPeople", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Required()), __param(0, common_1.PathParams("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PeopleCtrl.prototype, "get", null);
__decorate([
    common_1.Put("/:id"),
    __param(0, common_1.PathParams("id")), __param(0, common_1.Required()),
    __param(1, common_1.BodyParams()), __param(1, common_1.Required()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PeopleCtrl.prototype, "update", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.BodyParams("id")), __param(0, common_1.Required()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PeopleCtrl.prototype, "remove", null);
PeopleCtrl = __decorate([
    common_1.Controller("/people"),
    __metadata("design:paramtypes", [PeopleService_1.PeopleService])
], PeopleCtrl);
exports.PeopleCtrl = PeopleCtrl;
//# sourceMappingURL=PeopleCtrl.js.map