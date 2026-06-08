//Function to get question index and display related answer
function answers(index){
    //Gets all answers in the document
    const answer = document.querySelectorAll('.answer');

    //Toggles the active class when the user clicks on the related question
    answer[index].classList.toggle('active');
    console.log(answer[index]);
    
}