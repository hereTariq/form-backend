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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const user_schema_1 = require("../Schemas/user.schema");
const auth_guard_1 = require("../auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(createUserDto, response) {
        const user = await this.userService.create(createUserDto);
        if (user == null) {
            throw new common_1.HttpException('Email already exist', common_1.HttpStatus.BAD_REQUEST);
        }
        return response.status(common_1.HttpStatus.CREATED).json({ status: true, user });
    }
    async findAll(response) {
        const users = await this.userService.findAll();
        if (!users || users.length === 0) {
            throw new common_1.HttpException('No users found', common_1.HttpStatus.NOT_FOUND);
        }
        return response.status(common_1.HttpStatus.OK).json({
            status: true,
            message: 'users fetched successfylly',
            users,
        });
    }
    async findOne(id, response) {
        const user = await this.userService.findOne(id);
        if (!user) {
            throw new common_1.HttpException('user not found', common_1.HttpStatus.NOT_FOUND);
        }
        return response
            .status(common_1.HttpStatus.OK)
            .json({ status: true, message: 'User fetched successfylly', user });
    }
    async update(id, updateUserDto, response) {
        const user = await this.userService.update(id, updateUserDto);
        if (!user) {
            throw new common_1.HttpException('Failed to update user', common_1.HttpStatus.BAD_REQUEST);
        }
        return response
            .status(common_1.HttpStatus.OK)
            .json({ status: true, message: 'User updated successfylly', user });
    }
    async remove(id, response) {
        const user = await this.userService.remove(id);
        if (!user) {
            throw new common_1.HttpException('user not found', common_1.HttpStatus.NOT_FOUND);
        }
        return response
            .status(common_1.HttpStatus.OK)
            .json({ status: true, message: 'User deleted successfylly', user });
    }
};
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'User register succesfully!', type: user_schema_1.User }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'you cannot register.Try again!' }),
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.CreateUserDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ description: 'users list' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'users not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'user details' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'user not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'user details updated successfully!' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'user not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.UpdateUserDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'user details deleted successfully!' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'user not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map