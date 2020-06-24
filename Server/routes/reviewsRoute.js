var express=require("express");
var router=express.Router({mergeParms: true});

var User=require('../models/user');
var Review=require('../models/review');
var Song=require('../models/song');
var RequestSong=require('../models/requestSong');
var Playlist=require('../models/playlist');
var requireLogin = require('../middleware/requireLogin')

router.get("/song/:id/review", requireLogin,function(req,res){
    // console.log(req.params.id);
    Song.findById(req.params.id).populate({ 
        path: 'review',
        populate: {
          path: 'createdBy',
          model: 'User'
        } 
     }).exec(function(err,song){
        //  console.log(song);
         var sdata=[];
         song.review.forEach(function(review){
            sdata.push({
                content: review.content,
                createdBy: review.createdBy.fullname,
                image : review.createdBy.image, 
                rating: review.rating,
                songid: song._id,
                date: review.dateCreated.toDateString()
            });
         });
        res.send(sdata);
     });
});
router.post("/song/:id/review", requireLogin,function(req,res){
    var vid1="5edf37648724f237e0d8f760",
        vid2="5edf37648724f237e0d8f761";
    var newrev={
        content: req.query.content,
        // createdBy: vid2,
        createdBy: req.user._id,
        rating: req.query.rating,
    };
    Review.create(newrev,function(err,rev){
        Song.findById(req.params.id,function(err,fsong){
            fsong.rating = ((fsong.rating*fsong.review.length)+rev.rating)/(fsong.review.length+1);
            fsong.review.push(rev);
            fsong.save(function(err,song){
                res.redirect("/song/"+req.params.id+"/review");
            });
        });
    });
    
});
module.exports=router;