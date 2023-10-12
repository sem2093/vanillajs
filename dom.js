//innerHTML,getELementById
var time = document.getElementById("clock"); <br>
  time.innerHTML = new Date()

//getElementsByCLassName
function toggle(checked) {
if (check(this).checked = True) { document.getElementsByClassName("lang").checked = True; 
  } else { document.getElementsByClassName("lang").checked = False;} 
}





//set Attribute
var button = document.getElementById("btn");
function on(){button.innerHTML="turn off"; button.setAttribute('onclick','off()');}
var button = document.getElementById("btn");
function off(){button.innerHTML="turn on"; button.setAttribute('onclick','on()');}
