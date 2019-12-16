function books(){
  document.getElementById("book").style.visibility="visible";
  document.getElementById("movie").style.visibility="hidden";
  document.getElementById("musil").style.visibility="hidden";
  document.getElementById("game").style.visibility="hidden";
}

function movies(){
  document.getElementById("book").style.visibility="hidden";
  document.getElementById("movie").style.visibility="visible";
  document.getElementById("musil").style.visibility="hidden";
  document.getElementById("game").style.visibility="hidden";
}

function musiks(){
  document.getElementById("book").style.visibility="hidden";
  document.getElementById("movie").style.visibility="hidden";
  document.getElementById("musil").style.visibility="visible";
  document.getElementById("game").style.visibility="hidden";
}

function games(){
  document.getElementById("book").style.visibility="hidden";
  document.getElementById("movie").style.visibility="hidden";
  document.getElementById("musil").style.visibility="hidden";
  document.getElementById("game").style.visibility="visible";
}
