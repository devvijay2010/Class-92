var player1name = localStorage.getItem("player1_name");
var player2name = localStorage.getItem("player2_name");

document.getElementById('player1_name').innerHTML = player1name + " : ";
document.getElementById('player2_name').innerHTML = player2name+ " : ";
var player1score = 0;
var player2score = 0;
document.getElementById('player1_score').innerHTML =  player1score;
document.getElementById('player2_score').innerHTML = player2score;


document.getElementById('player_question').innerHTML = 'Question Turn : ' + player1name;
document.getElementById('player_answer').innerHTML = 'Answer Turn : ' + player2name;

function send()
{
    var getword = document.getElementById('word').value;
    var word = getword.toLowerCase();

    var charAt1 = word.charAt(1);

    var length = Math.floor(word.length/2);

    var charAt2 = word.charAt(length);

    var length2 = word.length - 1;

    var charAt3 = word.charAt(length2);


    var remove1 = word.replace(charAt1, "_");
    var remove2 = remove1.replace(charAt2, "_");
    var remove3 = remove2.replace(charAt3, "_");

    console.log(remove3);

    var question = "<h3 id = 'word_display'> Q:" + remove3 + "</h3>";
    var answer = "<br>Answer <input id='inputcheckbox' type = 'text'>";
    var button = "<br><br><button type = 'btn btn-info' onclick = 'check()'>Check</button>";

    document.getElementById('output').innerHTML = question + answer + button;
    document.getElementById('word').value = "";

}
var question_turn = "player1";
var answer_turn = "player2";

function check(){
    var get_answer = document.getElementById("inputcheckbox").value;
    var answer = get_answer.toLowerCase();

    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1score = player1score + 1;
            document.getElementById("player1_score").innerHTML = player1score;
        }
        else
        {
            player2score = player2score + 1;
            document.getElementById("player2_score").innerHTML = player2score;
        }
    }

    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn = " + player2name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn = " + player1name;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn = " + player2name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn = " + player1name;
    }
    document.getElementById("output").innerHTML = "";
}
