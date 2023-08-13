const User = require('../models/users_schema');
// // for rendering student page 
module.exports.employees = async function(req, res){
 
    const id = req.user._conditions._id;
    const user = await User.findById(id);
    const employees = await User.find({}).sort({createdAt : -1});
    const newEmployees = employees.filter((e)=>  !e._id.equals(user._id));
    res.render("employee_page", {employee: newEmployees});
}
// this function edits employee details
module.exports.editEmployee = async function(req, res){
    const {email, first_name, last_name} = req.body;
    const employee = await User.findOneAndUpdate({email}, {email, first_name, last_name});
    res.redirect('back')
}
// this function deletes employee
module.exports.deleteEmployee = async function(req, res){
    const id = req.params.id;
    const employee = await User.findOneAndDelete(id);
    res.redirect('back')
}
// this function adds employee
module.exports.addEmployee = async function(req, res) {

    // console.log(req.body.email);
    try {
        const {
            first_name,
            last_name,
            email,
            password,
            c_password
        } = req.body;
        if(password != c_password){
            
            res.redirect('back');
        }
        // console.log("hii");
        
        const check = await User.findOne({ email });
        if (check) {
            res.redirect('back');
        }
        
        // const cryptedPassword = bcrypt.hashSync(req.body.password, 12);
        // let tempUsername = first_name + last_name;
        // let newUsername = await validateUsername(tempUsername);
         
        const capitalize = s => s[0].toUpperCase() + s.slice(1)
        
        const user = new User({
            first_name: capitalize(first_name), 
            last_name: capitalize(last_name),
            email,
            password
          
        });
        await user.save(); 
        res.redirect('back')
           
      } catch (error) {  
        res.status(500).json({ message: error.message });
      } 
}
// // for creating students
// module.exports.addStudent = async function(req, res){

//     try {
//         const { 
//             email
//         } = req.body;
    
//         const check = await Student.findOne({ email });
//         // console.log(check);
//         if (check) {

//            return res.redirect('back');
//         } 
        
//         // const cryptedPassword = bcrypt.hashSync(req.body.password, 12);
//         // let tempUsername = first_name + last_name;
//         // let newUsername = await validateUsername(tempUsername);
        
//         const capitalize = s => s[0].toUpperCase() + s.slice(1);
        
//         const student = new Student({
//            ...req.body, name : capitalize(req.body.name)
//         });
//         await student.save(); 
       
//         res.redirect("/student");

           
//       } catch (error) {  
//         res.status(500).json({ message: error.message });
//       } 
// }
// module.exports.deleteStudent = async function (req, res){ 
    
//     const data = req.body.students;
//     if(typeof(data) == "string"){
//         await Student.findByIdAndDelete( data);

//     }else if(typeof(data) == "object"){

//         for(let i = 0; i < data.length; i++){
//            await Student.findByIdAndDelete(data[i]);
//         }
//     }
    
   
//    res.redirect("/student");      

// } 