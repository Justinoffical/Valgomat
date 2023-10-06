// An array of objects, each containing a question and different party opinions.
const questions = [
    {question: '1 Jeg er enig i gratis SFO',
    littenig: {MDG: 1, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 1, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 1,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 0, R: 1, SP: 0, FS: 0},
    enig:  {MDG: 0, AP: 1, H:0, SV: 0, NKP: 0, SP: 1, BL: 0, PP: 1, FRP: 0, V: 0, KON: 0,KRF: 1,INP: 0,DEM: 1,FP: 0,PS: 0,LIB: 0,GP: 1, R: 0, SP: 1, FS: 0},
    uenig:  {MDG: 0, AP: 0, H:1, SV: 0, NKP: 1, SP: 0, BL: 0, PP: 0, FRP: 1, V: 0, KON: 1,KRF: 0,INP: 0,DEM: 0,FP: 1,PS: 0,LIB: 1,GP: 0, R: 0, SP: 0, FS: 1},
    littuenig:  {MDG: 0, AP: 0, H:1, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 1, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 1,LIB: 0,GP: 0, R: 0, SP: 0, FS: 0},
    },

    {question: '2 Jeg er uenig i bybane over Bryggen',
    littenig: {MDG: 0, AP: 0, H:1, SV: 1, NKP: 1, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 1,PS: 0,LIB: 0,GP: 0, R: 0, SP: 0, FS: 1},
    enig:  {MDG: 1, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 1, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 1,INP: 1,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 1, R: 0, SP: 0, FS: 0},
    uenig:  {MDG: 0, AP: 1, H:0, SV: 0, NKP: 0, SP: 1, BL: 0, PP: 0, FRP: 0, V: 1, KON: 1,KRF: 0,INP: 0,DEM: 1,FP: 0,PS: 0,LIB: 1,GP: 0, R: 0, SP: 0, FS: 0},
    littuenig:  {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 1, FRP: 1, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 1,LIB: 0,GP: 0, R: 1, SP: 1, FS: 0},
    },
    {question: '3 Jeg ønsker Hordfast',
    littenig: {MDG: 0, AP: 1, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 1, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 1,PS: 1,LIB: 0,GP: 0, R: 0, SP: 0, FS: 0},
    enig:  {MDG: 0, AP: 0, H:1, SV: 1, NKP: 0, SP: 0, BL: 1, PP: 1, FRP: 1, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 1, R: 0, SP: 1, FS: 0},
    uenig:  {MDG: 1, AP: 0, H:0, SV: 0, NKP: 1, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 1,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 0, R: 1, SP: 0, FS: 0},
    littuenig:  {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 1, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 1,INP: 1,DEM: 1,FP: 0,PS: 0,LIB: 1,GP: 0, R: 0, SP: 0, FS: 1},
    },

    {question: '4 Private selskaper må få drive eldre og rusomsorg i Bergen',
    littenig: {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 0, R: 0, SP: 0, FS: 1},
    enig:  {MDG: 0, AP: 0, H:1, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 1, FRP: 1, V: 1, KON: 1,KRF: 1,INP: 1,DEM: 1,FP: 1,PS: 1,LIB: 1,GP: 1, R: 0, SP: 0, FS: 0},
    uenig:  {MDG: 1, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 1, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 0, R: 0, SP: 1, FS: 0},
    littuenig:  {MDG: 0, AP: 1, H:0, SV: 1, NKP: 1, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 0, R: 1, SP: 0, FS: 0},
    },

    {question: '5 Flere friskoler i Bergen kan være positivt',
    littenig: {MDG: 1, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 1,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 0, R: 0, SP: 1, FS: 0},
    enig:  {MDG: 0, AP: 0, H:1, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 1, FRP: 1, V: 1, KON: 1,KRF: 1,INP: 0,DEM: 1,FP: 1,PS: 0,LIB: 1,GP: 1, R: 0, SP: 0, FS: 1},
    uenig:  {MDG: 0, AP: 1, H:0, SV: 1, NKP: 1, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 0, R: 1, SP: 0, FS: 0},
    littuenig:  {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 1, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 1,LIB: 0,GP: 0, R: 0, SP: 0, FS: 0},
    },

    {question: '6 Ungdomsskoleelever i Bergen skal få gratis skolemåltider',
    littenig: {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 1, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 0, R: 0, SP: 0, FS: 0},
    enig:  {MDG: 1, AP: 1, H:0, SV: 1, NKP: 1, SP: 1, BL: 1, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 1,DEM: 0,FP: 0,PS: 1,LIB: 0,GP: 1, R: 1, SP: 0, FS: 0},
    uenig:  {MDG: 0, AP: 0, H:1, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 1, V: 0, KON: 1,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 1,GP: 0, R: 0, SP: 0, FS: 0},
    littuenig:  {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 1, V: 1, KON: 0,KRF: 0,INP: 0,DEM: 1,FP: 1,PS: 0,LIB: 0,GP: 0, R: 0, SP: 0, FS: 1},
    },

    {question: '7 Bergensskolen bør ha mobilforbud',
    littenig: {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 1,INP: 0,DEM: 1,FP: 0,PS: 0,LIB: 0,GP: 0, R: 0, SP: 0, FS: 1},
    enig:  {MDG: 1, AP: 0, H:0, SV: 0, NKP: 1, SP: 1, BL: 1, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 1, R: 0, SP: 0, FS: 0},
    uenig:  {MDG: 0, AP: 1, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 1,LIB: 1,GP: 0, R: 0, SP: 0, FS: 0},
    littuenig:  {MDG: 0, AP: 0, H:1, SV: 1, NKP: 0, SP: 0, BL: 0, PP: 1, FRP: 1, V: 0, KON: 1,KRF: 0,INP: 0,DEM: 0,FP: 1,PS: 0,LIB: 0,GP: 0, R: 1, SP: 0, FS: 0},
    },

    {question: '8 Bergensskolen bør ha mobilforbud',
    littenig: {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 1,INP: 0,DEM: 1,FP: 0,PS: 0,LIB: 0,GP: 0, R: 0, SP: 0, FS: 1},
    enig:  {MDG: 1, AP: 0, H:0, SV: 0, NKP: 1, SP: 1, BL: 1, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 1,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 1, R: 0, SP: 0, FS: 0},
    uenig:  {MDG: 0, AP: 1, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 1,LIB: 1,GP: 0, R: 0, SP: 0, FS: 0},
    littuenig:  {MDG: 0, AP: 0, H:1, SV: 1, NKP: 0, SP: 0, BL: 0, PP: 1, FRP: 1, V: 1, KON: 1,KRF: 0,INP: 0,DEM: 0,FP: 1,PS: 0,LIB: 0,GP: 0, R: 1, SP: 0, FS: 0},
    },

    {question: '9 Undervisningsopplegget Rosa kompetanse bør ikke brukes i skoler og barnehager',
    littenig: {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 0, R: 0, SP: 0, FS: 0},
    enig:  {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 1,KRF: 1,INP: 1,DEM: 1,FP: 0,PS: 0,LIB: 1,GP: 1, R: 0, SP: 1, FS: 1},
    uenig:  {MDG: 1, AP: 1, H:0, SV: 1, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 1, V: 1, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 1,LIB: 0,GP: 0, R: 1, SP: 0, FS: 0},
    littuenig:  {MDG: 0, AP: 0, H:0, SV: 0, NKP: 1, SP: 0, BL: 1, PP: 1, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 1,PS: 0,LIB: 0,GP: 0, R: 0, SP: 0, FS: 0},
    },

    {question: '10 Alle Bergens eldrehjem skal ha egne kjøkken',
    littenig: {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 0, R: 0, SP: 0, FS: 0},
    enig:  {MDG: 0, AP: 0, H:0, SV: 1, NKP: 1, SP: 0, BL: 1, PP: 1, FRP: 1, V: 0, KON: 1,KRF: 0,INP: 1,DEM: 1,FP: 1,PS: 1,LIB: 0,GP: 1, R: 1, SP: 1, FS: 1},
    uenig:  {MDG: 0, AP: 0, H:0, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 1, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 0,GP: 0, R: 0, SP: 0, FS: 0},
    littuenig:  {MDG: 1, AP: 1, H:1, SV: 0, NKP: 0, SP: 0, BL: 0, PP: 0, FRP: 0, V: 0, KON: 0,KRF: 0,INP: 0,DEM: 0,FP: 0,PS: 0,LIB: 1,GP: 0, R: 0, SP: 0, FS: 0},
    },
]; 
// An object representing the scores of different parties, initially all set to 0.
let partyScores = {
    MDG: 0,
    AP: 0,
    H: 0,
    SV: 0,
    NKP: 0, 
    SP: 0, 
    BL: 0, 
    PP: 0, 
    FRP: 0, 
    V: 0, 
    KON: 0,
    KRF: 0,
    INP: 0,
    DEM: 0,
    FP: 0,
    PS: 0,
    LIB: 0,
    GP: 0, 
    R: 0, 
    SP: 0, 
    FS: 0
}
// Get HTML elements by their IDs
const questionT = document.getElementById('question')
const btnNext = document.getElementById('btnNext')
const rbAnswer = document.getElementsByName('answer')
const inputForm = document.getElementById('valgomatForm')

