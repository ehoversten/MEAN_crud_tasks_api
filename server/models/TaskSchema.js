// Require our DATABASE
const mongoose = require('mongoose');

// Define our Model (Blueprint)
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength:2 },
  description: { type: String, default: "", maxlength:255},
  completed: { type: Boolean, default: false},
}, { timestamps: true });

// Export our MODEL
mongoose.model('Task', TaskSchema);
