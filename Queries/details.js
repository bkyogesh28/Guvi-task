$(document).ready(function(){
    $("#update").click(function(){
        $.ajax({
            url:"details.php",
            method:"post",
            data:$("#details").serialize(),
            success:function(response){
                if(response == "UpdateS"){
                    window.alert("Updation Successfull")
                }else{
                    window.alert("Updation Failed")
                }
            }
        })
    })
})