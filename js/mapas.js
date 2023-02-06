function showInp(){
   
   var getSelectValue = document.getElementById("location").value;
    if(getSelectValue=="AJKatzenmaier"){
       document.getElementById("map-principal").style.display = "none";
      document.getElementById("map-Katz").style.display = "inline-block";
    }
     }