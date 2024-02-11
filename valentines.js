function start() {
        let i = 0;
        let n = 38;

        const btn1Ref = document.getElementById("button1");
        const btn2Ref = document.getElementById("button2");

        btn2Ref.addEventListener("click", persuade);
        btn1Ref.addEventListener("click", happy);

        function happy() {
                const els = Array.from(document.querySelectorAll(".div"));
                for (let el of els) {
                        el.style.display = "none";
                }
                const showEls = Array.from(document.querySelectorAll(".happy"));
                for (let el of showEls) {
                        el.style.display = "flex";
                }
        }

        function persuade() {
                let phrases = [
                        'Are you sure?',
                        'Really sure?',
                        'Think again!',
                        'You might regret this!',
                        'Change of heart?',
                        'Give it another thought!',
                        'Absolutely certain?',
                        'This could be a mistake!',
                        'Final chance!',
                        'Oh dont be so cold!',
                        '100% sure?',
                        'Consider your options!',
                        'Is this your final answer?',
                        'Are you absolutely positive?',
                        'Pause and reflect!',
                        'Any doubts creeping in?',
                        'Reevaluate your decision!',
                        'Take a deep breath!',
                        'Double-check your choice!',
                        'Give it one more thought!'
                ];

                btn1Ref.style.padding = n + "px";
                btn1Ref.style.fontSize = n + "px";
                btn2Ref.style.padding = "14px";
                btn2Ref.style.fontSize = "12px";

                if (i < phrases.length) {
                        btn2Ref.textContent = phrases[i];
                } else {
                        i = 0;
                        btn2Ref.textContent = phrases[i];
                }

                i++;
                n += 6;
        }
}