function registro(){

    var email = $('#inputEmail').val();
    var pass = $('#inputPassword').val();
    if((email==null)|(email==undefined)|(email=='')){
      Swal.fire({
      title: 'Error!',
      text: 'No data in email',
      type: 'error',
      confirmButtonText: 'Bad Input | Code 009'
    })
  }else{
    if((email=='aallanrd@gmail.com')&&(pass=='1234')){
      Swal.fire({
      title: 'You are in!',
      text: 'Great Login Success',
      type: 'success',
      confirmButtonText: 'Go'
    }).then(function(){
        location.replace('inicio.html')
    }).catch(function(reason){
        alert("The alert was dismissed by the user: "+reason);
    });

    }
  }
}
function login(){

    var email = $('#inputEmail').val();
    var pass = $('#inputPassword').val();
    if((email==null)|(email==undefined)|(email=='')){
      Swal.fire({
      title: 'Error!',
      text: 'No data in email',
      type: 'error',
      confirmButtonText: 'Bad Input | Code 009'
    })
  }else{
    if((email=='aallanrd@gmail.com')&&(pass=='1234')){
      Swal.fire({
      title: 'You are in!',
      text: 'Great Login Success',
      type: 'success',
      confirmButtonText: 'Go'
    }).then(function(){
        localStorage.setItem("email", email);
        location.replace('inicio.html');
    }).catch(function(reason){
        alert("The alert was dismissed by the user: "+reason);
    });

    }
  }
}

$( document ).ready(function() {
  var email = localStorage.getItem("email");
  $('#email').html(email);
});
