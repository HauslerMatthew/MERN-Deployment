const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name needs to be filled out!"],
        minLength: [3, "Pet name must be at least 3 characters"],
    },
    type: {
        type: String,
        required: [true, "Pet type needs to be filled out!"],
        minLength: [3, "Pet type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Please tell us about this pet!"],
        minLength: [3, "Description must contain at least 3 characters"]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    },
}, {timestamps: true});

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet;

