var mongoose=require("mongoose");

var playlistSchema= new mongoose.Schema({
    name:{
        type: String,
        lowercase: true
    },
    dateCreated: {
        type: Date,
        default:Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song"
    }],
    image:{
        type: String,
        default:"https://upload.wikimedia.org/wikipedia/commons/e/ec/Record-Album-02.jpg"
    },
    length: {
        type: Number,
        default: 0
    }
});
module.exports= mongoose.model("Playlist",playlistSchema);