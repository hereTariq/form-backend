import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../Schemas/user.schema';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto, response: any): Promise<User>;
    findAll(response: any): Promise<User[]>;
    findOne(id: string, response: any): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto, response: any): Promise<User>;
    remove(id: string, response: any): Promise<User>;
}
