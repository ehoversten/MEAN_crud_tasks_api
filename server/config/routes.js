const path = require("path");
const mongoose = require('mongoose');
// let Task = mongoose.model('Task', TaskSchema);

let TaskController = require("../controllers/TaskController.js");

module.exports = function(app) {

  app.get("/api/tasks", TaskController.display_all);
  app.post("/api/tasks", TaskController.create);
  app.get("/api/tasks/:id", TaskController.findById);
  app.delete("/api/tasks/:id", TaskController.delete);
  app.put("/api/tasks/:id", TaskController.update);

  // if we dont hit ay of our backend routes, serve our Angular App
  app.all("*", (req, res, next)=> {
    res.sendFile(path.resolve("./public/dist/public/index.html"));

  });
}
