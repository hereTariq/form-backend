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
exports.FormController = void 0;
const common_1 = require("@nestjs/common");
const form_service_1 = require("./form.service");
const create_form_dto_1 = require("./dto/create-form.dto");
const update_form_dto_1 = require("./dto/update-form.dto");
const swagger_1 = require("@nestjs/swagger");
const form_schema_1 = require("../Schemas/form.schema");
const auth_guard_1 = require("../auth/auth.guard");
let FormController = class FormController {
    constructor(formService) {
        this.formService = formService;
    }
    async create(createFormDto, response) {
        const form = await this.formService.create(createFormDto);
        if (!form) {
            throw new common_1.HttpException('Failed to create form. Try again!', common_1.HttpStatus.BAD_REQUEST);
        }
        return response
            .status(common_1.HttpStatus.CREATED)
            .json({ message: 'form created successfully', status: true, form });
    }
    async findAll(response, req) {
        const forms = await this.formService.findAll(req);
        if (!forms || forms.length === 0) {
            throw new common_1.HttpException('No forms found', common_1.HttpStatus.NOT_FOUND);
        }
        return response.status(common_1.HttpStatus.OK).json({
            status: true,
            message: 'forms fetched successfylly',
            forms,
        });
    }
    async findOne(id, response) {
        const form = await this.formService.findOne(id);
        if (!form) {
            throw new common_1.HttpException('form not found', common_1.HttpStatus.NOT_FOUND);
        }
        return response
            .status(common_1.HttpStatus.OK)
            .json({ status: true, message: 'form fetched successfylly', form });
    }
    async update(id, updateFormDto, response) {
        const form = await this.formService.update(id, updateFormDto);
        if (!form) {
            throw new common_1.HttpException('form not found', common_1.HttpStatus.NOT_FOUND);
        }
        return response
            .status(common_1.HttpStatus.OK)
            .json({ status: true, message: 'form updated successfylly', form });
    }
    async remove(id, response) {
        const form = await this.formService.remove(id);
        if (!form) {
            throw new common_1.HttpException('form not found', common_1.HttpStatus.NOT_FOUND);
        }
        return response
            .status(common_1.HttpStatus.OK)
            .json({ status: true, message: 'form deleted successfylly', form });
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'form created succesfully!', type: form_schema_1.Form }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'you cannot create.Try again!' }),
    (0, swagger_1.ApiBody)({ type: create_form_dto_1.CreateFormDto }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_form_dto_1.CreateFormDto, Object]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'No forms found' }),
    (0, swagger_1.ApiOkResponse)({ description: 'forms fetched successfully' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'No forms found' }),
    (0, swagger_1.ApiOkResponse)({ description: 'form details fetched successfully!' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'No form found' }),
    (0, swagger_1.ApiOkResponse)({ description: 'form details updated successfully!' }),
    (0, swagger_1.ApiBody)({ type: update_form_dto_1.UpdateFormDto }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_form_dto_1.UpdateFormDto, Object]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'No form found' }),
    (0, swagger_1.ApiOkResponse)({ description: 'forms deleted successfully!' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "remove", null);
FormController = __decorate([
    (0, swagger_1.ApiTags)('Form'),
    (0, common_1.Controller)('form'),
    __metadata("design:paramtypes", [form_service_1.FormService])
], FormController);
exports.FormController = FormController;
//# sourceMappingURL=form.controller.js.map