var ans = document.getElementById("ans");
async function server() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if (num1.toString() == '') {
        alert('Enter num1');
        return;
    } else if (num2.toString() == '') {
        alert('Enter num2');
        return;
    } else {
        res = await fetch(`http://localhost:1111/operations?num1=${num1}&num2=${num2}`);
        res = await res.json();
        res.quot = res.quot == null ? "undefined" : res.quot;
        res.rem = res.rem == null ? "undefined" : res.rem;
        setData(res, num1, num2);
    }
}

function setData(res, num1, num2) {
    var s = `<br><br>Sum: ${num1} + ${num2} = ${res.sum}<br>Difference: ${num1} - ${num2} = ${res.diff}<br>`
    s = s.concat(`Product: ${num1} * ${num2} = ${res.prod}<br>Quotient: ${num1} / ${num2} = ${res.quot}<br>`);
    s = s.concat(`Remainder: ${num1} % ${num2} = ${res.rem}`);
    ans.innerHTML = s;
    setCSS();
}

function setCSS() {
    ans.style.fontWeight = "bold";
}

function rem() {
    document.getElementById('num1').innerHTML = '';
    document.getElementById('num2').innerHTML = '';
    document.getElementById("form").getElementsByTagName("span")[2].innerHTML = "";
}