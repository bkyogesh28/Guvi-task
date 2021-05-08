$(document).ready(function(){
    $.ajax({
        url:"account.php",
        method:"POST",
        dataType:'json',
        success:function(data){
            let profile=''
            $.each(data,function(key,value){
              profile+=` <div class="container">
              <div class="row">
                    <div class="col-xs-12 col-sm-9">
                      
                     
                      <div class="panel panel-default">
                        <div class="panel-heading">
                        <h4 class="panel-title">User profile</h4>
                        </div>
                        <div class="panel-body">
                          <div class="profile__avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="...">
                          </div>
                          <div class="profile__header">
                            <h4> <small></small></h4>
                          </div>
                        </div>
                      </div>
              
                    <br></br>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                        <h4 class="panel-title" style="font-style: italic;font-weight: bolder;">User info</h4>
                        </div>
                        <div class="panel-body">
                          <table class="table profile__table">
                            <tbody>
                              <tr>
                                <th><strong>Name</strong></th>
                                <td>${value['name']}</td>
                              </tr>
                              <tr>
                                <th><strong>Email ID</strong></th>
                                <td>${value['email']}</td>
                              </tr>
                             
                            </tbody>
                          </table>
                        </div>
                      </div>
              
                   </div>
                  </div>
              </div>`
            });
            $("#profile").append(profile)
        }
    })
})