var mongoose=require("mongoose");
// var Artist=require("./models/artist");
var User=require("./models/user");
var Song=require("./models/song");
var Playlist=require("./models/playlist");
var Review=require("./models/review.js");

var songs=[
    {
        name: "Har Kisi Ko",
        genre: ["pop","filmi"],
        mood: ["love","heartbreak"],
        lyrics: "Do Lafz Ki Hain, Baatein Kaheen Hai\
                Kyoon Darmiyaan Phir, Ruki Ruki\
                Keh Bhi Na Paaye, Reh Bhi Na Paaye\
                Kyoon Bevajah Hai, Yeh Bebasi\
                Tum Mein Hum Hain, Hum Mein Tum Ho\
                Tumse Hum Hain, Humse Tum Ho\
                Kismaton Se Milte Hain Do Dil Yahaan\
                Her Kisi Ko Nahi Milta\
                Yahaan Pyar Zindagi Mein"     
    },
    {
        name: "Galliyan",
        genre: ["Accoustic pop","filmi"],
        mood: ["love","heartbreak","life"],
        lyrics: "Yahin Doobe Din Mere\
                Yahin Hote Hain Savere\
                Yahin Marna Aur Jeena\
                Yahin Mandir Aur Madeena.."
    },
    {
        name: "Ban ke titli",
        genre: ["pop","filmi"],
        mood: ["love","heartbreak"],
        lyrics: "Ban Ke Titli Dil Uda, Uda, Uda Hai\
                Kahin Door..\
                Chalke Khushbu Se Juda, Juda, Juda Hai\
                Kahin Door..O.."
                  
    },
    {
        name: "Aas pass hai khuda",
        genre: ["pop","filmi"],
        mood: ["love","heartbreak"],
        lyrics: "Dhundhla jaayein jo manzilein\
                Ik pal ko tu nazar jhuka\
                Jhuk jaaye sar jahan wahi\
                Milta hai rab ka raasta"
    }
];
var users=[
    {
        fullname: "Vedant Tripathi",
        username: "vedant661",
        password: "vedant12",
        email: "vedanttripathi661@gmail.com",
        info: "Hey! I am Vedant",
        type:"moderator"
    },
    {
        fullname: "Tushar Guha Neogi",
        username: "tushar661",
        password: "tushar12",
        email: "tushar12345@gmail.com",
        info: "Hey! I am Tushar",
        type:"user"
    },
    {
        fullname: "Aayush Singh",
        username: "aayush661",
        password: "aayush12",
        email: "aayushhhh@gmail.com",
        info: "Hey! I am Aayush",
        type:"user"
    },
    {
        fullname: "Harshal Chavhan",
        username: "harshal661",
        password: "harshal12",
        email: "harshalll@gmail.com",
        info: "Hey! I am Harshal",
        type:"user"
    },
    {
        fullname: "A.R. Rahman",
        username: "arrehman56",
        password: "rahman12",
        email: "arrehman@music.com",
        info: "i am music director! Bitch!",
        type:"artist"
    },
    {
        fullname: "Mohit Chauhan",
        username: "mohitchauhan56",
        password: "mohit12",
        email: "mohit@music.com",
        info: "i performed in Aurora'20 and it was a shit fest! lol.",
        type:"artist"
    },
    {
        fullname: "Arijit Singh",
        username: "arijit56",
        password: "arijit12",
        email: "arijit@music.com",
        info: "Hum saa na koi hai ashiq yahaan par"
    },
    {
        fullname: "Ankit Tiwari",
        username: "ankit56",
        password: "ankit12",
        email: "ankit@music.com",
        info: "Mai badtameez meri aadaten kharaab hai..",
        type:"artist"
    },
    {
        fullname: "Atif Aslam",
        username: "atif56",
        password: "atif12",
        email: "atif@music.com",
        info: "tera hone laga hoon jab se mila hoon",
        type:"artist"
    },
    {
        fullname: "Sunidhi Chauhan",
        username: "sunidhi56",
        password: "sunidhi12",
        email: "sunidhi@music.com",
        type:"artist"
    },
    {
        fullname: "Neeti Mohan",
        username: "neeti56",
        password: "neeti12",
        email: "neeti@music.com",
        info: "Jiya jiya re jiya re",
        type:"artist"
    }
];

var playlists=[
    {
        name: "MyPlaylist",
    },
    {
        name: "MyPlaylist2",
    },
];

