/// <reference types="express" />
import { ResponseFormService } from './response-form.service';
import { CreateResponseFormDto } from './dto/create-response-form.dto';
import { UpdateResponseFormDto } from './dto/update-response-form.dto';
export declare class ResponseFormController {
    private readonly responseFormService;
    constructor(responseFormService: ResponseFormService);
    create(createResponseFormDto: CreateResponseFormDto, response: any): Promise<void>;
    findAll(response: any, req: any): Promise<any>;
    findOne(id: string): Promise<import("express").Response<any, Record<string, any>>>;
    update(id: string, updateResponseFormDto: UpdateResponseFormDto): Promise<import("express").Response<any, Record<string, any>>>;
    remove(id: string): Promise<import("express").Response<any, Record<string, any>>>;
}
