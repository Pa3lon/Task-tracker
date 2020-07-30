const Task = require("./model");
const { connect } = require("mongoose");

module.exports = (router) => {
  router.get("/tasks", (req, res) => {
    Task.find({}, (err, tasks) => {
      if (err) console.log(err);
      res.json(tasks);
    });
  });

  router.post("/tasks", (req, res) => {
    console.log(req.body);
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      dateTime: req.body.dateTime,
      completed: false,
      icon: "",
      repeat: false,
      dayInterval: req.body.interval,
    });
    task.save();
    res.json(task);
  });
};
