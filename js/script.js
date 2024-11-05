// Ini JavaScripts
//function
//

function hitungBMI(){
    let berat = document.getElementById('berat-badan').value
    let tinggi = document.getElementById('tinggi-badan').value

    let bmi = (berat-badan/(tinggi-badan/100)^2);
    console.log(bmi)
}