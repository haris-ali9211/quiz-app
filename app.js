var questionsArray =[{

    question:"Who is the inventor of javascript?",
    answer:"Brendan eich",
    options:[
        "Dennis Ritchie",
        "Brendan Eich",
        "James Gosling",
        "Guido van Rossum"
    ]
},
{

    question:"Who is the inventor of Apple?",
    answer:"steve jobs",
    options:[
        "Dennis Ritchie",
        "Steve Jobs",
        "James Gosling",
        "Guido van Rossum"
    ]
},
{

    question:"Who is the inventor of Google?",
    answer:"larry page",
    options:[
        "Dennis Ritchie",
        "Steve Jobs",
        "Larry Page",
        "Guido van Rossum"
    ]
},
{

    question:"Who is the inventor of Samsung?",
    answer:"lee byung-chul",
    options:[
        "Dennis Ritchie",
        "Steve Jobs",
        "Larry Page",
        "Lee Byung-chul"
    ]
}
]

function vlidate(){
    sessionStorage.clear();
    var input = document.getElementById("userName");
    if(input.value == "" || input.value == " "){
        alert("User Name Required!");
    }
    else {
        sessionStorage.setItem("name",input.value);
        startQuiz();
    }
}





function startTime(){
    var startingMin = 2;
    var time = startingMin * 60;
    var timerPara = document.getElementById("timer");

    function updateCountDown(){
        var minutes = Math.floor(time / 60)
        var seconds = time % 60;
        
        if(seconds < 10){
            seconds = "0"+seconds;
        }
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        
        timerPara.innerHTML = minutes + ":" + seconds;
        time--;

        if(minutes == 00 && seconds == 00){
            alert("Oopps!! Time Up");
            window.location.href = "result.html";
        }
    }
    setInterval(updateCountDown, 1000);
}




var questionCount = 0;
var score =0;
var currentAns = "";

function renderQuestion(x){
    var questionElement = document.getElementById("divQuestion");
    questionElement.innerHTML = "Q"+(x+1)+". "+questionsArray[x].question;
    var optionsElement = document.getElementsByClassName("optionElement");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].innerHTML = questionsArray[x].options[i].toUpperCase();
    }
}

function putActiveClass(x){
    
    var optionsElement = document.getElementsByClassName("card-text");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].classList.remove("active")
    }
    optionsElement[x].classList.add("active");
    console.log(optionsElement[x])
}

function removeActiveClass(){
    var optionsElement = document.getElementsByClassName("card-text");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].classList.remove("active")
    }
}

function checkAnswer(x){
    var userAns = document.querySelector(".active");
    var selectedAns = userAns.innerHTML.toLowerCase()
    var rightAns = questionsArray[x].answer;
    console.log(rightAns, selectedAns)
    if(selectedAns == rightAns){
        score += 10;
        console.log(score);
    }
    
}   

function showNextQuestion(){

    checkAnswer(questionCount);
    questionCount++;
    if(questionCount <= questionsArray.length-1){
        renderQuestion(questionCount);

    }
    removeActiveClass();


    if(questionCount == questionsArray.length){
        document.write("<h1 class='class=text-center my-4'>Result</h1>");
        document.write("You scored "+ score +" out of 40");
        document.write("<br>Reload the page to start over");
    }
    console.log(questionCount)
    console.log(score)
}

renderQuestion(questionCount);