//This section handles the event when the user clicks the "Next" button. When clicked, it calls the nextQuestion function.
btnNext.addEventListener('click', nextQuestion)

// Initialize question index
let qidx = 0
questionT.innerHTML = questions[qidx].question

// Function to handle the "Next" button click
function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked');
  
    if (radioChecked) {
      qidx++;
  
      if (qidx < questions.length) {
        radioChecked.checked = false;
        questionT.innerHTML = questions[qidx].question;
  
        // Update progress bar
        let progressBar = document.querySelector('.progress');
        let progressValue = (qidx / questions.length) * 100;
        progressBar.style.width = progressValue + '%';
      } else {
        console.log("Reached the end of questions");
        inputForm.style.display = 'none';
        showResult();
        
        // Set the progress bar to 100%
        let progressBar = document.querySelector('.progress');
        progressBar.style.width = '100%';
      }
    }
  
    // Re-enable all radio buttons for the next question
    rbAnswer.forEach(radio => {
        radio.disabled = false;
    });
}
// Add event listeners to radio buttons for answer selection
rbAnswer.forEach(radio => {
    radio.addEventListener('change', updatePartyScores);
});
// Function to update party scores based on the selected answer
function updatePartyScores() {
    // Get the selected radio button value
    const radioChecked = document.querySelector('input[name="answer"]:checked');

    if (radioChecked) {
        calculateResult(qidx, radioChecked.value);

        // Display the party scores when a choice is made
        showResult();
    }
}

