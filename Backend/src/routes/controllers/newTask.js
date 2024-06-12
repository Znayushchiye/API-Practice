import Task from "../../models/task.model.js";
import getAll from "./getAll.js";

const newTask = async (req, res) => {
    try {
        const task = req.body;
        if (!task) {
            console.log('404');
            return res.status(404).json({ 'Error': 'Request body empty' });
        }
        const newtask = new Task(task);
        await newtask.create();
        getAll();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ 'Error': 'Internal Server Error' });
    }
};

export default newTask;