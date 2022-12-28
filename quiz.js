const quizData = [{
    question: "If NOIDA is written as OPJEB, then what will be the code for DELHI?",
    a: "EFMAK",
    b: "EFAMK",
    c: "EFMU",
    d: "EFMIK",
    correct: "c",
},
{
    question: "Which number should come next in the series 1, 2, 3, 10, ___",
    a: "79",
    b: "99",
    c: "89",
    d: "98",
    correct: "b",
},
{
    question: "Which of the following is the odd one from the given alternatives?",
    a: "Driving",
    b: "Diving",
    c: "Swimming",
    d: "Sailing",
    correct: "a",
},
{
    question: "A book always has -",
    a: "Pages",
    b: "Story",
    c: "Binding",
    d: "Content",
    correct: "a",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Your score => ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);