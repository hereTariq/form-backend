/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form } from '../Schemas/form.schema';
import { Model } from 'mongoose';
export declare class FormService {
    private formModel;
    constructor(formModel: Model<Form>);
    create(createFormDto: CreateFormDto): Promise<import("mongoose").Document<unknown, {}, Form> & Omit<Form & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(req: any): Promise<(import("mongoose").Document<unknown, {}, Form> & Omit<Form & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Form> & Omit<Form & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(id: string, updateFormDto: UpdateFormDto): Promise<import("mongoose").Document<unknown, {}, Form> & Omit<Form & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Form> & Omit<Form & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
