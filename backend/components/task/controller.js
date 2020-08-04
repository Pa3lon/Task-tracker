const Task = require("./model");

module.exports = (router) => {
  router.get("/tasks", (req, res) => {
    if (req.query.completed === "false") {
      Task.find({ completed: false }, (err, tasks) => {
        if (err) console.log(err);
        return res.json(tasks);
      });
    } else {
      Task.find({}, (err, tasks) => {
        if (err) console.log(err);
        res.json(tasks);
      }).sort({ dateTime: "asc" });
    }
  });

  router.post("/tasks", (req, res) => {
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

  router.delete("/tasks", (req, res) => {
    Task.deleteOne({ _id: req.body.id }, (err, task) => {
      if (err) res.status(500);
      res.json(task);
    });
  });
};
