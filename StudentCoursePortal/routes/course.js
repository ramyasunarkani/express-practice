const express = require('express');
const router = express.Router();
const {courses} = require('../Data');

router.get('/', (req, res) => {
    const Allcourses=courses.map((c)=>c.name);

    res.send(`Courses:${Allcourses}`);
});


router.get('/:id', (req, res) => {
    const courseId = req.params.id;
    const course = courses.find((s) => s.id == courseId);

    if (course) {
        res.send(`Course: ${course.name},Description:${course.description}`);
    } else {
        res.status(404).send('Course not found');
    }
});




module.exports = router;
