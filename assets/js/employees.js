
const addBtn = $('#add_btn');
const cancelBtn = $('.cancel');
const employeeItems = $(".edit_btn");
const list = $('#list');
const add = $('#add');
const edit = $('#edit');
const firstName = $('#first')
const lastName = $('#last')
const email = $('#mail')


// event handler that opens employee adding form
addBtn.click(
    function(){
        
        // console.log("yes");
        list.css("display", "none")
        add.css("display", "block")
    }
    )

// event handler that cancels employee adding form and takes back to the previous page
cancelBtn.click(
    function(){
        add.css("display", "none")
        edit.css("display", "none")
        list.css("display", "block")
       
   }
)

// event handler that handles all edit of employees 
    employeeItems.click(
        function(e){
            list.css("display", "none")
            edit.css("display", "block")
            // console.log(e.currentTarget.attributes.first_name.value)
            firstName.val(e.currentTarget.attributes.first_name.value);
            lastName.val(e.currentTarget.attributes.last_name.value);
            email.val(e.currentTarget.attributes.email.value);
        }
 )
