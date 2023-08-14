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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseFormSchema = exports.ResponseForm = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const user_schema_1 = require("./user.schema");
const form_schema_1 = require("./form.schema");
const swagger_1 = require("@nestjs/swagger");
let ResponseForm = class ResponseForm {
};
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)({ description: 'An array of answers', type: Array }),
    __metadata("design:type", Array)
], ResponseForm.prototype, "answers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'this is formId', type: () => form_schema_1.Form }),
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Form' }),
    __metadata("design:type", form_schema_1.Form)
], ResponseForm.prototype, "formId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'this is userId', type: () => user_schema_1.User }),
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], ResponseForm.prototype, "userId", void 0);
ResponseForm = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ResponseForm);
exports.ResponseForm = ResponseForm;
exports.ResponseFormSchema = mongoose_1.SchemaFactory.createForClass(ResponseForm);
//# sourceMappingURL=response.schema.js.map