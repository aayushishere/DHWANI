var express=require("express");
var router=express.Router({mergeParms: true});

var User=require('../models/user');
var Review=require('../models/review');
var Song=require('../models/song');
var RequestSong=require('../models/requestSong');
var Playlist=require('../models/playlist');
var requireLogin = require('../middleware/requireLogin')


router.get("/search/:type/:keyword", requireLogin,(req,res) => {
    var type=req.params.type;
    var keyword=req.params.keyword;
    // console.log(type);
    // console.log(keyword);
    var sdata=[];
        if(type.toLowerCase()=="song")
        {

            Song.find({name: { "$regex": keyword, "$options": "i" }}).populate('artist','fullname').exec(async function(err,song){
            // Song.find({name: new RegExp('\\b' + keyword + '\\b', 'i')}).populate('artist','fullname').exec(function(err,song){
                await song.forEach(async function(song){
                    var art=[];
                    await song.artist.forEach( function(artist){
                        art.push(artist.fullname);
                    });
                    await sdata.push({
                        _id: song._id,
                        name: song.name,
                        artist: art,
                        image: song.image,
                        rating: song.rating,
                        genre: song.genre,
                        mood: song.mood,
                        duration: song.duration     
                    });      
               });
                await res.send(sdata);
                // console.log(song)
            });
            
        }
        if(type.toLowerCase()=="artist"){
            Song.find({}).populate('artist','fullname').exec(async function(err,songs){
                await songs.forEach(function(song){
                    song.artist.forEach(async function(artist){
                        // var regx=/artist.fullname/i;
                        var regx=new RegExp(keyword, 'i')
                            if(regx.test(artist.fullname)){
                                // console.log("aa");
                                var art=[];
                                await song.artist.forEach(function(artist){
                                    art.push(artist.fullname);
                                });
                                await sdata.push({
                                    _id: song._id,
                                    name: song.name,
                                    artist: art,
                                    image: song.image,
                                    rating: song.rating,
                                    genre: song.genre,
                                    mood: song.mood,
                                    duration: song.duration
                                });     
                       }
                    }) 
                });
                // songs.find({"artist.fullname" : { "$regex": keyword, "$options": "i" }},function(err,results){
                await res.send(sdata);
                });
            
        }
        if(type.toLowerCase()=="mood"){
            Song.find({}).populate('artist','fullname').exec(async function(err,songs){
                await songs.forEach( function(song){
                    song.mood.forEach(async function(mood){
                        var regx=new RegExp(keyword, 'i')
                            if(regx.test(mood)){
                                    var art=[];
                                    await song.artist.forEach(function(artist){
                                        art.push(artist.fullname);
                                        // console.log(artist.fullname);
                                     });
                                    await sdata.push({
                                        _id: song._id,
                                        name: song.name,
                                        artist: art,
                                        image: song.image,
                                        rating: song.rating,
                                        genre: song.genre,
                                        mood: song.mood,
                                        duration: song.duration
                                    });     
                                    
                        }
                    });
                    
                });
                await res.send(sdata);
            });
            
        }
        if(type.toLowerCase()=="genre"){
            Song.find({}).populate('artist','fullname').exec(async function(err,songs){
                await songs.forEach(function(song){
                    song.genre.forEach(async function(genre){
                        var regx=new RegExp(keyword, 'i')
                            if(regx.test(genre)){
                                var art=[];
                                await song.artist.forEach(function(artist){
                                    art.push(artist.fullname);
                                });
                                await sdata.push({
                                    _id: song._id,
                                    name: song.name,
                                    artist: art,
                                    image: song.image,
                                    rating: song.rating,
                                    genre: song.genre,
                                    mood: song.mood,
                                    duration: song.duration                                    

                                });
                        }
                    });      
                });
                await res.send(sdata);
           });    
        }
});
module.exports=router;