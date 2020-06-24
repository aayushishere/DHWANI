var bodyParser=require('body-parser');
var express=require('express');
var app=express();
var mongoose=require('mongoose');

//Importing models
var User=require('./models/user');
var Review=require('./models/review');
var Song=require('./models/song');
var RequestSong=require('./models/requestSong');
var Playlist=require('./models/playlist');
var seedDB=require("./seed");

//Importing Routes
var IndexRoutes=require("./routes/IndexRoute");
var SongRoutes=require("./routes/songsRoute");
// var ArtistRoutes=require("./routes/ArtistRoute");
var ReviewRoutes=require("./routes/reviewsRoute");
var PlaylistRoutes=require("./routes/playlistRoute");
var ModeratorRoutes=require("./routes/ModeratorRoute");

//configuration
mongoose.connect("mongodb://localhost:27017/Dhwaniv3",{useNewUrlParser:true, useUnifiedTopology:true});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
seedDB();


app.use(IndexRoutes);
app.use(SongRoutes);
// app.use("/artists",ArtistRoutes);
app.use(ReviewRoutes);
app.use(PlaylistRoutes);
app.use(ModeratorRoutes);

app.use(require('./routes/auth'))


app.listen(5000,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running");
    } 
});
