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
        location.replace('inicio/inicio.html')
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
        localStorage.setItem("session", "Opened");
        location.replace('inicio/inicio.html');
    }).catch(function(reason){
        alert("The alert was dismissed by the user: "+reason);
    });

    }
  }
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function loadT(idTorneo){

  var name = $('#torneo-'+idTorneo).html();
  $('#torneo').html(name);
}

$( document ).ready(function() {

  includeHTML();

  setTimeout(function(){
      var email = localStorage.getItem("email");
      if((email==null)|(email==undefined)|(email=='')){
          $('#email').html('Not logged in');
      }else{
        $('#email').html(email);
      }
  }, 100);

  });
