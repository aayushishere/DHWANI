var express=require("express");
var router=express.Router({mergeParms: true});

var User=require('../models/user');
var Review=require('../models/review');
var Song=require('../models/song');
var RequestSong=require('../models/requestSong');
var Playlist=require('../models/playlist');
var requireLogin = require('../middleware/requireLogin')

router.get('/admin',requireLogin,function(req,res){
    if(req.user.type === "moderator")
    {RequestSong.find({}).populate('artist').exec(function(err,songs){
        var sdata=[];
        songs.forEach(function(song){
            var ar=[];
            song.artist.forEach(function(art){
                ar.push(art.fullname)
            })
            sdata.push({
                _id: song._id,
                name: song.name,
                image: song.image,
                artist: ar,
                mood: song.mood,
                genre: song.genre,
                duration: song.duration,
            });
        });
        res.send(sdata);
    });}
    else
    res.send("Go home kid");
});
router.get('/approve/:id',requireLogin,function(req,res){
    if(req.user.type === "moderator")
{    RequestSong.findById(req.params.id,function(err,aprovedsong){
        Song.create(approvedsong,function(err,data){
            if(!err){
                RequestSong.findByIdAndRemove(req.params.id,function(err){
                    res.redirect("/admin");
                });
            }
            
        })
    })}
    else
    res.send("Go home kid");

})
module.exports=router;