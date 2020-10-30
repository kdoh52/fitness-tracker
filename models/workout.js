const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
      {
        exercises: [{
          type: {
            type: String,
            trim: true,
            // required: "Enter a name for workout"
          },
          name: {
            type: String,
            trim: true,
          },
          distance: {
            type: Number,
            trim: true,
          },
          duration: {
            type: Number,
            trim: true,
          },
          weight: {
            type: Number,
            trim: true,
          },
          sets: {
            type: Number,
            trim: true,
          },
          reps: {
            type: Number,
            trim: true,
          }
        }],
        day: {
          type: Date,
          trim: true,
          default: Date.now
        }
      },
      {
        toJSON: {
          // include any virtual properties when data is requested
          virtuals: true
        }
      }
);

    workoutSchema.virtual("totalDuration").get(function () {
      // "reduce" array of exercises down to just the sum of their durations
      return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
      }, 0);
    });



    const Workout = mongoose.model("Workout", workoutSchema);

    module.exports = Workout;