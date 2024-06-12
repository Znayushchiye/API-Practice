import Task from "../../models/task.model.js";

const getAll = async (req, res) => {
    try {
        const tasks = await Task.find({});
        if (!tasks.length) {
            console.log('404');
            return res.status(404).json({ 'Error': 'No tasks found' });
        }
        return res.status(200).json(tasks);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ 'Error': 'Internal Server Error' });
    }
};

export default getAll;