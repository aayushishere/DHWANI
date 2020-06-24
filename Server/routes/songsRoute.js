var express=require("express");
var router=express.Router({mergeParms: true});

var User=require('../models/user');
var Review=require('../models/review');
var Song=require('../models/song');
var RequestSong=require('../models/requestSong');
var Playlist=require('../models/playlist');
var requireLogin = require('../middleware/requireLogin')

var vid1="5edf37648724f237e0d8f760",
        vid2="5edf37648724f237e0d8f761";
router.get("/", requireLogin,function(req,res){
    res.send("hi there it really works!");
})
router.get("/song/:id", requireLogin,function(req,res){
    Song.findById(req.params.id).populate('artist').populate('review').exec(async function(err,song){
        var ar=[];
        await song.artist.forEach(function(art){
            ar.push(art.fullname);
        });
        var userRating;
        
        await song.review.forEach(function(rev){
            if(rev.createdBy==vid2){
            // if(rev.createdBy==req.user._id){
                userRating=rev.rating;
            }
        });
        res.send({
            name: song.name,
            image: song.image,
            artist: ar,
            _id: song._id,
            lyrics: song.lyrics,
            genre: song.genre,
            mood: song.mood,
            rating: song.rating,
            userRating: userRating

        });
    });
});

router.post('/song', requireLogin,function(req,res){
        if(req.user.type=="artist"){
            var art=[];
            // art.push(vid1);
            art.push(req.user._id);
            var gen=[];
            gen.push(req.query.genre);
            var mood=[];
            gen.push(req.query.mood);
            var dat={
                name: req.query.songname, 
                artist: art,
                genre: gen ,
                mood: mood,
                lyrics: req.query.lyrics,
                image: req.query.image,
                duration: req.query.duration
            }
            RequestSong.create(dat,function(err,savedSong){
                res.send("Request has been made to add song");
            });
        }
        else{
            res.send("You are not a Artist! make a artist account to continue");
        }
});

module.exports=router;