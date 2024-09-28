const mongoose = require("mongoose");

const xProfileSchema = new mongoose.Schema({
  fullName: String,
  userName: String,
  bio: String,
  profilePicUrl: String,
  followingCount: String,
  follwersCount: String,
  companyName: String,
  location: String,
  portfolioUrl: String,
});
const Profile = mongoose.model("Profile", xProfileSchema);
module.exports = Profile;
