let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене

let main= document.querySelector(".main"); //главная локация
let school = document.querySelector(".school"); //картинка школы
let forge = document.querySelector(".mastery");
let arena = document.querySelector(".arena");

let location2 = document.querySelector(".location2"); //локация 2
let location3 = document.querySelector(".location3"); //локация 3
let location4 = document.querySelector(".location4");
let location5 = document.querySelector(".location5");

let nojniBox = document.querySelector(".nojni"); //ачивка ножны
let swordBox = document.querySelector(".sword"); //ачивка ножны
let shieldBox = document.querySelector(".shield");
let checker = 0
let button = document.querySelectorAll(".button1");
let entity = document.querySelectorAll(".entity");
let kill = 0
let bossbatle = 1
let cup = document.querySelectorAll(".cup");
let och = 1
let win = document.querySelector(".win");

let random = function(arg){
        let rand = Math.random() * arg
        let round = Math.round(rand)
        return round
}

school.onclick = function(){
	let rand = Math.random() * 5
     let round = Math.round(rand)
	let random1 = round
	main_player.style.top = "22%";
	main_player.style.left = "74%";


	function changeLocation2(){
		main.style.display = "none"
		body.style.backgroundImage = "url(vaultbg.png)"
		location2.style.display = "block"
	}
	     cup[random1].name = "truth"
	     if (cup[random1].name = "truth") {
             cup[random1].style.backgroundImage = "url(true.png)"
	     }
          cup[random1].onclick = function(){
             if (cup[random1].name = "truth") {
             main.style.display = "block"
             body.style.backgroundImage = "url(bg1.png)"
	        location2.style.display = "none"
	        body.style.backgroundSize = "Cover"
	        checker = checker + 1
	        if (checker==1){
	         nojniBox.style.display = "block"
             } else if(checker==2){
              swordBox.style.display = "block"    
	        } else if(checker==3){
              shieldBox.style.display = "block"
              win.style.display = "block"
              shieldBox.style.display = "none"
              swordBox.style.display = "none"  
              nojniBox.style.display = "none"  
             }
          }
          }
      
     

	setTimeout(changeLocation2, 1000);

}
forge.onclick = function(){
     main_player.style.top = "66%";
	main_player.style.left = "42%";

	function changeLocation3(){
		main.style.display = "none"
		body.style.backgroundImage = "url(trbg.jpg)"
		location3.style.display = "block"
	}
	setTimeout(changeLocation3, 1000);
}
button[0].onclick = function(){
  if (och == 2) {
  	och = 3
  } else {
  	main.style.display = "block"
     body.style.backgroundImage = "url(bg1.png)"
	location3.style.display = "none"
	body.style.backgroundSize = "cover"
  }
}
button[1].onclick = function(){
  if (och == 1) {
  	och = 2
  } else {
  	main.style.display = "block"
     body.style.backgroundImage = "url(bg1.png)"
	location3.style.display = "none"
	body.style.backgroundSize = "cover"
  }
}
button[2].onclick = function(){
  if (och == 3) {
  	och = 4
  	main.style.display = "block"
     body.style.backgroundImage = "url(bg1.png)"
	location3.style.display = "none"
	body.style.backgroundSize = "cover"
	checker = checker + 1
	if (checker==1){
	  nojniBox.style.display = "block"
     } else if(checker==2){
       swordBox.style.display = "block"    
	} else if(checker==3){
       shieldBox.style.display = "block"
       win.style.display = "block"
       shieldBox.style.display = "none"
       swordBox.style.display = "none"  
       nojniBox.style.display = "none"  
     }
  }else {
  	main.style.display = "block"
     body.style.backgroundImage = "url(bg1.png)"
	location3.style.display = "none"
	body.style.backgroundSize = "cover"
  }
}

arena.onclick = function(){
     main_player.style.top = "25%";
	main_player.style.left = "37%";
	function changeLocation4(){
		main.style.display = "none"
		body.style.backgroundImage = "url(wombbg.jpg)"
		location4.style.display = "block"
	}
	setTimeout(changeLocation4, 1000);
	setInterval(entitychange, 750)
     for(let i=0; i<5; i=i+1){
      entity[i].onclick = function(){
	  entity[i].style.display = "none"
       kill = kill + 1
       if(kill == 6){
        main.style.display = "block"
        body.style.backgroundImage = "url(bg1.png)"
	   location4.style.display = "none"
	   body.style.backgroundSize = "cover"
	   checker = checker + 1
	   if (checker==1){
	    nojniBox.style.display = "block"
        } else if(checker==2){
         swordBox.style.display = "block"    
	   } else if(checker==3){
         shieldBox.style.display = "block"
         win.style.display = "block"
         shieldBox.style.display = "none"
         swordBox.style.display = "none"  
         nojniBox.style.display = "none"  
        }
       }
      }
     }
     function entitychange(){
      for(let i=0; i<5; i=i+1){
	  entity[i].style.top = random(950) + "px";
	  entity[i].style.left = random(1000) + "px";
      }
     }
}


