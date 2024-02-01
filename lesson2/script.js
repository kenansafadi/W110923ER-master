let count = 0

function counter() {
    document.getElementById("btn").innerHTML = count++;
}
function multi() {

    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;

    const result = n1 * n2;
    document.getElementById("output1").innerHTML = result;
}
function plus() {
    const num1 = +document.getElementById("n1").value;
    const num2 = +document.getElementById("n2").value;
    const result2 = num1 + num2;
    document.getElementById("output2").innerHTML = result2;
}
function plus2() {
    const num1 = +document.getElementById("n3").value;
    const num2 = +document.getElementById("n4").value;
    // const result3 = num1 + "+" + num2 + "=";
    const result3 = `${n1} + ${n2} = ${n1 + n2}`;
    // const result4 = num1 + num2;
    document.getElementById("output3").innerHTML = result3;

}