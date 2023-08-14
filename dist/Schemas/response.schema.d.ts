import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Form } from './form.schema';
export type ResponseFormDocument = mongoose.HydratedDocument<ResponseForm>;
export declare class ResponseForm {
    answers: [];
    formId: Form;
    userId: User;
}
export declare const ResponseFormSchema: mongoose.Schema<ResponseForm, mongoose.Model<ResponseForm, any, any, any, mongoose.Document<unknown, any, ResponseForm> & Omit<ResponseForm & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ResponseForm, mongoose.Document<unknown, {}, mongoose.FlatRecord<ResponseForm>> & Omit<mongoose.FlatRecord<ResponseForm> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
