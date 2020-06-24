var mongoose= require("mongoose");

var reviewSchema = new mongoose.Schema({
    content: String,
    rating: Number,
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    dateCreated:{
        type: Date,
        default: Date.now
    }
});

module.exports= mongoose.model("Review",reviewSchema);