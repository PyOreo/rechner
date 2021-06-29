
function sum (z1, z2) {
    console.log(z1 + z2)
    return (z1 + z2);
};

function saveaddNums() {
    var z1 = document.getElementById('z1')
        z1 = parseFloat(z1.value)
    var z2 = document.getElementById('z2')
        z2 = parseFloat(z2.value)
    var result1 = sum(z1, z2)
    var T1 = 0
    var T2 = 0

    if(result1 < 9999){
        T1 = 1
    }else{
        document.getElementById('p1').textContent = `Bitte verwenden sie kleinere Zahlen!`;
        document.getElementById('p2').textContent = ` `
    }

    if(result1 > -1){
        T2 = 1
    }else{
        document.getElementById('p1').textContent = `Bitte verwenden sie größere Zahlen!`;
        document.getElementById('p2').textContent = ` `
    }

    if(T1 == 1 && T2 == 1){
        document.getElementById('p1').textContent = `${z1} + ${z2} = `;
        document.getElementById('p2').textContent = `${result1}`;
        T1 = 0
        T2 = 0
    }else{
        T1 = 0
        T2 = 0
    }
}


function sub (z3, z4) {
    return (z3 - z4);
};

function savesubNums() {
    var z3 = document.getElementById('z3')
        z3 = parseFloat(z1.value)
    var z4 = document.getElementById('z4')
        z4 = parseFloat(z2.value)
    var result2 = sub(z3, z4)
    var T1 = 0
    var T2 = 0

    if(result2 < 9999){
        T1 = 1
    }else{
        document.getElementById('p1').textContent = `Bitte verwenden sie eine größere zweite`;
        document.getElementById('p2').textContent = `Zahl oder eine kleinere erste Zahl!`
    }

    if(result2 > -1){
        T2 = 1
    }else{
        document.getElementById('p1').textContent = `Bitte verwenden sie eine größere erste`;
        document.getElementById('p2').textContent = `Zahl oder eine kleinere zweite Zahl!`
    }

    if(T1 == 1 && T2 == 1){
        document.getElementById('p1').textContent = `${z3} - ${z4} = `;
        document.getElementById('p2').textContent = `${result2}`;
        T1 = 0
        T2 = 0
    }else{
        T1 = 0
        T2 = 0
    }
};


function mul (z5, z6) {
    return (z5 * z6);
};

function savemulNums() {
    var z5 = document.getElementById('z5')
        z5 = parseFloat(z1.value)
    var z6 = document.getElementById('z6')
        z6 = parseFloat(z2.value)
    var result3 = mul(z5, z6)

    var T1 = 0
    var T2 = 0

    if(result3 < 9999){
        T1 = 1
    }else{
        document.getElementById('p1').textContent = `Bitte verwenden sie kleinere Zahlen!`;
        document.getElementById('p2').textContent = ` `
    }

    if(result3 > -1){
        T2 = 1
    }else{
        document.getElementById('p1').textContent = `Bitte verwenden sie größere Zahlen!`;
        document.getElementById('p2').textContent = ` `
    }

    if(T1 == 1 && T2 == 1){
        document.getElementById('p1').textContent = `${z5} x ${z6} = `;
        document.getElementById('p2').textContent = `${result3}`;
        T1 = 0
        T2 = 0
    }else{
        T1 = 0
        T2 = 0
    }
};



function div (z7, z8) {
    return (z7 / z8);
};

function savedivNums() {
    var z7 = document.getElementById('z7')
        z7 = parseFloat(z1.value)
    var z8 = document.getElementById('z8')
        z8 = parseFloat(z2.value)
    var result4 = div(z7, z8)

    var T1 = 0
    var T2 = 0

    if(result4 < 9999){
        T1 = 1
    }else{
        document.getElementById('p1').textContent = `Bitte verwenden sie kleinere Zahlen!`;
        document.getElementById('p2').textContent = ` `
    }

    if(result4 > -1){
        T2 = 1
    }else{
        document.getElementById('p1').textContent = `Bitte verwenden sie größere Zahlen!`;
        document.getElementById('p2').textContent = ` `
    }

    if(T1 == 1 && T2 == 1){
        document.getElementById('p1').textContent = `${z7} : ${z8} = `;
        document.getElementById('p2').textContent = `${result4}`;
        T1 = 0
        T2 = 0
    }else{
        T1 = 0
        T2 = 0
    }
};