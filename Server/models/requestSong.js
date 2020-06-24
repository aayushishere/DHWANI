var mongoose=require("mongoose");
var requestSongSchema= new mongoose.Schema({
    name: String,
    artist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist"
    }],
    genre: [String],
    mood: [String],
    // rating: Number,
    // review: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Review"
    // }],
    lyrics: String
});

module.exports = mongoose.model("Requestsong",requestSongSchema);