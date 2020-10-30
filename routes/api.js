const router = require("express").Router();
const Workout = require("../models/workout");
const path = require('path');


router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
})

router.post("/api/workouts", ({ body }, res) => {
  // console.log(req.body)
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// GETTING LAST WORKOUT
router.get("/api/workouts", ({ body }, res) => {
    Workout.find({})
    .then(dbWorkout => {
      // console.log(dbWorkout)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

router.put("/api/workouts/:id", (req, res) => {
  // console.log("hi")
    Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    // console.log(dbWorkout)
      res.json(dbWorkout);
  })
  .catch(err => {
      res.status(400).json(err);
  });
})

module.exports = router;
