// Require our database and use our Task Model
const Task = require('mongoose').model('Task');

// --- another way of implementing the above line of code  ---//
// const mongoose = require('mongoose');
// const Task = mongoose.model('Task', TaskSchema);


class TaskController {

// ------- display_all METHOD ------------------ //


  display_all(req, res) {
    Task.find( {}, (err, tasks)=> {
      if(tasks) {
        console.log("Found: ", tasks)
        // return all tasks as JSON OBJECTS
        return res.status(200).json(tasks);
			} else {
				return res.status(404).json( {
          "error":err,
          "message":"Something went terribly terribly wrong!",
        });
			}
    });
  }

// ------- findById METHOD ------------------ //


  findById(req, res) {
    console.log("POST DATA: ", req.params);
    Task.findOne( {_id:req.params.id}, (err, task)=> {
      if(task) {
        console.log("Found: ", task);
        return res.status(200).json(task);
      } else {
        console.log("Task not found", err);
        return res.status(404).json({
          "error":err,
          "message":"Failed to find Task with id:"+req.params.id
        });
      }
    });
  }

// ------- create METHOD ------------------ //


  create(req, res) {
    let task = new Task(req.body);
    console.log("POST DATA: ", req.body);
    task.save(err=> {
      if(err) {
        console.log("Something went wrong", err);
        return res.status(403).json({
          "error":err.errors,
          "message":"Failed to create Task"
        });
      } else {
        console.log("Task created successfully");
        return res.status(200).json(task);
      }
    });
  }


// ------- update METHOD ------------------ //

  update(req, res) {

    console.log("hit update route");
    Task.findOne({_id: req.params.id}, (err, task)=> {
      if(task){
        // if the field was updated, update it. If not changed, save what we had before
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.completed = req.body.completed || task.completed;

        task.save( err=> {
          if(err) {
            console.log("Task did not save", err);
            return res.status(403).json({
              "error":err.errors,
              "message":"Failed to update Task"+req.params.id
            });
          } else {
            console.log("Task updated successfully");
            return res.status(200).json(task);
          }
        });

      } else {
        console.log("Something went sideways", err);
        return res.status(404).json({
          "error":err,
          "message":"Failed to find Task"+req.params.id
        });
      }

    });

    // Task.update(
    //   { _id:req.params.id },
    //   { $set:{
    //     title:req.body.title,
    //     description:req.body.description,
    //     completed:req.body.completed
    //   }},
    //   () => {
    //
    // });
  }


// ------- destroy METHOD ------------------ //

  delete(req, res) {
    console.log("hit distroy route");
    Task.findOne({_id: req.params.id}, (err, task)=> {

      if(task){

        Task.remove(function(err) {
          console.log("Found: ", task);

          if(err) {
            console.log("Something went sideways", err);
            return res.status(404).json({
              "error":err,
              "message":"Failed to remove Task"+req.params.id
            });
          } else {
            return res.status(202).json(task);
          }
        });

      } else {
        return res.status(404).json({
          "error":err,
          "message":"Failed to find Task"+req.params.id
        });
      }

    });
  }

// ------- end of Controller ------------------ //

}  // end of TaskController

// export our TaskController
module.exports = new TaskController();
