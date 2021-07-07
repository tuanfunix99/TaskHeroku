

//dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    description:{
        type: String,
        required: true,
        trim: true,
    },
    completed:{
        type: Boolean,
        default: false
    }
})


//export the modules
module.exports = mongoose.model('Task', taskSchema);