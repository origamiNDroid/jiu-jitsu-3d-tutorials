const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransitionsSchema = new Schema({
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
  Comment: {
	type: Array,
  },
  Rating: {
	type: Array,
  },
  Description: {
	type: String,
  },
});
