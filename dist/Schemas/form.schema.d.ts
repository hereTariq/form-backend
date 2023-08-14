import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';
export type formDocument = HydratedDocument<Form>;
export declare class Form {
    title: string;
    description: string;
    formFields: [];
    userId: User;
}
export declare const formSchema: mongoose.Schema<Form, mongoose.Model<Form, any, any, any, mongoose.Document<unknown, any, Form> & Omit<Form & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Form, mongoose.Document<unknown, {}, mongoose.FlatRecord<Form>> & Omit<mongoose.FlatRecord<Form> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
