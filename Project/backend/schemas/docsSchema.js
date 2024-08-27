const mongoose = require('mongoose');

// Schema define karte hain
const docSchema = new mongoose.Schema({
  address: { type: String,},
  city: { type: String,},
  state: { type: String, },
  phoneNumber: { type: String,  },
  country: { type: String, },
  profilePicture: { type: String },
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
},
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});

// Schema se model banate hain
const Docs = mongoose.model('Post', docSchema);

module.exports = Docs;

