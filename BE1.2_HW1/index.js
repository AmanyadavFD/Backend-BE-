require("../db");

const fs = require("fs");
const Profile = require("./models/profiles.models");
const jsonData = fs.readFileSync("profile.json", "utf-8");
const profileData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const profile of profileData) {
      const newProfile = new Profile({
        fullName: profile.fullName,
        username: profile.username,
        bio: profile.bio,
        profilePicUrl: profile.profilePicUrl,
        followingCount: profile.followingCount,
        followerCount: profile.followerCount,
        companyName: profile.companyName,
        location: profile.location,
        portfolioUrl: profile.portfolioUrl,
      });
      newProfile.save();
      console.log("Profile Name: ", newProfile.fullName);
    }
  } catch (error) {
    console.log(error);
  }
}
seedData();
