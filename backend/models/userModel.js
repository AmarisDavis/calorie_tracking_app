const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 
    password:{
        type: String,
        required: true
    },

    calorie_goal:{
        type: Number,
        default: 0
    },

    calorie_consumed: {
        type: Number,
        default: 0
    },
});

//auto-incrementing the id with mongoose-sequence to bypass mongodbs default setting
userSchema.plugin(AutoIncrement,
    {   inc_field: 'id',
        id: 'userNums'
    }
);


module.exports = mongoose.model('User', userSchema);