$(document).ready(function()  {
  $("form").submit(function(event)  {
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    if(sideC >= sideB || sideA >= sideC){
      if(sideA === sideB || sideA === sideC){
        if(sideB === sideC){
          $("#oneSide,#twoSide,#nat").hide();
          $("#threeSide").show();
        }else {
          $("#oneSide,#threeSide,#nat").hide();
          $("#twoSide").show();
        }
      }else{
        $("#twoSide,#threeSide,#nat").hide();
        $("#oneSide").show();
      }
    }else {
      $("#oneSide,#twoSide,#threeSide").hide();
      $("#nat").show();
    };
    event.preventDefault();
  });
});
