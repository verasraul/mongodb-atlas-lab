const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: { type: String, require: true},
        age: { type: Number, required: true},
        status: { type: String, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model("users", User);