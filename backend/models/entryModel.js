const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const {Schema} = mongoose;

const entrySchema = new mongoose.Schema({
    userID :{
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true

    },
    entryName: {
        type: String
    },
    entryType: {
        type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
        required: true, 
    },
    foods: [{type: Schema.Types.ObjectId, ref: 'User'}], //Update once food Model is added 

    date: { 
        type: Date,
        default: Date.now
    }

});

entrySchema.plugin(AutoIncrement,
    {   inc_field: 'id',
        id: 'entryNums'
    }
);