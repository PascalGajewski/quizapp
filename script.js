function startQuiz() {
    checkCode();
    disableUnusedCode();
    rightAnswerSum = 0;
    document.getElementById('card-right').innerHTML = ``;
    document.getElementById('card-right').classList.remove('card-right');
    document.getElementById('card-right').classList.add('card-question');
    document.getElementById('card-right').innerHTML += generateQuestionCard();
}

function answer(i) {
    rightOrWrongAnswer(i);
    disableButtons();
    document.getElementById(`next-btn`).classList.remove('disabled');
}

function rightOrWrongAnswer(i) {
    if (i == questions[currentCode][currentQuestion]['right_answer']) {
        rightAnswerSum == rightAnswerSum++;
        if (!document.getElementById(`answer${i}`).classList.contains('bg-true')) {
            document.getElementById(`answer${i}`).classList.add('bg-true');
        }
        AUDIO_SUCCESS.play();
    } else {
        if (!document.getElementById(`answer${i}`).classList.contains('bg-false')) {
            document.getElementById(`answer${i}`).classList.add('bg-false');
            document.getElementById(`answer${questions[currentCode][currentQuestion]['right_answer']}`).classList.add('bg-true');
        }
        AUDIO_FAIL.play();
    }
}

function disableButtons() {
    for (let a = 0; a < 4; a++) {
        let b = a + 1;
        document.getElementById(`answer${b}`).classList.add('disabled');
    }
}

function enableButtons() {
    for (let a = 0; a < 4; a++) {
        let b = a + 1;
        document.getElementById(`answer${b}`).classList.remove('disabled');
    }
}

function nextQuestion() {
    enableButtons();
    document.getElementById(`next-btn`).classList.add('disabled');
    if (currentQuestion < 9) {
        emptyQuestionCard();
        currentQuestion == currentQuestion++;
        fillQuestionCard();
    }
    else {
        finishedQuiz();
        currentQuestion == currentQuestion++;
    }
}

function emptyQuestionCard() {
    document.getElementById('question').innerHTML = ``;
    document.getElementById('answer1').innerHTML = ``;
    document.getElementById('answer2').innerHTML = ``;
    document.getElementById('answer3').innerHTML = ``;
    document.getElementById('answer4').innerHTML = ``;
    document.getElementById('indicator').innerHTML = ``;
    removeAnswerBackground();
}

function fillQuestionCard() {
    document.getElementById('question').innerHTML = `${questions[currentCode][currentQuestion]['questions']}`;
    document.getElementById('answer1').innerHTML = `<span class="border fw-bold px-2 me-3 bg-dark-subtle">A</span>${questions[currentCode][currentQuestion]['answer1']}`;
    document.getElementById('answer2').innerHTML = `<span class="border fw-bold px-2 me-3 bg-dark-subtle">B</span>${questions[currentCode][currentQuestion]['answer2']}`;
    document.getElementById('answer3').innerHTML = `<span class="border fw-bold px-2 me-3 bg-dark-subtle">C</span>${questions[currentCode][currentQuestion]['answer3']}`;
    document.getElementById('answer4').innerHTML = `<span class="border fw-bold px-2 me-3 bg-dark-subtle">D</span>${questions[currentCode][currentQuestion]['answer4']}`;
    document.getElementById('indicator').innerHTML = ` Frage <b>${(currentQuestion + 1)}</b> von <b>${questions[currentCode].length}</b> `;
}

function removeAnswerBackground() {
    for (let i = 0; i < 4; i++) {
        let a = i + 1;
        if (document.getElementById(`answer${a}`).classList.contains('bg-true')) {
            document.getElementById(`answer${a}`).classList.remove('bg-true')
        }
        if (document.getElementById(`answer${a}`).classList.contains('bg-false')) {
            document.getElementById(`answer${a}`).classList.remove('bg-false')
        }
    }
}

function checkCode() {
    for (let i = 0; i < questions.length; i++) {
        let a = i + 1;
        if (document.getElementById(`Code${a}`).classList.contains('active')) {
            currentCode = i;
        }
    }
}

function disableUnusedCode() {
    for (let i = 0; i < questions.length; i++) {
        let a = i + 1;
        if (!(document.getElementById(`Code${a}`).classList.contains('active'))) {
            document.getElementById(`Code${a}`).classList.add('disabled');
        }
    }
    document.getElementById('progress').classList.remove('d-none');
}

function finishedQuiz() {
    document.getElementById('card-right').innerHTML = ``;
    document.getElementById('card-right').classList.remove('card-question');
    document.getElementById('card-right').classList.add('card-finished');
    document.getElementById('card-right').innerHTML += generateFinishedCard();
}

