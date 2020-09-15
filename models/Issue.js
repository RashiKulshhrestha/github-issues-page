const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostIssue = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    date: {
      type: String,
      default: new Date()
        .toLocaleString()
        .replace(",", "")
        .replace(/:.. /, " "),
    },
  },
  { timestamps: true }
);

module.exports = ISSUE = mongoose.model("issue", PostIssue);
