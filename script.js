// Young man, and young woman, create a function called
// andHisNameIsJohnCena... GO!
var questionOneCorrect = null;
var questionTwoCorrect = null;
var questionThreeCorrect = null;
var questionFourCorrect = null;
var questionFiveCorrect = null;
var questionSixCorrect = null;
var questionSevenCorrect = null;
var questionEightCorrect = null;
var questionNineCorrect = null;
var questionTenCorrect = null;

function andHisNameIsJohnCena() {
    document.write("AND HIS NAME IS JOHN CENA!!!");
    document.write('<iframe width="560" height="315" src="https://www.youtube.com/embed/g6EnrLlofL0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    var vid = document.getElementById("myVideo");
    vid.autoplay = true;
    vid.load(); 
}
function answer(questionNumber,ans) {
    if (questionNumber==1 && ans=="Nihonium") {
        questionOneCorrect = true;
        alert("Correct! I didn't think you were smart enough to get it. Give yourself a pat on the back.");
    } else if (questionNumber==1 && ans=="Johncenium") {
        andHisNameIsJohnCena();
    } else if (questionNumber==1) {
        questionOneCorrect = false;
        alert("Get rekt m8.")
    }
}
    
