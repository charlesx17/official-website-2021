const express = require('express');
const router = express.Router();
const Member = require('../models/member');

router.get('/', (req, res) => {
  res.send('admin');
});

router.get('/members', async (req, res) => {
  try {
    const members = await Member.find().sort({ addedAt: 'desc' });
    res.render('admin/members', { members: members });
  } catch (e) {
    console.log(e);
  }
});

router.get('/members/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.render('admin/profile', { member: member });
  } catch (e) {
    console.log(e);
  }
});

router.post('/members', async (req, res) => {
  try {
    const date = new Date(req.body.dateBaptized).toLocaleDateString();

    const newMember = new Member({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      baptizedDate: date,
      department: req.body.department,
      gender: req.body.gender,
    });

    await newMember.save();

    res.redirect('members');
  } catch (e) {
    console.log(e);
  }
});

router.delete('/members/:id', async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);

    res.redirect('/admin/members');
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
