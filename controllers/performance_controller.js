const Performance = require('../models/performance_schema')
const User = require('../models/users_schema')

// for submitting feedback form
module.exports.submitFeedback = async function(req, res){
    // console.log(req)
    const id = req.params.id;
    // console.log(req)
    // const employees = await User.find({}).sort({createdAt : -1});
     await Performance.findByIdAndUpdate(id, {feedback: req.body.feedback});

    res.redirect('back');
}
// this is used for render feedback page 
module.exports.feedback = async function(req, res){
 
    // const employees = await User.find({}).sort({createdAt : -1});
    const id = req.user._conditions._id;
    
    const feedback = await Performance.find({reviewBy: id , "feedback":{$exists:false}}).populate("reviewFor");
    const othersFeedback = await Performance.find({reviewFor: id ,"feedback":{$exists:true}}).populate("reviewBy");
    console.log(feedback);
    const newfeedback = feedback.filter((e)=> e.reviewFor != null)
    const  newothersFeedback = othersFeedback.filter((e)=> e.reviewBy != null)

    res.render("feedback", {feedback: newfeedback, othersFeedback: newothersFeedback});
}     

// this is used for assigning review task to employees
module.exports.assignTask = async function(req, res){
 
    // console.log(req)
    const employees = await User.find({}).sort({createdAt : -1});
    
    res.render("assignTask", {employee: employees});
}

// this is used for creating performance review task 
module.exports.createTask = async function(req, res){
    
    // console.log(req.body)
    const {reviewFor, reviewBy} = req.body;
    
    if(reviewBy == reviewFor) {
        res.redirect('back');
    }
    const task = new Performance({
        reviewBy,
        reviewFor,
    })
    await task.save();
    
    res.redirect('back');
}