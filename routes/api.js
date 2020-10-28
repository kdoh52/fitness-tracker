const router = require("express").Router();
const Workout = require("../models/workout");
const path = require('path');
const express = require("express");

const app = express();


router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});





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
    Workout.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
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
    console.log(dbWorkout)
      res.json(dbWorkout);
  })
  .catch(err => {
      res.status(400).json(err);
  });
})

module.exports = router;
