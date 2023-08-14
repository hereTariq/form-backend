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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const form_schema_1 = require("../Schemas/form.schema");
const mongoose_2 = require("mongoose");
let FormService = class FormService {
    constructor(formModel) {
        this.formModel = formModel;
    }
    async create(createFormDto) {
        const form = await this.formModel.create(createFormDto);
        return form;
    }
    async findAll(req) {
        const forms = await this.formModel.find({ userId: req.user.sub });
        if (forms.length == 0) {
            return null;
        }
        return forms;
    }
    async findOne(id) {
        const form = await this.formModel.findById(id);
        if (!form) {
            return null;
        }
        return form;
    }
    async update(id, updateFormDto) {
        const form = await this.formModel.findByIdAndUpdate(id, updateFormDto, {
            new: true,
        });
        if (!form) {
            return null;
        }
        return form;
    }
    async remove(id) {
        const form = await this.formModel.findByIdAndDelete(id);
        if (!form) {
            return null;
        }
        return form;
    }
};
FormService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(form_schema_1.Form.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FormService);
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map