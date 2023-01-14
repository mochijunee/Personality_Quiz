/*Add your JavaScript here*/

var cruzScore = 0; // Store Cruz's score
var lloydScore = 0; // Store Lloyd's score
var teddyScore = 0; // Store Teddy's score

var questionCount = 0; // Store the number of answers clicked on

// Store HTML elements using the DOM
var result = document.getElementById("result");
var displayResult = document.getElementById("displayResult");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", cruz);
q1a2.addEventListener("click", lloyd);
q1a3.addEventListener("click", teddy);

q2a1.addEventListener("click", cruz);
q2a2.addEventListener("click", lloyd);
q2a3.addEventListener("click", teddy);

q3a1.addEventListener("click", cruz);
q3a2.addEventListener("click", lloyd);
q3a3.addEventListener("click", teddy);

q4a1.addEventListener("click", cruz);
q4a2.addEventListener("click", lloyd);
q4a3.addEventListener("click", teddy);

q5a1.addEventListener("click", cruz);
q5a2.addEventListener("click", lloyd);
q5a3.addEventListener("click", teddy);

q6a1.addEventListener("click", cruz);
q6a2.addEventListener("click", lloyd);
q6a3.addEventListener("click", teddy);

// Listen for click on restart button and call function if clicked
restart.addEventListener("click", restartQuiz);

// Track cruz score and check if quiz is complete
function cruz() {
  cruzScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "cruzScore = " + cruzScore);

  if (questionCount == 6) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Track lloyd score and check if quiz is complete
function lloyd() {
  lloydScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "lloydScore = " + lloydScore);

  if (questionCount == 6) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Track teddy score and check if quiz is complete
function teddy() {
  teddyScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "teddyScore = " + teddyScore);

  if (questionCount == 6) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Update quiz result
function updateResult() {
  displayResult.addEventListener("click", display);
}

function display(){
  if (cruzScore >= 3) {
    result.innerHTML = "You are Cruz! You're probably the sunshine of your friend group because of your positivity, friendliness, and listening skills. Your openness to meeting new people and your good first impressions are some of your stand-out qualities.";
    console.log("You are Cruz! You're probably the sunshine of your friend group because of your positivity, friendliness, and listening skills. Your openness to meeting new people and your good first impressions are some of your stand-out qualities.");
  } else if (lloydScore >= 3) {
    result.innerHTML = "You are Lloyd! You're calm, cool, and collected, but you also have great social skills. Despite your nonchalant exterior, you love spending time with your favorite people (is physical touch your love language?) and you care about them deeply. You're definitely the funny one of the group, and your humor comes effortlessly.";
    console.log("You are Lloyd! You're calm, cool, and collected, but you also have great social skills. Despite your nonchalant exterior, you love spending time with your favorite people (is physical touch your love language?) and you care about them deeply. You're definitely the funny one of the group, and your humor comes effortlessly.")
  } else if (teddyScore >= 3) {
    result.innerHTML = "You are Teddy! You are the ultimate emo kid with trust issues and anger boiling on the inside. You might have had a rough past, but you're happy and loving with the right people. You're used to spending a lot of alone time, but you do have a small circle of people you like to be with.";
    console.log("You are Teddy! You are the ultimate emo kid with trust issues and anger boiling on the inside. You might have had a rough past, but you're happy and loving with the right people. You're used to spending a lot of alone time, but you do have a small circle of people you like to be with.");
  } else {
    result.innerHTML = "How interesting, you're an exact mix of all 3! You're friendly and positive like Cruz and funny and cool like Lloyd. However, you have a dark side like Teddy (#broken).";
    console.log("How interesting, you're an exact mix of all 3! You're friendly and positive like Cruz and funny and cool like Lloyd. However, you have a dark side like Teddy (#broken).");
  }
}

// Restart quiz
function restartQuiz() {
  result.innerHTML = "You are a...";
  questionCount = 0;
  cruzScore = 0;
  lloydScore = 0;
  teddyScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "lloydScore = " + lloydScore + "\t" + "cruzScore = " + cruzScore + "\t" + "teddyScore = " + teddyScore);
  enableQuestions();
}

// Disable buttons after used
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", disableQ5);

q6a1.addEventListener("click", disableQ6);
q6a2.addEventListener("click", disableQ6);
q6a3.addEventListener("click", disableQ6);

function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
  q1a3.disabled = true;
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true;
  q2a3.disabled = true;
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
  q3a3.disabled = true;
}

function disableQ4() {
  q4a1.disabled = true; 
  q4a2.disabled = true; 
  q4a3.disabled = true;
}

function disableQ5() {
  q5a1.disabled = true; 
  q5a2.disabled = true; 
  q5a3.disabled = true;
}

function disableQ6() {
  q6a1.disabled = true;
  q6a2.disabled = true;
  q6a3.disabled = true;
}

function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q1a3.disabled = false;
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q2a3.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q3a3.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q4a3.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
  q5a3.disabled = false;
  q6a1.disabled = false;
  q6a2.disabled = false;
  q6a3.disabled = false;
}


