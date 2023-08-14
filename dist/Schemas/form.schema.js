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
exports.formSchema = exports.Form = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./user.schema");
const swagger_1 = require("@nestjs/swagger");
let Form = class Form {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'this is form title', type: String }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Form.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)({ description: 'this is form title', type: String }),
    __metadata("design:type", String)
], Form.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)({
        type: 'array',
        items: {
            type: 'object',
            properties: {},
        },
    }),
    __metadata("design:type", Array)
], Form.prototype, "formFields", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }),
    (0, swagger_1.ApiProperty)({ description: 'this is userId', type: () => user_schema_1.User }),
    __metadata("design:type", user_schema_1.User)
], Form.prototype, "userId", void 0);
Form = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Form);
exports.Form = Form;
exports.formSchema = mongoose_1.SchemaFactory.createForClass(Form);
//# sourceMappingURL=form.schema.js.map