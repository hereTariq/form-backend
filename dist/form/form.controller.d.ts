import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
export declare class FormController {
    private readonly formService;
    constructor(formService: FormService);
    create(createFormDto: CreateFormDto, response: any): Promise<any>;
    findAll(response: any, req: any): Promise<any>;
    findOne(id: string, response: any): Promise<any>;
    update(id: string, updateFormDto: UpdateFormDto, response: any): Promise<any>;
    remove(id: string, response: any): Promise<any>;
}
