function startQuiz(){
    document.getElementById('card-right').innerHTML = ``;
    document.getElementById('card-right').classList.remove('card-right');
    document.getElementById('card-right').classList.add('card-question');
    document.getElementById('card-right').innerHTML += `
    <div class="d-flex flex-column justify-content-evenly align-items-center h-100 w-100">
        <h3 class="pt-4 pb-4" id="question">${questionsHTML[currentQuestion]['questions']}</h3>
        <div class="list-group mb-3 w-50">
            <a href="#" id="answer1" class="list-group-item list-group-item-action rounded p-2 mb-3 d-flex align-items-center" onclick="answer(1)"><span class="border fw-bold px-2 me-3 bg-dark-subtle">A</span>${questionsHTML[currentQuestion]['answer1']}</a>
            <a href="#" id="answer2" class="list-group-item list-group-item-action rounded p-2 mb-3 d-flex align-items-center" onclick="answer(2)"><span class="border fw-bold px-2 me-3 bg-dark-subtle">B</span>${questionsHTML[currentQuestion]['answer2']}</a>
            <a href="#" id="answer3" class="list-group-item list-group-item-action rounded p-2 mb-3 d-flex align-items-center" onclick="answer(3)"><span class="border fw-bold px-2 me-3 bg-dark-subtle">C</span>${questionsHTML[currentQuestion]['answer3']}</a>
            <a href="#" id="answer4" class="list-group-item list-group-item-action rounded p-2 mb-3 d-flex align-items-center" onclick="answer(4)"><span class="border fw-bold px-2 me-3 bg-dark-subtle">D</span>${questionsHTML[currentQuestion]['answer4']}</a>
        </div>
        <p class="mb-0" id="indicator"> Frage <b>${(currentQuestion + 1)}</b> von <b>${questionsHTML.length}</b> <p>
    </div>
    <div class="d-flex justify-content-between pt-4 ms-5 me-5">
        <svg onclick="lastQuestion()" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="nav-btn bi bi-arrow-left-circle bg-blue rounded-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
        <svg onclick="nextQuestion()" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="nav-btn bi bi-arrow-right-circle bg-blue rounded-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
    </div>
    `;
}

function answer(i){
    if (i == questionsHTML[currentQuestion]['right_answer']){
        alert('in Arbeit');
    }
    else{
        alert('in Arbeit');
    }
}

function nextQuestion(){
    if (currentQuestion < 9){
    emptyQuestionCard();
    currentQuestion == currentQuestion++;
    fillQuestionCard();
    }
    else{
        window.location.href = 'index.html';
    }
}

function lastQuestion(){
    if(currentQuestion == 0){
        window.location.href = 'index.html';
    }
    else{
        emptyQuestionCard();
        currentQuestion == currentQuestion--;
        fillQuestionCard();
    }
}

function emptyQuestionCard(){
    document.getElementById('question').innerHTML = ``;
    document.getElementById('answer1').innerHTML = ``;
    document.getElementById('answer2').innerHTML = ``;
    document.getElementById('answer3').innerHTML = ``;
    document.getElementById('answer4').innerHTML = ``;
    document.getElementById('indicator').innerHTML = ``;
}

function fillQuestionCard(){
    document.getElementById('question').innerHTML = `${questionsHTML[currentQuestion]['questions']}`;
    document.getElementById('answer1').innerHTML = `<span class="border fw-bold px-2 me-3 bg-dark-subtle">A</span>${questionsHTML[currentQuestion]['answer1']}`;
    document.getElementById('answer2').innerHTML = `<span class="border fw-bold px-2 me-3 bg-dark-subtle">B</span>${questionsHTML[currentQuestion]['answer2']}`;
    document.getElementById('answer3').innerHTML = `<span class="border fw-bold px-2 me-3 bg-dark-subtle">C</span>${questionsHTML[currentQuestion]['answer3']}`;
    document.getElementById('answer4').innerHTML = `<span class="border fw-bold px-2 me-3 bg-dark-subtle">D</span>${questionsHTML[currentQuestion]['answer4']}`;
    document.getElementById('indicator').innerHTML = ` Frage <b>${(currentQuestion + 1)}</b> von <b>${questionsHTML.length}</b> `;
}