// Function to calculate party scores based on the selected answer
function calculateResult(qidx, chosen) {
    console.log(qidx, chosen)

    let partyChoices = questions[qidx][chosen]
    console.log(partyChoices)

    for (let party in partyChoices){
        partyScores[party] += partyChoices[party]
    }
    console.log(partyScores)
}
// Function to display the result
function showResult() {
    let sorted = new Map()
    const resultBox = document.getElementById("result")
    const partyScoresElement = document.getElementById("partyScores")
    partyScoresElement.innerHTML = ""  // Clear previous content

    while (sorted.size < Object.keys(partyScores).length ) {
        let max = null

        for (party in partyScores) {
            if (max ===null && !sorted.has(party)) {
                max = party
            }
            else if(partyScores[party] > partyScores[max] && !sorted.has(party)) {
                max = party
            }
        }
        sorted.set(max, partyScores[max])
    }

    // Display only the top 3 parties
    let count = 0;
    sorted.forEach((score, party) => {
        if (count < 3) {
            partyScoresElement.innerHTML += `<p>${party}: ${score}</p>`;  // Add party scores to the element
            count++;
        }
    });
    resultBox.appendChild(partyScoresElement);
}


function updatePartyScores() {
    // Get the selected radio button value
    const radioChecked = document.querySelector('input[name="answer"]:checked');

    if (radioChecked) {
        // Call calculateResult function with the current question index (qidx) and the selected answer value
        calculateResult(qidx, radioChecked.value);
        // Call showResult function to display the updated party scores
        showResult();

        // Disable all radio buttons after a selection is made
        rbAnswer.forEach(radio => {
            radio.disabled = true;
        });
    }
}





