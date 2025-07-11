const express = require('express');
const router = express.Router();
const {students} = require('../Data');

router.get('/', (req, res) => {
    const names=students.map((s)=>s.name);
    res.send(`Students:${names}`);
});
router.get('/:id', (req, res) => {
    const studentId = req.params.id;
    const student = students.find((s) => s.id == studentId);

    if (student) {
        res.send(`Student: ${student.name}`);
    } else {
        res.status(404).send('Student not found');
    }
});




module.exports = router;
