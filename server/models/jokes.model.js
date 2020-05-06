const mongoose = require("mongoose");


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String, 
        required: true, 
        minlength: 5, 
        maxlength: 64},
    punchline: {
        type: String, 
        required: true, 
        minlength: 10, 
        maxlength: 100},
    }, 
    {timestamps: true } 
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;