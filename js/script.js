// Ini JavaScripts
//function
//get values
//calculate
//output

function hitungBMI(){
    let berat = document.getElementById('beratBadan').value
    let tinggi = document.getElementById('tinggiBadan').value

    let bmi = (berat / ((tinggi / 100) * (tinggi / 100)));
    console.log(bmi)

    document.getElementById('result').innerHTML = bmi

    if (bmi>=30){
        document.getElementById('pesan').innerHTML = 'Hasil BMI lebih dari 30'
    }else if(bmi<30 && bmi>=25){
        document.getElementById('pesan').innerHTML = 'Hasil BMI diantara 25 dan 30'
    }else if(bmi>=18.5 && bmi<25){
        document.getElementById('pesan').innerHTML = 'Hasil BMI diantara 18.5 dan 25'
    }else{
        document.getElementById('pesan').innerHTML = 'Hasil BMI dibawah 18.5'
    }
}

function reset(){
    document.getElementsByClassName("btnReset").value = "";
}
