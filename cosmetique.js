

document.querySelector("img").addEventListener("mouseenter", func, false);

function func()
{  
   var item = document.getElementById("cosmetique1");
   item.setAttribute("style", "width: 100px;")
}



document.querySelector("img").addEventListener("mouseleave", functi, false);

function functi()
{  
   var item = document.getElementById("cosmetique1");
   item.setAttribute("style", "width: 90px;")
}



function onmouseOver() {
  document.getElementById("semainainesgrossesse").style.transform = "scale(1.04)";

}

function onmouseLeave() {
  document.getElementById("semainainesgrossesse").style.transform = "scale(1)";

}

function onmouseOverr() {
  document.getElementById("calculpoids").style.transform = "scale(1.04)";

}

function onmouseLeavee() {
  document.getElementById("calculpoids").style.transform = "scale(1)";

}





 
 
 

  
 


function calculSemaines(){

  var dateRegles = new Date(document.getElementById('dateInput').value).getTime()
  var dateActuelle = new Date().getTime()
  var tempsGrossesse = dateActuelle - dateRegles
  var joursGrossesse = Math.floor((tempsGrossesse / (1000*60*60*24)))
  var semainesGrossesse = Math.floor((joursGrossesse)/7)
  var joursEnPlusDesSeamaines = Math.floor((joursGrossesse)%7)
 //variables pour le calcul des semaines + jours








   var joursEnPlus = 280;                        //calcul date accouchement
    var cyCle = document.getElementById('browser').value
    if (cyCle == "Je ne sais pas") {
      var joursEnPlus = 280;
    }

    if (cyCle == 27) {
      var joursEnPlus = 279;
    }

    if (cyCle == 28) {
      var joursEnPlus = 280;
    }

    if (cyCle == 29) {
      var joursEnPlus = 281;
    }

    if (cyCle == 30) {
      var joursEnPlus = 282;
    }

    if (cyCle == 31) {
      var joursEnPlus = 283;
    }








   var maDate = document.getElementById('dateInput').value
    var myDate = new Date(maDate);

myDate.setDate((myDate.getDate()+ joursEnPlus));
    
    //document.getElementById("demo").innerHTML = (myDate)

    if (dateRegles) {
      monAccouchement = "La date estimée d'accouchement est le " + myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear()
      conteniteur()
    }
    
    else {
      monAccouchement = ""
    }
    document.getElementById("demo2").innerHTML = (monAccouchement)
    
    //monAccouchement = "La date estimée d'accouchement est le " + myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear()
    //document.getElementById("demo2").innerHTML = (monAccouchement)
     

   











    
    
    
    document.getElementById("demo").innerHTML = "Vous etes enceinte de " + (semainesGrossesse) + " semaines et de " + (joursEnPlusDesSeamaines) + " jours d'aménorrhée"
    





    var list = [
      { date: 3, reading: 0},
      { date: 4, reading: 0},
      { date: 5, reading: 0},
      { date: 6, reading: 0.1},
      { date: 7, reading: 0.5},
      { date: 8, reading: 1},
      { date: 9, reading: 2},
      { date: 10, reading: 3},
      { date: 11, reading: 10},
      { date: 12, reading: 20},
      { date: 13, reading: 30},
      { date: 14, reading: 45},
      { date: 15, reading: 65},
      { date: 16, reading: 110},
      { date: 17, reading: 135},
      { date: 18, reading: 160},
      { date: 19, reading: 200},
      { date: 20, reading: 290},
      { date: 21, reading: 350},
      { date: 22, reading: 400},
      { date: 23, reading: 450},
      { date: 24, reading: 520},
      { date: 25, reading: 600},
      { date: 26, reading: 700},
      { date: 27, reading: 800},
      { date: 28, reading: 870},
      { date: 29, reading: 1000},
      { date: 30, reading: 1200},
      { date: 31, reading: 1400},
      { date: 32, reading: 1600},
      { date: 33, reading: 1800},
      { date: 34, reading: 2000},
      { date: 35, reading: 2200},
      { date: 36, reading: 2400},
      { date: 37, reading: 2600},
      { date: 38, reading: 2700},
      { date: 39, reading: 2800},
      { date: 40, reading: 2900},
      { date: 31, reading: 3000},
    ];
    
    function conteniteur() {
      document.getElementById("conteniteur").style.backgroundColor = "rgba(127, 84, 170, 0.648)"  
      //document.getElementById("conteniteur").classList.add("transformation")
      //document.getElementById("encoreee").classList.remove("tester")
      //document.getElementById("encoreee").classList.add("encore")
      document.getElementById("conteniteur").classList.add("encore")
      document.getElementById("conteniteur").style.right = "50%"
      document.getElementById("conteniteur").style.left = "50%"
     }
   
    // conteniteur()
   // document.getElementById("demo3").innerHTML = "A "+ (semainesGrossesse) + " seamaines d'aménorrhée le poids moyen du foetus est de " + (list[(semainesGrossesse-3)].reading) + " g";
    
 

 

}





