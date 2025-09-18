// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function rollDice(){
//     let dice1 = getRandomInt(1,6);
//     let dice2 = getRandomInt(1,6);
//     console.log(dice1)
//     console.log(dice2)
//     if (dice1 == 1){
//         document.getElementById("img1").src="Images/images/dice1.png";
//     }
//     else if(dice1 == 2){
//         document.getElementById("img1").src="Images/images/dice2.png";
//     }
//     else if(dice1 == 3){
//         document.getElementById("img1").src="Images/images/dice3.png";
//     }
//     else if(dice1 == 4){
//         document.getElementById("img1").src="Images/images/dice4.png";
//     }
//     else if(dice1 == 5){
//         document.getElementById("img1").src="Images/images/dice5.png";
//     }
//     else{
//         document.getElementById("img1").src="Images/images/dice6.png";
//     }

//     if (dice2 == 1){
//         document.getElementById("img2").src="Images/images/dice1.png";
//     }
//     else if(dice2 == 2){
//         document.getElementById("img2").src="Images/images/dice2.png";
//     }
//     else if(dice2 == 3){
//         document.getElementById("img2").src="Images/images/dice3.png";
//     }
//     else if(dice2 == 4){
//         document.getElementById("img2").src="Images/images/dice4.png";
//     }
//     else if(dice2 == 5){
//         document.getElementById("img2").src="Images/images/dice5.png";
//     }
//     else{
//         document.getElementById("img2").src="Images/images/dice6.png";
//     }

//     if (dice1 < dice2){
//         document.getElementById("the")
//     }
// }

// document.getElementById("roll").addEventListener("click", rollDice())

function rollDice(){
    var randNum = Math.floor(Math.random() * 6) + 1;
    var randNum2 = Math.floor(Math.random() * 6) + 1;
    var imgPath = "Images/images/dice" + randNum + ".png";
    var imgPath2 = "Images/images/dice" + randNum2 + ".png";
    console.log(imgPath)
    console.log(imgPath2)
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];
    image1.setAttribute("src", imgPath);
    image2.setAttribute("src", imgPath2);

    if(randNum > randNum2) document.getElementById("the").innerHTML = "Player 1 Wins";
    if(randNum < randNum2) document.getElementById("the").innerHTML = "Player 2 Wins";
    if(randNum == randNum2) document.getElementById("the").innerHTML = "Draw";
}

document.getElementById("roll").onclick = rollDice

