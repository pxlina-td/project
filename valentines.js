let i = 0;
let n = 38;

function start() {
    const btn1Ref = document.querySelector("#button1");
    const btn2Ref = document.querySelector("#button2");

    btn2Ref.addEventListener("click", persuade);
    btn1Ref.addEventListener("click", happy);
}

function happy() {
    document.querySelectorAll(".div").forEach(el => el.style.display = "none");
    document.querySelectorAll(".happy").forEach(el => el.style.display = "flex");
}

function persuade() {
    const btn1Ref = document.querySelector("#button1");
    const btn2Ref = document.querySelector("#button2");

    const phrases = [
        'Are you sure?', 'Really sure?', 'Think again!', 'You might regret this!',
        'Change of heart?', 'Give it another thought!', 'Absolutely certain?',
        'This could be a mistake!', 'Final chance!', 'Oh don’t be so cold!',
        '100% sure?', 'Consider your options!', 'Is this your final answer?',
        'Are you absolutely positive?', 'Pause and reflect!', 'Any doubts creeping in?',
        'Reevaluate your decision!', 'Take a deep breath!', 'Double-check your choice!',
        'Give it one more thought!'
    ];

    btn1Ref.style.padding = `${n}px`;
    btn1Ref.style.fontSize = `${n}px`;
    btn2Ref.style.padding = "14px";
    btn2Ref.style.fontSize = "12px";

    btn2Ref.textContent = phrases[i % phrases.length]; // Loops through phrases
    i++;
    n += 6;
}
