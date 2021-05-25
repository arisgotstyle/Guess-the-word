 player1_name= localStorage.getItem('Player 1 Name');
console.log(player1_name);
 player2_name= localStorage.getItem('Player 2 Name');
 player1_score=0;
 player2_score=0;
 question_turn='player1';
 answer_turn='player2';

document.getElementById('player_1Name').innerHTML= player1_name+':';
document.getElementById('player_2Name').innerHTML= player2_name+':';
document.getElementById('player_1_score').innerHTML= player1_score;
document.getElementById('player_2_score').innerHTML= player2_score;

document.getElementById('player_question').innerHTML= 'Question Turn: '+ player1_name;
document.getElementById('player_answer').innerHTML= 'Answer Turn: '+player2_name;

function send() {

    get_word= document.getElementById('word').value;
    Word= get_word.toLowerCase();
    console.log('Word in Lower Case= '+Word);
    char1=Word.charAt(1);
    console.log(char1);
    Length_divide_2= Math.floor(Word.length/2);
    char2= Word.charAt(Length_divide_2);
    console.log(char2);
    char3= Word.charAt(Word.length_minus_1);
    console.log(char3)

    remove_char1= Word.replace(char1,'_');
    remove_char2= remove_char1.replace(char2, '_');
    remove_char3= remove_char2.replace(char3, '_');
    console.log(remove_char3);
    question_word= '<h4 id=word_display>'+ remove_char3 + '</h4>';
    input_box= '<br>answer:<input type=text id=input_checkbox>';
    check_button='<br><br> <button class: btn btn-info onclick="check()">Check</button>';
    row= question_word+input_box+check_button;
    document.getElementById('output').innerHTML=row;
    document.getElementById('word').value='';

}

function check() {

    get_answer= document.getElementById('input_checkbox').value;
    answer= get_answer.toLowerCase();
    console.log('Word in lower case = ' + Word);
    if (answer == Word) {
        if (answer_turn == 'player1') {

            player1_score= player1_score +1;
            document.getElementById('player_1_score').innerHTML= player1_score;
        }
        else {

            player2_score= player2_score+1;
            document.getElementById('player_2_score').innerHTML= player2_score;
        }
    }

    

    if (answer_turn == 'player2') {

        answer_turn = 'player1';
        document.getElementById('player_answer').innerHTML= ' Answer Turn: ' + player1_name;
    }
    else {

        answer_turn = 'player2';
        document.getElementById('player_answer').innerHTML= 'Answer Turn: ' + player2_name;
    }

    if (question_turn == 'player2') {

        question_turn == 'player1';
        document.getElementById('player_question').innerHTML= 'Question Turn: ' + player1_name;
    }
    else {
        question_turn= 'player2';
        document.getElementById('player_question').innerHTML= 'Question Turn: ' + player2_name;
    }

   
    document.getElementById('output').innerHTML='';
}

