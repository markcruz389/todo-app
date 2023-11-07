import mongoose, { Schema } from "mongoose";

export interface ITodo {
    id: string;
    todo: string;
    deadline: Date;
}

const schema = new Schema<ITodo>({
    todo: {
        type: String,
        required: true,
    },
    deadline: {
        date: Date,
    },
});

export default mongoose.model<ITodo>("Todo", schema);
