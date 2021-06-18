let male = document.getElementById('male').value;
const weightValue = document.getElementById('weightValue');
const age = document.getElementById('age');
const weight = document.getElementById('weight');
const height = document.getElementById('height');

const ageArray = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];
// Select kiválasztása
const select = document.getElementById("age");
// Select feltöltése az évekkel 
for (const ageItem of ageArray) {
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
const bmiCalc = document.getElementById('szamol').onclick = () => {
        bmi = Math.round((weight.value / (Math.pow(height.value, 2))) * 100000) / 10;
        document.getElementById('bmiResult').innerHTML = bmi;
        gender();
    }
    // Nő vagy férfi
function gender() {
    console.log(age.value);
    male = document.getElementById('male').value;
    ages = age.value;
    if (male == 'female') {
        switch (ages) {
            case '18-24':
                if (bmi < 20) {
                    alert('Sovány');
                } else if (bmi < 25) {
                    alert('Ideális testsúly');
                } else if (bmi < 30) {
                    alert('Túlsúly');
                } else if (bmi < 40) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
            case '25-34':
                if (bmi < 21) {
                    alert('Sovány');
                } else if (bmi < 26) {
                    alert('Ideális testsúly');
                } else if (bmi < 31) {
                    alert('Túlsúly');
                } else if (bmi < 41) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
            case '35-44':
                if (bmi < 22) {
                    alert('Sovány');
                } else if (bmi < 27) {
                    alert('Ideális testsúly');
                } else if (bmi < 32) {
                    alert('Túlsúly');
                } else if (bmi < 42) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
            case '45-54':
                if (bmi < 23) {
                    alert('Sovány');
                } else if (bmi < 28) {
                    alert('Ideális testsúly');
                } else if (bmi < 33) {
                    alert('Túlsúly');
                } else if (bmi < 43) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
            case '55-64':
                if (bmi < 24) {
                    alert('Sovány');
                } else if (bmi < 29) {
                    alert('Ideális testsúly');
                } else if (bmi < 34) {
                    alert('Túlsúly');
                } else if (bmi < 44) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
            case '65+':
                if (bmi < 25) {
                    alert('Sovány');
                } else if (bmi < 30) {
                    alert('Ideális testsúly');
                } else if (bmi < 35) {
                    alert('Túlsúly');
                } else if (bmi < 45) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
        }
    } else {
        switch (ages) {
            case '18-24':
                if (bmi < 21) {
                    alert('Sovány');
                } else if (bmi < 26) {
                    alert('Ideális testsúly');
                } else if (bmi < 31) {
                    alert('Túlsúly');
                } else if (bmi < 41) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
            case '25-34':
                if (bmi < 22) {
                    alert('Sovány');
                } else if (bmi < 27) {
                    alert('Ideális testsúly');
                } else if (bmi < 32) {
                    alert('Túlsúly');
                } else if (bmi < 42) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
            case '35-44':
                if (bmi < 23) {
                    alert('Sovány');
                } else if (bmi < 28) {
                    alert('Ideális testsúly');
                } else if (bmi < 33) {
                    alert('Túlsúly');
                } else if (bmi < 43) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
            case '45-54':
                if (bmi < 24) {
                    alert('Sovány');
                } else if (bmi < 29) {
                    alert('Ideális testsúly');
                } else if (bmi < 34) {
                    alert('Túlsúly');
                } else if (bmi < 44) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
            case '55-64':
                if (bmi < 25) {
                    alert('Sovány');
                } else if (bmi < 30) {
                    alert('Ideális testsúly');
                } else if (bmi < 35) {
                    alert('Túlsúly');
                } else if (bmi < 45) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
            case '65+':
                if (bmi < 26) {
                    alert('Sovány');
                } else if (bmi < 31) {
                    alert('Ideális testsúly');
                } else if (bmi < 36) {
                    alert('Túlsúly');
                } else if (bmi < 46) {
                    alert('Elhízás');
                } else {
                    alert('Súlyos elhízás');
                }
                break;
        }
    }
}