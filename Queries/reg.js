$(document).ready(function(){
   $("#submit").click(function(){
    // var name=$("#name").val();
    // var email=$("#email").val();
    // var pass=$("#pass").val();
    // var dat=name+email+pass;
    $("#f-register").validate({
		rules:
		{
			name: {
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
		
		},
		
	});
    
    $.ajax({
        url: "register.php",
        method: "post",
        data:$("#f-register").serialize(),
        success:function(response){
            if (response == "RegisterSuccess"){
                $("#display-success").html("<ul>"+"User Saved"+"</ul>");
                $("#display-success").css("display","block");
            } else {
                $("#display-error").html("<ul>"+"Registration Failed"+"</ul>");
                $("#display-error").css("display","block");
            }
        }
   });
//   console.log(name+" ,"+email+" ,"+pass)
     });
});
