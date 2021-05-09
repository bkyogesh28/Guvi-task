$(document).ready(function(){
    var data = $("f-register").serialize();
    $("#f-register").validate({
		rules:
		{
			username: {
				required: true,
				minlength: 3
			},
            email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 8,
				maxlength: 15
			},
			
			errorPlacement: function(error, element) {
				error.appendTo('#err');
			}
		},
		messages:
		{
			name: "Name is a precious one",
			password: {
				required: "please provide a password",
				minlength: "Give a Strong Password"
			},
			email: "please enter a valid email address",
			
		},
		submitHandler: formHandler
	});
    function formHandler(){
       
        $.ajax({
            url: "register.php",
            type: "POST",
            dataType:"text",
            data: $('#f-register').serialize(),
            success: function(response){
                if(response == "Successfuly Registered"){
                    $("#display-success").text(response)
                }
            },
            error:function(err){
                window.alert(err)
            }
    
        })
    
  
    }
    
})