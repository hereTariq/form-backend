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
exports.ResponseFormController = void 0;
const common_1 = require("@nestjs/common");
const response_form_service_1 = require("./response-form.service");
const create_response_form_dto_1 = require("./dto/create-response-form.dto");
const update_response_form_dto_1 = require("./dto/update-response-form.dto");
const express_1 = require("express");
const auth_guard_1 = require("../auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const response_schema_1 = require("../Schemas/response.schema");
let ResponseFormController = class ResponseFormController {
    constructor(responseFormService) {
        this.responseFormService = responseFormService;
    }
    async create(createResponseFormDto, response) {
        const responseForm = await this.responseFormService.create(createResponseFormDto);
        if (!responseForm) {
            throw new common_1.HttpException('Failed to create response form. Try again!', common_1.HttpStatus.BAD_REQUEST);
        }
        response.status(common_1.HttpStatus.CREATED).json({
            status: true,
            message: 'response saved successfully',
            responseForm,
        });
    }
    async findAll(response, req) {
        const responseForms = await this.responseFormService.findAll(req);
        if (!responseForms || responseForms.length === 0) {
            throw new common_1.HttpException('No response found', common_1.HttpStatus.NOT_FOUND);
        }
        return response.status(common_1.HttpStatus.OK).json({
            status: true,
            message: 'responses fetched successfylly',
            responseForms,
        });
    }
    async findOne(id) {
        const responseForm = await this.responseFormService.findOne(id);
        if (!responseForm) {
            throw new common_1.HttpException('response not found', common_1.HttpStatus.NOT_FOUND);
        }
        return express_1.response.status(common_1.HttpStatus.OK).json({
            status: true,
            message: 'response  fetched successfylly',
            responseForm,
        });
    }
    async update(id, updateResponseFormDto) {
        const responseForm = await this.responseFormService.update(id, updateResponseFormDto);
        if (!responseForm) {
            throw new common_1.HttpException('response not found', common_1.HttpStatus.NOT_FOUND);
        }
        return express_1.response.status(common_1.HttpStatus.OK).json({
            status: true,
            message: 'response updated successfylly',
            responseForm,
        });
    }
    async remove(id) {
        const responseForm = await this.responseFormService.remove(id);
        if (!responseForm) {
            throw new common_1.HttpException('response not found', common_1.HttpStatus.NOT_FOUND);
        }
        return express_1.response.status(common_1.HttpStatus.OK).json({
            status: true,
            message: 'response deleted successfylly',
            responseForm,
        });
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'response created succesfully!',
        type: response_schema_1.ResponseForm,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'you cannot create.Try again!' }),
    (0, swagger_1.ApiBody)({ type: create_response_form_dto_1.CreateResponseFormDto }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_response_form_dto_1.CreateResponseFormDto, Object]),
    __metadata("design:returntype", Promise)
], ResponseFormController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'No response found' }),
    (0, swagger_1.ApiOkResponse)({ description: 'responses fetched successfully!' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResponseFormController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'No response found' }),
    (0, swagger_1.ApiOkResponse)({ description: 'response fetched successfully!' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResponseFormController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'No response found' }),
    (0, swagger_1.ApiOkResponse)({ description: 'response updated successfully!' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_response_form_dto_1.UpdateResponseFormDto]),
    __metadata("design:returntype", Promise)
], ResponseFormController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'No response found' }),
    (0, swagger_1.ApiOkResponse)({ description: 'response deleted successfully!' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResponseFormController.prototype, "remove", null);
ResponseFormController = __decorate([
    (0, swagger_1.ApiTags)('Response'),
    (0, common_1.Controller)('response-form'),
    __metadata("design:paramtypes", [response_form_service_1.ResponseFormService])
], ResponseFormController);
exports.ResponseFormController = ResponseFormController;
//# sourceMappingURL=response-form.controller.js.map