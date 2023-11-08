import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
    id: string;
    todo: string;
    deadline: Date | null;
    completedDate: Date | null;
    createdDate: Date;
    isDeleted: boolean;
}

const schema = new Schema<ITodo>(
    {
        todo: {
            type: String,
            required: true,
        },
        deadline: {
            type: Date,
            default: null,
        },
        completedDate: {
            type: Date,
            default: null,
        },
        createdDate: {
            type: Date,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        toJSON: {
            virtuals: true,
            transform: function (_, ret) {
                ret.id = ret._id;
                delete ret._id;
            },
        },
    }
);

export default mongoose.model<ITodo>("Todo", schema);
