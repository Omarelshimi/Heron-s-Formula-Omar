document.getElementById('calc-btn').addEventListener('click', sides)

function sides() {
    // Input

    let a = +document.getElementById('sideA').value;
    let b = +document.getElementById('sideB').value;
    let c = +document.getElementById('sideC').value;

    // Process

    let answer = heronsFormula(a, b, c);

    // Output

    document.getElementById("outcome").innerHTML = answer;
}

function heronsFormula(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

