const express = require("express");
const router = express.Router();
const Member = require("../models/member");

router.get("/", (req, res) => {
  res.send("admin");
});

router.get("/members", async (req, res) => {
  const members = await Member.find();
  res.render("admin/members", { members: members });
});

router.get("/members/:id", async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.render("admin/profile", { member: member });
});

router.post("/members", async (req, res) => {
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

    res.redirect("members");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
