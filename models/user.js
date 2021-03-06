const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    FirstName: {
      type: String,
      required: true
    },
    LastName: {
      type: String,
      required: true
    },
    Login: {
      type: String,
      required: true
    },
    Email: {
      type: String,
      required: true
    },
    Password: {
      type: String,
      required: true
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
	Transitions_List: [{
	  // type: TransitionsSchema
      type: mongoose.Schema.Types.ObjectId,
	  ref: 'Transitions'
    }]
});

module.exports = user = mongoose.model('Users', UserSchema, "users");
