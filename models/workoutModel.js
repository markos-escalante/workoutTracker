const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: true
            },

            type: {
                type: String,
                trim: true,
                required: true
            },

            weight: {
                type: Number,
                required: true
            },

            sets: {
                type: Number,
                required: true
            },

            reps: {
                type: Number,
                required: true
            },

            duration: {
                type: Number,
                required: true
            },

            distance: {
                type: Number,
                required: true
            }
        }
    ],
});