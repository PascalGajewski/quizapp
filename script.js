function startQuiz(){
    document.getElementById('card-right').innerHTML = ``;
    document.getElementById('card-right').classList.remove('card-right');
    document.getElementById('card-right').classList.add('card-question');
    document.getElementById('card-right').innerHTML += `
    <div class="d-flex flex-column justify-content-evenly align-items-center h-100 w-100">
        <h3 class="pt-4 pb-4" id="question">Frage?</h3>
        <div class="list-group mb-3 w-50">
            <a href="#" id="answer1" class="list-group-item list-group-item-action rounded p-2 mb-3 d-flex align-items-center"><span class="border fw-bold px-2 me-3 bg-dark-subtle">A</span>Antwort 1</a>
            <a href="#" id="answer2" class="list-group-item list-group-item-action rounded p-2 mb-3 d-flex align-items-center"><span class="border fw-bold px-2 me-3 bg-dark-subtle">B</span>Antwort 2</a>
            <a href="#" id="answer3" class="list-group-item list-group-item-action rounded p-2 mb-3 d-flex align-items-center"><span class="border fw-bold px-2 me-3 bg-dark-subtle">C</span>Antwort 3</a>
            <a href="#" id="answer4" class="list-group-item list-group-item-action rounded p-2 mb-3 d-flex align-items-center"><span class="border fw-bold px-2 me-3 bg-dark-subtle">D</span>Antwort 4</a>
        </div>
        <p class="mb-0"> Frage <b>a</b> von <b>b</b> <p>
    </div>
    `;
}
