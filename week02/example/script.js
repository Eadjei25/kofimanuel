const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
    ];
function start(quiz){
    let score = 0;
    // main game loop
    for(const [question,answer] of quiz){
    const response = ask(question);
    check(response,answer);
    }
    // end of main game loop
    gameOver();
    // function declarations
    function ask(question){
        return prompt(question);
    }
    function check(response,answer){
        if(response === answer){
            alert('Correct!');
            score++;
        } 
        else if(response== 0){
            alert('You entered nothing');
        }
        else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    function gameOver(){
        alert(`Game Over, you scored ${score} point${(score> 1) ? 's' : ''} out of ${quiz.length} total points`);
    }
}
start(quiz);











