"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseFormModule = void 0;
const common_1 = require("@nestjs/common");
const response_form_service_1 = require("./response-form.service");
const response_form_controller_1 = require("./response-form.controller");
const mongoose_1 = require("@nestjs/mongoose");
const response_schema_1 = require("../Schemas/response.schema");
let ResponseFormModule = class ResponseFormModule {
};
ResponseFormModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: response_schema_1.ResponseForm.name, schema: response_schema_1.ResponseFormSchema },
            ]),
        ],
        controllers: [response_form_controller_1.ResponseFormController],
        providers: [response_form_service_1.ResponseFormService],
    })
], ResponseFormModule);
exports.ResponseFormModule = ResponseFormModule;
//# sourceMappingURL=response-form.module.js.map