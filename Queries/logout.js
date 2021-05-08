$(document).ready(function(){
    $("#logout").click(function(){
        $.ajax({
            url:"logout.php",
            method:"POST",
            Success:function(response){
                if(response == "LogoutSuccess"){
                    $("#logout").append("onclick='localStorage.clear();'")
                    $("#display-success").html("<ul>"+"Logout Successfull"+"</ul>");
                    $("#display-success").css("display","block");
                }else{
                    window.alert("Logout failed")
                }
            }
        })
    })
})