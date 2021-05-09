$(document).ready(function(){
    $("#submit").click(function(){
        var email=$("#email").val();
        var pass=$("#password").val();
        var res = 'email=' + email + '&password=' + pass;
        if(email==''||pass==''){
            $("#display-error").html("<ul>"+"Login Failed"+"</ul>");
            $("#display-error").css("display","block");
         
        }else{
        $.ajax({
            url:"login.php",
            type:"POST",
            cache:false,
            data:res,
            success:function(response){
                if(response == "LoginSuccess"){
                    var stremail = localStorage.setItem('email', email);
                    $("#display-success").html("<ul>"+"Login Successfull"+"</ul>");
                    $("#display-success").css("display","block");
                    window.location.href = "dashboard.html";
                }else{
                    $("#display-error").html("<ul>"+"Login Failed"+"</ul>");
                    $("#display-error").css("display","block");
                }
            }
        })
    }
    })
    
    });