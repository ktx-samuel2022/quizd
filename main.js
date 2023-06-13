function add(){
    var nome1 = document.getElementById("inputNome1").value;
    var nome2 = document.getElementById("inputNome2").value;
    localStorage.setItem("player1", nome1);
    localStorage.setItem("player2", nome2);
    window.location="game.html";
}
function send(){
     number1 = document.getElementById("number1").value;
     number2 = document.getElementById("number2").value;
    actual_awser = parseInt(number1)*parseInt(number2)
    question_number = "<h4>"+number1+'X'+number2+"</h4>";
    input_box = "<br>Resposta: <input type='number' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info'onclick='check()'>Checar</button>"
    row=question_number+input_box+check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}function check(){

    answer = document.getElementById("input_check_box").value;
    
    answer = answer.toLowerCase();
    
    if(palavra==answer){
    
    if(answerTurn=='player1'){
    
        player1Score = player1Score + 1;
        document.getElementById("pontos1").innerHTML = player1Score;
    }else{
        player2Score = player2Score + 1;
        document.getElementById("pontos2").innerHTML = player2Score;
    }
    
    }
    if(answerTurn=='player1'){
        answerTurn = 'player2';
    }
    else{
    answerTurn = 'player1';
    
    }
    if(questionTurn == 'player2'){
        questionTurn = 'player1';
    }else{
        questionTurn = 'player2';
    }
    
    document.getElementById("answerTurn").innerHTML = localStorage.getItem(answerTurn);
    document.getElementById("questionTurn").innerHTML = localStorage.getItem(questionTurn);

    }
