// Ini JavaScripts
//function
//get values
//calculate
//output
document.getElementById('formbmi').addEventListener('submit', function(event) {
    console.log("Form submission prevented")
    event.preventDefault();
    hitungbmi();
});

function hitungbmi(){

    let berat = document.getElementById('beratbadan').value
    let tinggi = document.getElementById('tinggibadan').value

    if(document.getElementById('beratbadan').value == '' || document.getElementById('tinggibadan').value == '' || document.getElementById('usia').value == '' || (document.getElementById('pria').checked == false && document.getElementById('wanita').checked == false))
    {
        alert("Tolong isi formulir")
    } else if(berat>0 && tinggi>0){
    let bmi = (berat / ((tinggi / 100) * (tinggi / 100)));
    let roundedbmi = bmi.toFixed(1);
    console.log(roundedbmi)
    document.getElementById('result').innerHTML = roundedbmi
    if (bmi>=30){
        obesitas()
    }else if(bmi<30 && bmi>=25){
        beratberlebih()
    }else if(bmi>=18.5 && bmi<25){
        beratideal()
    }else{
        beratkekurangan()
    }
    } else {
        alert("Tolong input angka positif")
    }
}


function obesitas(){
    document.getElementById('kategori').innerHTML = 'Obesitas'
    document.getElementById('pesansatu').innerHTML = 'Hasil BMI lebih dari 30'
    document.getElementById('pesandua').innerHTML = 'Anda berada dalam kategori obesitasa atau kegemukan.'
    document.getElementById('pesantiga').innerHTML = 'Anda sudah harus menetapkan diet plan dan melakukan aktivitas fisik secara bertahap. Cara pertama adalah dengan menatapkan target penurunan berat badan yang realistis lalu menyusun rencana yang detail untuk mencapai target itu.'
}

function beratberlebih(){
    document.getElementById('kategori').innerHTML = 'Berat Badan Berlebih'
    document.getElementById('pesansatu').innerHTML = 'Hasil BMI diantara 25 dan 30'
    document.getElementById('pesandua').innerHTML = 'Anda berada dalam kategori overweight atau berat badan berlebih.'
    document.getElementById('pesantiga').innerHTML = 'Anda sangat disarankan membatasi porsi makan dan batasi juga camilan larut malam anda. Selain itu, sangat disarankan untuk terhidrasi dengan baik dan melakukan aktivitas fisik.'
}

function beratideal(){
    document.getElementById('kategori').innerHTML = 'Berat Badan Ideal'
    document.getElementById('pesansatu').innerHTML = 'Hasil BMI diantara 18.5 dan 25'
    document.getElementById('pesandua').innerHTML = 'Anda berada dalam kategori ideal atau berat badan normal.'
    document.getElementById('pesantiga').innerHTML = 'Anda sudah berada di berat badan yang ideal, sangat disarankan untuk tetap mempertahankannya.'
}

function beratkekurangan(){
    document.getElementById('kategori').innerHTML = 'Kekurangan Berat Badan'
    document.getElementById('pesansatu').innerHTML = 'Hasil BMI dibawah 18.5'
    document.getElementById('pesandua').innerHTML = 'Anda berada dalam kategori underweight atau kekurangan berat badan.'
    document.getElementById('pesantiga').innerHTML = 'Anda disarankan untuk mengonsumsi protein berkualitas tinggi dan menjaga jadwal makan. Cara lain yang bisa membantu anda menaikkan bmi adalah dengan memakan kacang-kacangan dan biji-bijian karena mengandung banyak kalori seimbang.'
}

function resetform(){
    document.getElementById("tinggibadan").value = '';
    document.getElementById("beratbadan").value = '';
    document.getElementById("usia").value = '';
    document.getElementById("result").innerHTML = 'Hasil BMI';
    document.getElementById("pesansatu").innerHTML = '';
    document.getElementById("pesandua").innerHTML = '';
    document.getElementById("pesantiga").innerHTML = '';

    const genderradios = document.getElementsByName('jeniskelamin');
    for(let i=0; i<genderradios.length; i++){
        genderradios[i].checked = false;
    }
}