function calculSemaines2(){
   var dateRegles = new Date(document.getElementById('dateInput').value).getTime()
   var dateActuelle = new Date().getTime()
   var tempsGrossesse = dateActuelle - dateRegles
   var joursGrossesse = Math.floor((tempsGrossesse / (1000*60*60*24)))
   var semainesGrossesse = Math.floor((joursGrossesse)/7)
   var joursEnPlusDesSeamaines = Math.floor((joursGrossesse)%7)
  
   
   
   document.getElementById("demo2").innerHTML = "Vous etes enceinte de " + (semainesGrossesse) + " semaines et de " + (joursEnPlusDesSeamaines) + " jours"



}


function testPoids(){
var list = [
  { date: 3, reading: "à peine plus de 0 grammes"},
  { date: 4, reading: "à peine plus de 0 grammes"},
  { date: 5, reading: "à peine quelques grammes"},
  { date: 6, reading: 4},
  { date: 7, reading: 10},
  { date: 8, reading: 20},
  { date: 9, reading: 27},
  { date: 10, reading: 35},
  { date: 11, reading: 45},
  { date: 12, reading: 60},
  { date: 13, reading: 70},
  { date: 14, reading: 90},
  { date: 15, reading: 115},
  { date: 16, reading: 145},
  { date: 17, reading: 180},
  { date: 18, reading: 220},
  { date: 19, reading: 270},
  { date: 20, reading: 330},
  { date: 21, reading: 400},
  { date: 22, reading: 470},
  { date: 23, reading: 560},
  { date: 24, reading: 670},
  { date: 25, reading: 785},
  { date: 26, reading: 910},
  { date: 27, reading: 1050},
  { date: 28, reading: 1210},
  { date: 29, reading: 1380},
  { date: 30, reading: 1550},
  { date: 31, reading: 1750},
  { date: 32, reading: 1950},
      { date: 33, reading: 2100},
      { date: 34, reading: 2300},
      { date: 35, reading: 2500},
      { date: 36, reading: 2700},
      { date: 37, reading: 2900},
      { date: 38, reading: 2750},
      { date: 39, reading: 3000},
      { date: 40, reading: 3250},
      { date: 41, reading: 3500},
    
];

document.getElementById("demo2").innerHTML = (list[(semainesGrossesse-3)].reading);

}





















 
 
 

  
 


