function showInp() {
   var getSelectValue = document.getElementById("location").value;
    switch (getSelectValue) {
      case 'AJKatzenmaier':
         document.getElementById("map-principal").style.display = "none";
         document.getElementById("map-Katz").style.display = "inline-block";
         document.getElementById("map-greenbay").style.display = "none";
         document.getElementById("map-Howar").style.display = "none";
         document.getElementById("map-Marjorie").style.display = "none";
         document.getElementById("map-north").style.display = "none";
         document.getElementById("map-south").style.display = "none";
         break;
      case 'Greenbay':
         document.getElementById("map-principal").style.display = "none";
         document.getElementById("map-greenbay").style.display = "inline-block";
         document.getElementById("map-Katz").style.display = "none";
         document.getElementById("map-Howar").style.display = "none";
         document.getElementById("map-Marjorie").style.display = "none";
         document.getElementById("map-north").style.display = "none";
         document.getElementById("map-south").style.display = "none";
         break;
      case 'Howard A Yeager':
         document.getElementById("map-Howar").style.display = "inline-block";
         document.getElementById("map-principal").style.display = "none";
         document.getElementById("map-Katz").style.display = "none";
         document.getElementById("map-greenbay").style.display = "none";
         document.getElementById("map-Marjorie").style.display = "none";
         document.getElementById("map-north").style.display = "none";
         document.getElementById("map-south").style.display = "none";
         break;
      case 'Marjorie P Hart':
         document.getElementById("map-principal").style.display = "none";
         document.getElementById("map-Marjorie").style.display = "inline-block";
         document.getElementById("map-Katz").style.display = "none";
         document.getElementById("map-greenbay").style.display = "none";
         document.getElementById("map-Howar").style.display = "none";
         document.getElementById("map-north").style.display = "none";
         document.getElementById("map-south").style.display = "none";
         break;
      case 'North':
         document.getElementById("map-principal").style.display = "none";
         document.getElementById("map-north").style.display = "inline-block";
         document.getElementById("map-Katz").style.display = "none";
         document.getElementById("map-greenbay").style.display = "none";
         document.getElementById("map-Marjorie").style.display = "none";
         document.getElementById("map-south").style.display = "none";
         break;
      case 'South':
         document.getElementById("map-principal").style.display = "none";
         document.getElementById("map-south").style.display = "inline-block";
         document.getElementById("map-Katz").style.display = "none";
         document.getElementById("map-greenbay").style.display = "none";
         document.getElementById("map-Howar").style.display = "none";
         document.getElementById("map-Marjorie").style.display = "none";
         document.getElementById("map-north").style.display = "none";
         break;
   }

}