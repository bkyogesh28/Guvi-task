$(document).ready(function(){
    $.ajax({
        url:"details1.php",
        method:"post",
        dataType:"json",
        success:function(data){
            let da=''
            $.each(data,function(key,value){
                da+=` <div class="panel panel-default">
                <div class="panel-heading">
                <h4 class="panel-title">Details</h4>
                </div>
                <div class="panel-body">
                  <table class="table profile__table">
                    <tbody>
                      <tr>
                        <th><strong>Age</strong></th>
                        <td>${value['age']}</td>
                      </tr>
                      <tr>
                        <th><strong>Number</strong></th>
                        <td>${value['number']}</td>
                      </tr>
                      <tr>
                        <th><strong>Role</strong></th>
                        <td>${value['role']}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <button type="button" class="btn btn-primary" id="logout" href="logout.php" style="color: white;">Logout</button>`
            });
            $("#det").append(da)
        }

    })
})