var mongoose=require("mongoose");

var userSchema= new mongoose.Schema({
    fullname: {
        type: String,
        lowercase: true
    },
    username: String,
    password: String,
    email: String,
    image:{
        type: String,
        default:"https://www.vhv.rs/dpng/d/256-2569650_men-profile-icon-png-image-free-download-searchpng.png"
    },
    info: String,
    type: String
});

module.exports = mongoose.model("User",userSchema);
