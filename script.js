let weight = document.getElementById('weight')
let wUnit = document.getElementById('wUnit')
let age = document.getElementById('age')
let temp = document.getElementById('temp')
let wet = document.getElementById('wet')
let hAge = document.getElementById('hAge')
let hMCAL = document.getElementById('hMCAL')
let hProtein = document.getElementById('hProtein')
let hTemp = document.getElementById('hTemp')
let tempUnit = document.getElementById('tempUnit')
let additionalCal = 0
let calResult = document.getElementById('calResult')
let t = 0;
calResult.addEventListener('click', function() {
    weightValue = Number(weight.value)
    wUnitValue = wUnit.value
    ageValue = Number(age.value)
    tempValue = Number(temp.value)
    tempUnitValue = tempUnit.value
    wetValue = wet.value
    if (wUnitValue == 'pound') {
        weightValue = weightValue * 0.453592
    }


    if (weightValue >= 45 && weightValue <= 1000) {
        weight.style.border = '2px solid #888';
    } else {
        weight.style.border = '2px solid red';
        alert('Under 45 KG or Over 1000 KG are not allowed!')
        hAge.innerText = 'X'
        hTemp.innerText = 'Y Celsius'
        hMCAL.innerText = 'Z'
        hProtein.innerText = 'N%'
        return false
    }
    if (temp.value != '') {
        temp.style.border = '2px solid #888';
        if (tempUnitValue == 'celsius') {
            t = (tempValue * (9 / 5)) + 32 //  converting censius to fahrenheit
            hTemp.innerText = tempValue + '°C'
        } else {
            t = tempValue
            hTemp.innerText = tempValue + '°F'
        }
    } else {
        alert('Enter Temperature Value!')
        temp.style.border = '2px solid red';
        return false
    }
    if (ageValue >= 5 && ageValue <= 20) {
        hAge.innerText = ageValue
        hProtein.innerText = '8%-11%'
        if (wetValue == 'no') {
            if (t < 45) {
                additionalCal = Math.round(45 - t)
                hMCAL.innerText = `${((weightValue * 0.033) + ((weightValue * 0.033)*(additionalCal/100))).toFixed(2)} - ${((weightValue*0.042)+ ((weightValue * 0.042)*(additionalCal/100))).toFixed(2)}`
            } else {
                hMCAL.innerText = `${((weightValue * 0.033)).toFixed(2)} - ${((weightValue*0.042)).toFixed(2)}`
            }

        } else {
            if (t < 55) {
                additionalCal = Math.round(55 - t)
                hMCAL.innerText = `${((weightValue * 0.033) + ((weightValue * 0.033)*(additionalCal/100))).toFixed(2)} - ${((weightValue*0.042)+ ((weightValue * 0.042)*(additionalCal/100))).toFixed(2)}`
            } else {
                hMCAL.innerText = `${((weightValue * 0.033)).toFixed(2)} - ${((weightValue*0.042)).toFixed(2)}`
            }
        }
    }
    if (ageValue > 20 && ageValue <= 30) {
        hAge.innerText = ageValue
        hProtein.innerText = '14%'
        if (wetValue == 'no') {
            if (t < 45) {
                additionalCal = Math.round(45 - t)
                hMCAL.innerText = `${((weightValue * 0.033) + ((weightValue * 0.033)*(additionalCal/100))).toFixed(2)}`
            } else {
                hMCAL.innerText = `${((weightValue * 0.033)).toFixed(2)}`
            }

        } else {
            if (t < 55) {
                additionalCal = Math.round(55 - t)
                hMCAL.innerText = `${((weightValue * 0.033) + ((weightValue * 0.033)*(additionalCal/100))).toFixed(2)}`
            } else {
                hMCAL.innerText = `${((weightValue * 0.033)).toFixed(2)}`
            }
        }
    }

})