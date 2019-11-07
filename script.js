function modifyText1() {
    var first = document.getElementById("text");
      first.firstChild.nodeValue = "You clicked First button";
  }
  var el = document.getElementById("push-first");
  el.addEventListener("click", modifyText1, false);
  

  function modifyText2() {
    var first = document.getElementById("text");
      first.firstChild.nodeValue = "You clicked Second button";
  }
  var el = document.getElementById("push-second");
  el.addEventListener("click", modifyText2, false);


function modifyText3() {
    var first = document.getElementById("text");
      first.firstChild.nodeValue = "You clicked Third button";
  }
  var el = document.getElementById("push-third");
  el.addEventListener("click", modifyText3, false);


    