function calculSemaines3(){

  var dateRegles = new Date(document.getElementById('dateInput2').value).getTime()
  var dateActuelle = new Date().getTime()
  var tempsGrossesse = dateActuelle - dateRegles
  var joursGrossesse = Math.floor((tempsGrossesse / (1000*60*60*24)))
  var semainesGrossesse = Math.floor((joursGrossesse)/7)
  var joursEnPlusDesSeamaines = Math.floor((joursGrossesse)%7)
 //variables pour le calcul des semaines + jours








   var joursEnPlus = 280;                        //calcul date accouchement
    var cyCle = document.getElementById('browser').value
    if (cyCle == "Je ne sais pas") {
      var joursEnPlus = 280;
    }

    if (cyCle == 27) {
      var joursEnPlus = 279;
    }

    if (cyCle == 28) {
      var joursEnPlus = 280;
    }

    if (cyCle == 29) {
      var joursEnPlus = 281;
    }

    if (cyCle == 30) {
      var joursEnPlus = 282;
    }

    if (cyCle == 31) {
      var joursEnPlus = 283;
    }








   var maDate = document.getElementById('dateInput').value
    var myDate = new Date(maDate);

myDate.setDate((myDate.getDate()+ joursEnPlus));
    
    //document.getElementById("demo").innerHTML = (myDate)
 
   
    
    monAccouchement = "La date estimée d'accouchement est le " + myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear()
    // document.getElementById("demo2").innerHTML = (monAccouchement)
     

   











    
    
    
    // document.getElementById("demo").innerHTML = "Vous etes enceinte de " + (semainesGrossesse) + " semaines et de " + (joursEnPlusDesSeamaines) + " jours d'aménorrhée"
    





    var list = [
      { date: 3, reading: "à peine plus de 0", dessin: "https://static.vecteezy.com/system/resources/previews/004/483/681/original/one-continuous-line-drawing-of-whole-healthy-organic-almonds-group-for-garden-logo-identity-fresh-edible-seed-concept-for-fruit-icon-modern-single-line-draw-design-graphic-illustration-vector.jpg", nom:"presque une graine de pavot"},
      { date: 4, reading: "à peine plus de 0", dessin: "https://static.vecteezy.com/system/resources/previews/004/483/681/original/one-continuous-line-drawing-of-whole-healthy-organic-almonds-group-for-garden-logo-identity-fresh-edible-seed-concept-for-fruit-icon-modern-single-line-draw-design-graphic-illustration-vector.jpg", nom:"une graine de pavot"},
      { date: 5, reading: "à peine plus de 0", dessin: "https://static.vecteezy.com/system/resources/previews/010/189/357/original/sesame-seed-line-icon-illustration-vector.jpg", nom: "une graine de sésame"},
      { date: 6, reading: 4, dessin: "https://img.freepik.com/premium-vector/vector-sketch-pile-lentils_574806-1325.jpg?w=2000", nom: "une lentille"},
      { date: 7, reading: 10, dessin: "https://media.istockphoto.com/id/1139440613/vector/coloring-book-vector-hand-drawn-blueberry.jpg?s=612x612&w=0&k=20&c=TU5r464gEJg5barqRkOsTtQK35eEie8Yu6cYCa48K9o=", nom:"une myrtille"},
      { date: 8, reading: 20, dessin:"https://t4.ftcdn.net/jpg/02/47/45/29/360_F_247452938_Q3HwHfajVsRED2ntHRodI2vHOGXS3xvK.jpg", nom: "une framboise"},
      { date: 9, reading: 27, dessin: "https://static.vecteezy.com/system/resources/previews/027/379/438/original/hand-drawn-kids-drawing-cartoon-illustration-grapes-fruit-icon-isolated-on-white-background-vector.jpg", nom:"un raisin"},
      { date: 10, reading: 35, dessin: "https://static.vecteezy.com/system/resources/previews/021/567/728/original/kumquat-hand-drawn-sketch-icon-of-citrus-fruit-isolated-illustration-in-doodle-line-style-vector.jpg", nom:"un kumquat"},
      { date: 11, reading: 45, dessin: "https://media.istockphoto.com/id/1305101919/vector/fig-fruit-drawing-in-sketch-style-hand-drawn-vector-illustration.jpg?s=612x612&w=0&k=20&c=UbTzxs8wgr-F0WnnTkaAQvNzfK2f9imaAMLfIomFuto=", nom:"une figue"},
      { date: 12, reading: 60, dessin: "https://www.creativefabrica.com/wp-content/uploads/2022/09/03/Lemon-sketch-Whole-fruit-with-round-cut-Graphics-37672460-1.png", nom:"un citron"},
      { date: 13, reading: 70, dessin: "https://img.freepik.com/premium-vector/lemon-sketch-whole-fruit-with-round-cut-slices_80590-14156.jpg?w=2000", nom: "un citron"},
      { date: 14, reading: 90, dessin: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRN7MHEdNnRz86IYi7HSB8Q6nEj035V-yUSQ&usqp=CAU", nom:"une pêche"},
      { date: 15, reading: 115, dessin: "https://thumb.ac-illust.com/cc/cc5fb4dd64204d09029620f5d24371b8_t.jpeg", nom:"une pomme"},
      { date: 16, reading: 145, dessin: "https://www.pngitem.com/pimgs/m/543-5430686_avocado-svg-png-icon-free-download-onlinewebfonts-avocado.png", nom:"un avocat"},
      { date: 17, reading: 180, dessin: "https://drawnbyhislight.com/wp-content/uploads/2019/09/How-to-draw-a-pear-18.jpg", nom: "une poire"},
      { date: 18, reading: 220, dessin: "https://i.pinimg.com/564x/69/eb/05/69eb0569e6e32bbf41c8d78bf06b660e.jpg", nom:"une patate douce"},
      { date: 19, reading: 270, dessin: "https://cdn2.momjunction.com/wp-content/uploads/2015/05/Simple-Mango.jpg", nom:"une mangue"},
      { date: 20, reading: 330, dessin: "https://t3.ftcdn.net/jpg/01/68/35/68/360_F_168356893_5OpzqQKnJI817lUTfQ8XZ2xPYh056X72.jpg", nom: "une banane"},
      { date: 21, reading: 400, dessin: "https://img.freepik.com/premium-vector/carrot-sketch-raw-graden-root-healthy-vegetable_80590-14151.jpg", nom: "une carrotte"},
      { date: 22, reading: 470, dessin: "https://img.freepik.com/premium-vector/papaya-fruit-outline-icon-drawing-monochrome-illustration-healthy-nutrition-organic-food-vegetarian-product_202271-1638.jpg", nom: "une papaye"},
      { date: 23, reading: 560, dessin: "https://bujobabe.com/wp-content/uploads/2021/03/how-to-draw-an-eggplant.jpg", nom: "une aubergine"},
      { date: 24, reading: 670, dessin: "https://t4.ftcdn.net/jpg/03/50/49/79/360_F_350497911_kS8PidRoJhvU9SJkNpGnRw11plcCE2go.jpg", nom:"un épi de mais"},
      { date: 25, reading: 785, dessin: "https://img.freepik.com/premium-vector/cauliflower-vegetables-cartoon-cute-kawaii-doodle-coloring-page-drawing-illustration-clipart_51194-595.jpg", nom:"un chou-fleur"},
      { date: 26, reading: 910, dessin: "https://t3.ftcdn.net/jpg/03/95/53/42/360_F_395534216_2sHHf25p4RzHucbTgHCCc4lOBPlEBnS3.jpg", nom:"un concombre"},
      { date: 27, reading: 1050, dessin: "https://img.freepik.com/premium-vector/cauliflower-linear-drawing-white-background_555467-1419.jpg", nom:"un chou-fleur"},
      { date: 28, reading: 1210, dessin: "https://img.freepik.com/premium-vector/fresh-eggplant-whole-sliced-vector-illustration-eggplant-vector-sketch-illustration_231873-3665.jpg", nom:"une aubergine"},
      { date: 29, reading: 1380, dessin: "https://img.freepik.com/premium-vector/one-single-line-drawing-sliced-healthy-organic-butternut-squash-fresh-pumpkin-icon-design-vector_533993-1378.jpg?w=2000", nom:"une courge"},
      { date: 30, reading: 1550, dessin: "https://png.pngtree.com/png-clipart/20230922/original/pngtree-cabbage-vegetable-isolated-coloring-page-for-kids-colour-healthy-kids-vector-png-image_12824624.png", nom: "un chou"},
      { date: 31, reading: 1750, dessin: "https://png.pngtree.com/png-clipart/20230922/original/pngtree-cabbage-vegetable-isolated-coloring-page-for-kids-colour-healthy-kids-vector-png-image_12824624.png", nom: "un chou"},
      { date: 32, reading: 1950, dessin: "https://t4.ftcdn.net/jpg/04/38/94/95/360_F_438949565_0wUMzusC8fDyUeaSnpQUOQlFjt4T96M0.jpg", nom:"un ananas"},
      { date: 33, reading: 2100, dessin:"https://t4.ftcdn.net/jpg/04/38/94/95/360_F_438949565_0wUMzusC8fDyUeaSnpQUOQlFjt4T96M0.jpg", nom: "un ananas"},
      { date: 34, reading: 2300, dessin: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXSw-XyTbB8XGvo5JEW2-aEULnhpbxGFX5A&usqp=CAU", nom: "un melon charentais"},
      { date: 35, reading: 2500, dessin: "https://static.vecteezy.com/system/resources/previews/008/104/794/original/coconut-sketch-hand-drawn-isolated-on-white-background-perfect-for-vintage-style-labels-illustration-vector.jpg", nom:"une noix de coco"},
      { date: 36, reading: 2700, dessin:"https://cdn.vectorstock.com/i/preview-1x/03/25/honeydew-melon-whole-fresh-ripe-sweet-fruit-vector-21770325.jpg", nom:"un melon jaune"},
      { date: 37, reading: 2900, dessin: "https://st4.depositphotos.com/11985054/19752/v/450/depositphotos_197528962-stock-illustration-swiss-chard-greens-drawn-line.jpg", nom:"une blette"},
      { date: 38, reading: 2750, dessin: "https://thumbs.dreamstime.com/b/rhubarb-vector-illustration-hand-drawn-vegetable-cartoon-art-rhubarb-vector-illustration-hand-drawn-vegetable-cartoon-art-pencil-174921712.jpg", nom:"une rhubarbe"},
      { date: 39, reading: 3000, dessin: "https://static.vecteezy.com/system/resources/previews/013/753/539/non_2x/watermelon-drawing-illustration-on-white-background-free-vector.jpg", nom: "une pastèque"},
      { date: 40, reading: 3250, dessin: "https://media.istockphoto.com/id/1314610857/vector/fresh-juicy-slises-parts-of-watermelon-fruit-in-doodle-hand-drawn-style-set-of-vector.jpg?s=612x612&w=0&k=20&c=95sOXQ-QV4K6oUxmTMPHF8JYrftVFP69aeMrfAR3ML8=", nom: "pastèque"},
      { date: 41, reading: 3500, dessin: "https://media.istockphoto.com/id/1314610857/vector/fresh-juicy-slises-parts-of-watermelon-fruit-in-doodle-hand-drawn-style-set-of-vector.jpg?s=612x612&w=0&k=20&c=95sOXQ-QV4K6oUxmTMPHF8JYrftVFP69aeMrfAR3ML8=", nom: "pastèque"},
    ];
var inputt = document.getElementById("saa")
var inputttt = document.getElementById('dateInput2')
var reponsee = "vide"
    var nombreSemAmm = document.getElementById('saa').value


    function imagecreer(sousou) {
      document.getElementById("testee").innerHTML = ""
      var img = document.createElement('img');
      img.setAttribute("class", "foo");
      img.src = list[(sousou)].dessin;
      document.getElementById("testee").appendChild(img) 
      
    }

    var truc = ""
    var sousou = ""
    if (inputttt.value !== '') {
      truc= "A "+ (semainesGrossesse) + " semaines d'aménorrhée le poids moyen du foetus est de " + (list[(semainesGrossesse-3)].reading) + " g. Il est grand comme " + (list[(semainesGrossesse-3)].nom);
         sousou =  ((semainesGrossesse) - 3) 

          }

         else if (inputt.value !== '') {
          truc= "A "+ (nombreSemAmm) + " semaines d'aménorrhée le poids moyen du foetus est de " + (list[(nombreSemAmm-3)].reading) + " g. Il est grand comme " + (list[((nombreSemAmm) - 3)].nom);
          sousou =  ((nombreSemAmm) - 3) 
        }
          else {
            truc= " "
 
          }
        // return document.getElementById("teste").innerHTML = (reponsee)
       document.getElementById("teste").innerHTML = (truc)
       imagecreer(sousou)
       
       function clearInp() {
        var elements = document.getElementsByClassName("input");
        for(var i = 0; i < elements.length; i++){
          elements[i].value = "";
        }
      }  

     // clearInp()

   // return document.getElementById("teste").innerHTML = "A "+ (semainesGrossesse) + " seamaines d'aménorrhée le poids moyen du foetus est de " + (list[(semainesGrossesse-3)].reading) + " g";
    //document.getElementById("teste").innerHTML = "teste" + (dateRegles)
    const container = document.getElementById("testee")
//const img = document.createElement('img');
            //img.src = list[(semainesGrossesse-3)].dessin;
           // container.appendChild(img);
           // img.setAttribute("class", "foo");


         

          // var nombreSemAmm = document.getElementById('saa').value
          // document.getElementById("kou").innerHTML = " " + (nombreSemAmm )
          // document.getElementById("teste").innerHTML = "A "+ (nombreSemAmm) + " seamaines d'aménorrhée le poids moyen du foetus est de " + (list[(nombreSemAmm-3)].reading) + " g";
 
}




//document.getElementById("teste").innerHTML = "A "+ (nombreSemAmm) + " seamaines d'aménorrhée le poids moyen du foetus est de " + (list[(semainesGrossesse-3)].reading) + " g";



































