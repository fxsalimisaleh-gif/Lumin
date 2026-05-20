const lines = [
    { type: "command", text: "whoami" },
    { type: "output", text: "> صالح سلیمی / طراح سایت" },
    { type: "command", text: "skills --list" },
    { type: "output", text: "> HTML5 ............. 90%" },
    { type: "output", text: "> CSS3 .............. 85%" },
    { type: "output", text: "> Responsive Design .. 88%" },
    { type: "output", text: "> Flexbox/Grid ....... 82%" },
    { type: "command", text: "experience --years" },
    { type: "output", text: "> 2+ سال تجربه عملی" },
    { type: "command", text: "ready_for_work --status=true" }
];

let lineIndex = 0;
let charIndex = 0;
let currentLine = null;
const terminalBody = document.querySelector('.terminal-body');

// پاک کردن محتوای ترمینال به جز خط آخر (که تایپ میشه)
function clearTerminal() {
    const allLines = document.querySelectorAll('.terminal-line');
    allLines.forEach(line => line.remove());
}

clearTerminal();

function typeNextLine() {
    if (lineIndex >= lines.length) {
        // تمام شد، کرسر رو نشون بده
        return;
    }

    currentLine = lines[lineIndex];
    const lineDiv = document.createElement('div');
    lineDiv.className = 'terminal-line';

    if (currentLine.type === "command") {
        lineDiv.innerHTML = `<span class="prompt">$</span> <span class="command"></span>`;
        terminalBody.appendChild(lineDiv);
    } else {
        lineDiv.innerHTML = `<span class="output"></span>`;
        terminalBody.appendChild(lineDiv);
    }

    charIndex = 0;
    typeCharacter(lineDiv);
}

function typeCharacter(lineDiv) {
    if (charIndex < currentLine.text.length) {
        const span = lineDiv.querySelector(currentLine.type === "command" ? ".command" : ".output");
        span.innerHTML += currentLine.text.charAt(charIndex);
        charIndex++;
        setTimeout(() => typeCharacter(lineDiv), 50);
    } else {
        // خط تموم شد، برو به خط بعدی
        lineIndex++;
        setTimeout(typeNextLine, 200);
    }
}

// شروع تایپ
typeNextLine();