(function($){
    "use strict";
    // Mobile menu
    jQuery('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });





    $(document).ready(function() {
      $('select').niceSelect();
    });



})(jQuery);







//  var acc = document.getElementsByClassName("dropdown");
//  var i;
//  for (i = 0; i < acc.length; i++) {
//    acc[i].addEventListener("click", function() {
//      this.classList.toggle("active");
//      var panel = this.nextElementSibling;
//      if (panel.style.display === "block") {
//        panel.style.display = "none";
//      } else {
//        panel.style.display = "block";
//      };
//    });
//  }



