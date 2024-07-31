
$("#quiz-01").hide();
$("#quiz-02").hide();
$("#quiz-03").hide();
$("#quiz-04").hide();
$("#quiz-05").hide();

function toggle1(){
    $("#quiz-01").toggle();
}
function toggle2(){
    $("#quiz-02").toggle();
}
function toggle3(){
    $("#quiz-03").toggle();
}
function toggle4(){
    $("#quiz-04").toggle();
}
function toggle5(){
    $("#quiz-05").toggle();
}
let score = 0;

function showScore(){
  const totalScore = document.getElementById('score-message');
    
  if(score === 5) {
    totalScore.innerHTML = score + "点：満点！おめでとう！"
  } else if(score === 4) {
    totalScore.innerHTML = score + "点：あともう一息！";
  } else if(score === 3) {
    totalScore.innerHTML = score + "点：いい感じ！";
  } else if(score === 2) {
    totalScore.innerHTML = score + "点：まだまだできる！";
  } else if(score === 1) {
        totalScore.innerHTML = score + "点：もう少し頑張ろう";
  } else {
    totalScore.innerHTML = score + "点：残念";
  }   
}

function answerQuiz1(frm){
    var playerChoice = $('input[name="answer"]:checked').val();
    console.log("1問目：" + playerChoice + "を選択しました");

    if (playerChoice === "a") {
        alert("残念！");
    } else if (playerChoice === "b") {
        alert("残念！");
    } else if (playerChoice === "c") {
        alert("残念！");
    } else if (playerChoice === "d") { 
        score++;
        alert("大正解！");
    } else {
        alert("1問目の答えを入力してください");
    }
    console.log("現在の点数：" + score); 
}
function answerQuiz2(frm){
    var playerChoice = $('input[name="answer"]:checked').val();
    console.log("2問目：" + playerChoice + "を選択しました");

    if (playerChoice === "a") {
        score++;
        alert("大正解！");
    } else if (playerChoice === "b") {
        alert("残念！");
    } else if (playerChoice === "c") {
        alert("残念！");
    } else if (playerChoice === "d") {
        alert("残念！");
    } else {
        alert("2問目の答えを入力してください");
    }
    console.log("現在の点数：" + score); 
}
function answerQuiz3(frm){
    var playerChoice = $('input[name="answer"]:checked').val();
    console.log("3問目：" + playerChoice + "を選択しました");

    if (playerChoice === "a") {
        alert("残念！");
    } else if (playerChoice === "b") {       
        score++;
        alert("大正解！");
    } else if (playerChoice === "c") {
        alert("残念！");
    } else if (playerChoice === "d") {
        alert("残念！");
    } else {
        alert("3問目の答えを入力してください");
    }
    console.log("現在の点数：" + score); 
}
function answerQuiz4(frm){
    var playerChoice = $('input[name="answer"]:checked').val();
    console.log("4問目：" + playerChoice + "を選択しました");

    if (playerChoice === "a") {
        alert("残念！");
    } else if (playerChoice === "b") {
        alert("残念！");
    } else if (playerChoice === "c") {
        alert("残念！");
    } else if (playerChoice === "d") {
        score++;
        alert("大正解！");
    } else {
        alert("4問目の答えを入力してください");
    }
    console.log("現在の点数：" + score); 
}
function answerQuiz5(frm){
    var playerChoice = $('input[name="answer"]:checked').val();
    console.log("5問目：" + playerChoice + "を選択しました");

    if (playerChoice === "a") {
        alert("残念！");
    } else if (playerChoice === "b") {
        alert("残念！");
    } else if (playerChoice === "c") { 
        score++;
        alert("大正解！");
    } else if (playerChoice === "d") {
        alert("残念！");
    } else {
        alert("5問目の答えを入力してください");
    }
    console.log("現在の点数：" + score); 
}