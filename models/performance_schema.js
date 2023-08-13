// schema
const mongoose = require( "mongoose");

const {ObjectId} = mongoose.Schema.Types;

const performanceSchema = mongoose.Schema(
  {
    
    reviewFor: {
      type: ObjectId,
      required: [true, "review for is required"],
      ref: "User"
    },
    reviewBy: {
      type: ObjectId,
      required: [true, "review by is required"],
      ref: 'User'
    },
    feedback: {
      type: String,
    },
    

  },
  {
    timestamps: true,
  }
);
//creating model or collection
const Performance = mongoose.model("Performance", performanceSchema);

module.exports = Performance;
