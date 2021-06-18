const male = document.getElementById('male');
const age = document.getElementById('age');

const weightValue = document.getElementById('weightValue');
const weight = document.getElementById('weight');
const height = document.getElementById('height');

// Tömb
const ages = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];

// Select kiválasztása
const select = document.getElementById("age");

// Select feltöltése az évekkel 
for (const ageItem of ages) {
    let optn = ageItem; // 
    let el = document.createElement("option"); // option létrehozása
    el.textContent = optn;
    select.appendChild(el);
}
// A kiválasztott option értékének lekérése
select.onchange = function(event) {
    event.preventDefault();

}

// Aktuális súly érték kiírása
weightValue.value = weight.value;
weight.oninput = function() {
    weightValue.value = this.value;
}

weightValue.oninput = function() {
    weight.value = this.value;
}

// Aktuális magasság érték kiírása
heightValue.value = height.value;
height.oninput = function() {
    heightValue.value = this.value;
}

heightValue.oninput = function() {
    height.value = this.value;
}


// BMI számítás
document.getElementById('calcBtn').onclick = () => {
        bmi = Math.round((weight.value / (Math.pow(height.value, 2))) * 100000) / 10;
        gender();
    }
    // Nő vagy férfi
function gender() {
    if (male.value == 'female') {
        switch (age.value) {
            case '18-24':
                if (bmi < 20) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 25) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 30) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 40) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
            case '25-34':
                if (bmi < 21) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 26) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 31) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 41) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
            case '35-44':
                if (bmi < 22) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 27) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 32) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 42) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
            case '45-54':
                if (bmi < 23) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 28) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 33) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 43) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
            case '55-64':
                if (bmi < 24) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 29) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 34) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 44) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
            case '65+':
                if (bmi < 25) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 30) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 35) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 45) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
        }
    } else {
        switch (age.value) {
            case '18-24':
                if (bmi < 21) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 26) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 31) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 41) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
            case '25-34':
                if (bmi < 22) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 27) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 32) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 42) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
            case '35-44':
                if (bmi < 23) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 28) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 33) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 43) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
            case '45-54':
                if (bmi < 24) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 29) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 34) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 44) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
            case '55-64':
                if (bmi < 25) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 30) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 35) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 45) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
            case '65+':
                if (bmi < 26) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Sovány</h4>';
                } else if (bmi < 31) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Ideális testsúly</h4>';
                } else if (bmi < 36) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Túlsúly</h4>';
                } else if (bmi < 46) {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Elhízás</h4>';
                } else {
                    document.getElementById('bmiResult').innerHTML = '<h2>' + bmi + '</h2><h4>Súlyos elhízás</h4>';
                }
                break;
        }
    }
}