function calculateProgress(){
    let currentProgress = (((currentQuestion)/(questions[currentCode].length))*100).toFixed(0);
    document.getElementById('progressbar').innerHTML = `${currentProgress}%`;
    document.getElementById('progressbar').style.width = `${currentProgress}%`;
}

function generateQuestionCard() {
    return `
    <div class="d-flex flex-column justify-content-between align-items-center h-100 w-100">
        <h3 class="text-center" id="question">${questions[currentCode][currentQuestion]['questions']}</h3>
        <div class="list-group w-60">
            <button href="#" id="answer1" class="list-group-item list-group-item-action rounded lh-sm p-2 mb-3 me-3 d-flex align-items-center" onclick="answer(1)"><span class="border fw-bold px-2 me-3 bg-dark-subtle">A</span>${questions[currentCode][currentQuestion]['answer1']}</button>
            <button href="#" id="answer2" class="list-group-item list-group-item-action rounded lh-sm p-2 mb-3 me-3 d-flex align-items-center" onclick="answer(2)"><span class="border fw-bold px-2 me-3 bg-dark-subtle">B</span>${questions[currentCode][currentQuestion]['answer2']}</button>
            <button href="#" id="answer3" class="list-group-item list-group-item-action rounded lh-sm p-2 mb-3 me-3 d-flex align-items-center" onclick="answer(3)"><span class="border fw-bold px-2 me-3 bg-dark-subtle">C</span>${questions[currentCode][currentQuestion]['answer3']}</button>
            <button href="#" id="answer4" class="list-group-item list-group-item-action rounded lh-sm p-2 mb-3 me-3 d-flex align-items-center" onclick="answer(4)"><span class="border fw-bold px-2 me-3 bg-dark-subtle">D</span>${questions[currentCode][currentQuestion]['answer4']}</button>
        </div>
        <div class="d-flex justify-content-between align-items-center w-100 ps-2 pe-2 pb-3">
            <span class="mb-0" id="indicator"> Frage <b>${(currentQuestion + 1)}</b> von <b>${questions[currentCode].length}</b> </span>
            <button type="button" class="btn btn-primary gap-3 disabled responsive-smaller" onclick="nextQuestion(), calculateProgress()" id="next-btn">
                NEXT
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
            </button>
        </div>
    </div>
    `;
}

function generateFinishedCard() {
    return `
    <img class="img-completed mb-3" src="img/brainresult.png">
    <p><b>Completed Quiz</b></y></p>
    <p class="mb-5"><span class="me-3" style="color: #f68831"><b>YOUR SCORE</b></span> <b>${rightAnswerSum}/${questions[currentCode].length}</b></p>
    <div class="d-grid gap-2 col-6 mx-auto justify-content-center">
        <button class="btn btn-primary" type="button" onclick="workInProgress()">SHARE</button>
        <button class="btn btn-primary" type="button" onclick="parent.location='index.html'" >REPLAY</button>
      </div>
    `;
}

function workInProgress() {
    alert('This function is still in progress.');
}

function audioSwitch(){
    if (document.getElementById(`audio-btn`).classList.contains('checker')){
        mutedAudio();
    }
    else{
        activateAudio();
    }
}

function activateAudio(){
    document.getElementById(`audio-btn`).classList.add('checker');
    AUDIO_SUCCESS.muted = false;
    AUDIO_FAIL.muted = false;
    document.getElementById(`audio-btn`).innerHTML = ``;
    document.getElementById(`audio-btn`).innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
    </svg>`;
}

function mutedAudio(){
    document.getElementById(`audio-btn`).classList.remove('checker');
    AUDIO_SUCCESS.muted = true;
    AUDIO_FAIL.muted = true;
    document.getElementById(`audio-btn`).innerHTML = ``;
    document.getElementById(`audio-btn`).innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-slash" viewBox="0 0 16 16">
    <path d="M5.164 14H15c-.299-.199-.557-.553-.78-1-.9-1.8-1.22-5.12-1.22-6 0-.264-.02-.523-.06-.776l-.938.938c.02.708.157 2.154.457 3.58.161.767.377 1.566.663 2.258H6.164l-1 1zm5.581-9.91a3.986 3.986 0 0 0-1.948-1.01L8 2.917l-.797.161A4.002 4.002 0 0 0 4 7c0 .628-.134 2.197-.459 3.742-.05.238-.105.479-.166.718l-1.653 1.653c.02-.037.04-.074.059-.113C2.679 11.2 3 7.88 3 7c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0c.942.19 1.788.645 2.457 1.284l-.707.707zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z"/>
    </svg>`;
}