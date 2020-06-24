var mongoose=require("mongoose");
var songSchema= new mongoose.Schema({
    name: {
        type: String,
        lowercase: true
    },
    artist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    genre: [String],
    mood: [String],
    rating: {
        type: Number,
        default: 0
    },
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }],
    lyrics: String,
    image:{
        type: String,
        default:"https://assets.audiomack.com/default-song-image.jpg"
    },
    duration:{
        type: Number,
        default: 5.05
    }
});

module.exports = mongoose.model("Song",songSchema);