const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransitionsSchema = new mongoose.Schema({
  Name: {
    type: String,
	required: true
  },
  From: {
    type: String,
  },
  To: {
    type: String,
  },
  Tags: {
	type: String,
  },
  Render: {
	type: String,
  },
  Comments: {
	type: Array,
  },
  Rating: {
	type: Array,
  },
  Description: {
	type: String,
  }
});

const Transitions = mongoose.model("Transitions", TransitionsSchema, "transitions");
module.exports = Transitions;
