$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

(function(global){
  var car={};
  var main="/snippet/main.html"
  function inhtml(selector, html){
    document.querySelector(selector).innerHTML=html;
  }
  function showload(selector){
    inhtml(selector, "<div class='text-center'><img src='load.gif'></div>")
  }
  document.addEventListener("DOMContentLoaded", function(event){
  showload("#maincon");

  $ajaxUtils.sendGetRequest(
  main,
  function (responseText) {
    document.querySelector("#maincon")
      .innerHTML = responseText;
  },
  false);
  })




  global.$car=car;

})(window);



(function fn(){
  
  d=document.getElementById('1').value;
  console.log(d)

  }
  )