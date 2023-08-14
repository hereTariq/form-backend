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
exports.ResponseFormService = void 0;
const common_1 = require("@nestjs/common");
const response_schema_1 = require("../Schemas/response.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ResponseFormService = class ResponseFormService {
    constructor(responseFormModel) {
        this.responseFormModel = responseFormModel;
    }
    async create(createResponseFormDto) {
        const responseForm = await this.responseFormModel.create(createResponseFormDto);
        return responseForm;
    }
    async findAll(req) {
        const responseForm = await this.responseFormModel.find({
            userId: req.user.sub,
        });
        if (responseForm.length == 0) {
            return null;
        }
        return responseForm;
    }
    async findOne(id) {
        const responseForm = await this.responseFormModel.findById(id);
        if (!responseForm) {
            return null;
        }
        return responseForm;
    }
    async update(id, updateResponseFormDto) {
        const responseForm = await this.responseFormModel.findByIdAndUpdate(id, updateResponseFormDto, {
            new: true,
        });
        if (!responseForm) {
            return null;
        }
        return responseForm;
    }
    async remove(id) {
        const responseForm = await this.responseFormModel.findByIdAndDelete(id);
        if (!responseForm) {
            return null;
        }
        return responseForm;
    }
};
ResponseFormService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(response_schema_1.ResponseForm.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ResponseFormService);
exports.ResponseFormService = ResponseFormService;
//# sourceMappingURL=response-form.service.js.map