var reviews=[
    {
    content: "I loved this song!",
    rating: 5,
    },
    {
    content: "this song is beautiful!",
    rating: 4.5,
    },
    {
    content: "Soulful song!",
    rating: 4,
    },
    {
    content: "Creepy song!",
    rating: 1,
    }
];
// 
function seedDB(){
    User.remove({},function(err){
        if(err){
            console.log("Error occured while removing users");
        }
        else{
            console.log("USers Removed!");
            Song.remove({},function(err){
                if(err){
                    console.log("Error occured while removing songs");
                }
                else{
                    console.log("Songs Removed!");
                    var i=0;
                    users.forEach(function(artist){
                        User.create(artist,function(err,artist){
                            i++;
                            if(err){
                                console.log("Error Occured in creating user database");
                                // console.log(err);
                            }
                            else{
                                
                                console.log("user Added to database");
                                // console.log(artist);
                                if(i==users.length)
                                {
                                    var j=0;
                                    songs.forEach(function(song){
                                        Song.create(song,function(err,song){
                                            j++;
                                            if(err){
                                                console.log("Error occured while creating songs database");
                                                // console.log(err);
                                            }
                                            else{
                                                console.log("Songs Added to database");
                                                // console.log(song);
                                                if(song.name=="Har Kisi Ko" || song.name=="Ban ke titli"){
                                                    User.findOne({fullname:"Arijit Singh",type:"artist"},function(err,arijit){
                                                        song.artist.push(arijit);
                                                        song.save(function(err,data){
                                                            if(err)
                                                            {
                                                                console.log("Object Referencing failed!");
                                                                // console.log(err);
                                                            }
                                                            else
                                                            {
                                                                console.log("object referencing:");
                                                                // console.log(data);
                                                            }
                                                        });
                                                    });
                                                 }
                                                if(song.name=="Galliyan"){
                                                    User.findOne({fullname: "Ankit Tiwari",type:"artist"},function(err,ankit){
                                                        song.artist.push(ankit);
                                                        song.save(function(err,data){
                                                            if(err)
                                                            {
                                                                console.log("Object Referencing failed!");
                                                                // console.log(err);
                                                            }
                                                            else
                                                            {
                                                                console.log("object referencing:");
                                                                // console.log(data);
                                                            }
                                                        });
                                                    });
                                                }
                                                if(song.name=="Ban ke titli"){
                                                    User.findOne({fullname: "Sunidhi Chauhan",type:"artist"},function(err,sunidhi){
                                                        song.artist.push(sunidhi);
                                                        song.save(function(err,data){
                                                            if(err)
                                                            {
                                                                console.log("Object Referencing failed!");
                                                                // console.log(err);
                                                            }
                                                            else
                                                            {
                                                                console.log("object referencing:");
                                                                // console.log(data);
                                                            }
                                                        });
                                                    });
                                                }
                                                if(song.name=="Aas pass hai khuda"){
                                                    User.findOne({fullname: "Atif Aslam",type:"artist"},function(err,atif){
                                                        song.artist.push(atif);
                                                        song.save(function(err,data){
                                                            if(err)
                                                            {
                                                                console.log("Object Referencing failed!");
                                                                // console.log(err);
                                                            }
                                                            else
                                                            {
                                                                console.log("object referencing:");
                                                                // console.log(data);
                                                            }
                                                        });
                                                    });
                                                }
                                                
                                                if(j==songs.length){            
                                                                            Playlist.remove({},function(err){
                                                                                if(err){
                                                                                    console.log("Error occured while removing Playlist!")
                                                                                }
                                                                                else{
                                                                                    playlists.forEach(function(playlist){
                                                                                        Playlist.create(playlist,function(err,playlist){
                                                                                            if(err){
                                                                                                console.log("error occured while creating playlist!");
                                                                                            } 
                                                                                            else {
                                                                                                console.log("Playlist Successfully Created!!");
                                                                                                if(playlist.name=="MyPlaylist")
                                                                                                {
                                                                                                    User.findOne({fullname:"Vedant Tripathi"},function(err,foundUser){
                                                                                                        if(err){
                                                                                                            console.log("Error Occured while finding playlist!");
                                                                                                        }
                                                                                                        else{
                                                                                                            playlist.createdBy=foundUser;
                                                                                                           
                                                                                                        }
                                                                                                    });
                                                                                                    Song.findOne({name:"Galliyan"},function(err,song){
                                                                                                        if(err){
                                                                                                            console.log("Song not added to the playlist!");
                                                                                                        }
                                                                                                        else{
                                                                                                            playlist.songs.push(song);
                                                                                                            playlist.length+=1;
                                                                                                            
                                                                                                        }
                                                                                                    });
                                                                                                    Song.findOne({name:"Aas pass hai khuda"},function(err,song){
                                                                                                        if(err){
                                                                                                            console.log("Song not added to the playlist!");
                                                                                                        }
                                                                                                        else{
                                                                                                            playlist.songs.push(song);
                                                                                                            playlist.length+=1;
                                                                        
                                                                                                        }
                                                                                                    });
                                                                                                    setTimeout(() =>{ 
                                                                                                        playlist.save(function(err,data){
                                                                                                            if(err){
                                                                                                                console.log("User not added in playlist!");
                                                                                                                console.log(err);
                                                                                                            }
                                                                                                            else{
                                                                                                                console.log("user added to playlist!");
                                                                                                                // console.log(data);
                                                                                                            }
                                                                                                        });
                                                                                                    },2000);

                                                                                                }
                                                                                                if(playlist.name=="MyPlaylist2")
                                                                                                {
                                                                                                    User.findOne({fullname:"Tushar Guha Neogi"},function(err,foundUser){
                                                                                                        if(err){
                                                                                                            console.log("Error Occured while finding playlist!");
                                                                                                        }
                                                                                                        else{
                                                                                                            // console.log("Playlist found");
                                                                                                            // console.log(foundPlaylist);
                                                                                                            playlist.createdBy=foundUser;
                                                                                                            
                                                                                                        }
                                                                                                    });
                                                                                                    Song.findOne({name:"Aas pass hai khuda"},function(err,song){
                                                                                                        if(err){
                                                                                                            console.log("Song not added to the playlist!");
                                                                                                        }
                                                                                                        else{
                                                                                                            playlist.songs.push(song);
                                                                                                            playlist.length+=1;
                                                                                                            
                                                                                                        }
                                                                                                    });
                                                                                                    Song.findOne({name:"Ban ke titli"},function(err,song){
                                                                                                        if(err){
                                                                                                            console.log("Song not added to the playlist!");
                                                                                                        }
                                                                                                        else{
                                                                                                            playlist.songs.push(song);
                                                                                                            playlist.length+=1;
                                                                                                            
                                                                                                        }
                                                                                                    });
                                                                                                    setTimeout(() =>{ 
                                                                                                        playlist.save(function(err,data){
                                                                                                            if(err){
                                                                                                                console.log("Song added in the playlist!");
                                                                                                            }
                                                                                                            else
                                                                                                            {
                                                                                                                console.log("Song added to playlist!");
                                                                                                                // console.log(data);
                                                                                                            }
                                                                                                        });
                                                                                                    },2000);
                                                                                                }
                                                                                            }    
                                                                                        });
                                                                                    });
                                                                                
                                                                                }
                                                                            });
                                                                        Review.remove({},function(err){
                                                                            if(err){
                                                                                console.log("Removing Songs failed!!");
                                                                            }
                                                                            else{
                                                                                var m=0;
                                                                                reviews.forEach(function(review){
                                                                                    Review.create(review,function(err,review){
                                                                                        m++;
                                                                                        if(err){
                                                                                            console.log("Review creation failed!");
                                                                                        }
                                                                                        else{
                                                                                    
                                                                                            if(review.content=="I loved this song!"){
                                                                                                User.findOne({fullname:"Vedant Tripathi"},function(err,user){
                                                                                                    if(err){
                                                                                                        console.log("Failed to find author of review");
                                                                                                    }
                                                                                                    else{
                                                                                                        review.createdBy=user;
                                                                                                        review.save(function(err,data){
                                                                                                            if(err){
                                                                                                                console.log("Failed to add user to a review!");
                                                                                                            }
                                                                                                            else{
                                                                                                                console.log("User added to A review!");
                                                                                                            }

                                                                                                        });
                                                                                                    }
                                                                                                });
                                                                                                Song.findOne({name: "Aas pass hai khuda"},function(err,song){
                                                                                                    if(err){
                                                                                                        console.log("failed to find song for a review");
                                                                                                    }
                                                                                                    else{
                                                                                                        song.review.push(review);
                                                                                                        song.save(function(err,data){
                                                                                                            if(err){
                                                                                                                console.log("review not added to the song!");
                                                                                                            }
                                                                                                            else{
                                                                                                            console.log("Review and rating added to the songs!");
                                                                                                            // console.log(data);
                                                                                                            }
                                                                                                        });
                                                                                                    }
                                                                                                });
                                                                                            }
                                                                                            if(review.content=="this song is beautiful!"){
                                                                                                User.findOne({fullname:"Tushar Guha Neogi"},function(err,user){
                                                                                                    if(err){
                                                                                                        console.log("Failed to find author of review");
                                                                                                    }
                                                                                                    else{
                                                                                                        review.createdBy=user;
                                                                                                        review.save(function(err,data){
                                                                                                            if(err){
                                                                                                                console.log("Failed to add user to a review!");
                                                                                                            }
                                                                                                            else{
                                                                                                                console.log("User added to A review!");
                                                                                                            }

                                                                                                        });
                                                                                                    }
                                                                                                });
                                                                                                Song.findOne({name: "Aas pass hai khuda"},function(err,song){
                                                                                                    if(err){
                                                                                                        console.log("failed to find song for a review");
                                                                                                    }
                                                                                                    else{
                                                                                                        song.review.push(review);
                                                                                                        song.save(function(err,data){
                                                                                                            if(err){
                                                                                                                console.log("review not added to the song!");
                                                                                                            }
                                                                                                            else{
                                                                                                            console.log("Review and rating added to the songs!");
                                                                                                            // console.log(data);
                                                                                                            }
                                                                                                        });
                                                                                                    }
                                                                                                });
                                                                                            }
                                                                                            if(review.content=="Soulful song!"){
                                                                                                User.findOne({fullname:"Aayush Singh"},function(err,user){
                                                                                                    if(err){
                                                                                                        console.log("Failed to find author of review");
                                                                                                    }
                                                                                                    else{
                                                                                                        review.createdBy=user;
                                                                                                        review.save(function(err,data){
                                                                                                            if(err){
                                                                                                                console.log("Failed to add user to a review!");
                                                                                                            }
                                                                                                            else{
                                                                                                                console.log("User added to A review!");
                                                                                                            }

                                                                                                        });
                                                                                                    }
                                                                                                });
                                                                                                Song.findOne({name: "Galliyan"},function(err,song){
                                                                                                    if(err){
                                                                                                        console.log("failed to find song for a review");
                                                                                                    }
                                                                                                    else{
                                                                                                        song.review.push(review);
                                                                                                        song.save(function(err,data){
                                                                                                            if(err){
                                                                                                                console.log("review not added to the song!");
                                                                                                            }
                                                                                                            else{
                                                                                                            console.log("Review and rating added to the songs!");
                                                                                                            // console.log(data);
                                                                                                            }
                                                                                                        });
                                                                                                    }
                                                                                                });
                                                                                            }
                                                                                            if(review.content=="Creepy song!"){
                                                                                                User.findOne({fullname:"Harshal Chavhan"},function(err,user){
                                                                                                    if(err){
                                                                                                        console.log("Failed to find author of review");
                                                                                                    }
                                                                                                    else{
                                                                                                        review.createdBy=user;
                                                                                                        review.save(function(err,data){
                                                                                                            if(err){
                                                                                                                console.log("Failed to add user to a review!");
                                                                                                            }
                                                                                                            else{
                                                                                                                console.log("User added to A review!");
                                                                                                            }

                                                                                                        });
                                                                                                    }
                                                                                                });
                                                                                                Song.findOne({name: "Har Kisi Ko"},function(err,song){
                                                                                                    if(err){
                                                                                                        console.log("failed to find song for a review");
                                                                                                    }
                                                                                                    else{
                                                                                                        song.review.push(review);
                                                                                                        song.save(function(err,data){
                                                                                                            if(err){
                                                                                                                console.log("review not added to the song!");
                                                                                                            }
                                                                                                            else{
                                                                                                            console.log("Review and rating added to the songs!");
                                                                                                            // console.log(data);
                                                                                                            }
                                                                                                        });
                                                                                                    }
                                                                                                });   
                                                                                            }
                                                                                            if(m==reviews.length){
                                                                                                setTimeout(function(){
                                                                                                    Song.find({}).populate('review').exec(function(err,songs){
                                                                                                        songs.forEach(function(song){
                                                                                                            var rating=0;
                                                                                                            // console.log(song.name+" : ");
                                                                                                            song.review.forEach(function(review){
                                                                                                                // console.log(review.content);
                                                                                                                if(!review)
                                                                                                                rating=0;
                                                                                                                else
                                                                                                                rating+=review.rating;
                                                                                                            });
                                                                                                            if(song.review.length>0){
                                                                                                                song.rating=rating/song.review.length;
                                                                                                                // console.log(song.rating);
                                                                                                                song.save(function(err,data){
                                                                                                                    if(err){
                                                                                                                        console.log("Failed to update ratings of song!");
                                                                                                                        console.log(err);
                                                                                                                    }
                                                                                                                    else{
                                                                                                                        console.log("rating successfully assigned!");
                                                                                                                        // console.log(data);
                                                                                                                    }
                                                                                                                });
                                                                                                            }
                                                                                                        });                                                                                            
                                                                                                    });
                                                                                                },2000);
                                                                                            }
                                                                                        }
                                                                                    })
                                                                                });
                                                                            }
                                                                        });
                                                                                  
                                                                    
                                                                
                                                }
                                            }
                                        });
                                    });
                                }    
                            }
                        });
                    });
                }
            });
        }
    });    
}
module.exports=seedDB;