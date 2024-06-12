import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Enter title'],
            max: 50
        },
        content: {
            type: String,
            default: "",
            max: 200,
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model('task', taskSchema);

export default Task;