const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  baptizedDate: {
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  AddedAt: {
    type: Date,
    default: Date.now,
  },
  givings: [
    {
      type: Object,
    },
  ],
  pledges: [
    {
      type: Object,
    },
  ],
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
