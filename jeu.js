var realNumber =  Math.floor(Math.random() * Math.floor(100)+1);;
var essaieMax=10;
var essaie=0;

alert("tu as "+essaieMax+" tentatives! ");

 function verification(){
    
    
 	var number = document.forms['jeu']['number'].value;
 	
	      if (number==null || number=="") {
				alert("vous devez entrer un nombre");
			 }
			 else if (number>100 || number<1) {
			 	alert("le nombre doit etre compris entre 1 et 100");
			}
			else if (number>realNumber) {
				essaie++;
				alert("le nombre indiqué est trop grand , tentative: "+essaie);
			}
			else if (number<realNumber) {
				essaie++;
				alert("le nombre indiqué est trop petit, tentative:  "+essaie);
			}
			else if (number==realNumber) {
				alert("Vous avez gagné!");
				realNumber = Math.floor(Math.random() * 10);
				essaie=0;
				alert("pret?");
				alert("tu as "+essaieMax+" tentatives! ");
			}
			if (essaie==essaieMax){
					alert(" perdu! :( la reponse etait : "+realNumber);
					realNumber = Math.floor(Math.random() * 10);
					essaie=0;
					alert("pret?");
					alert("tu as "+essaieMax+" tentatives! ");
			}

	
	 return false;

}
