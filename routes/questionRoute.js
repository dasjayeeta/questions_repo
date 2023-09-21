const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = require('../models/question');


router.get('/questionList', async (req, res) => {
    try {
        const questions = await Question.find();
        console.log(questions);
        res.json(questions);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})
module.exports = router;