var display_angka = document.querySelector("#display-angka");
var form_hasil = document.querySelector("#form_hasil");
var display_container_angka = document.querySelector("#display-container-angka");
var input_angka = document.querySelector("#input_angka");
var lihat_hasil = document.querySelector("#lihat_hasil");
var display_hasil = document.querySelector("#display_hasil");

var hasil_aritmatika;
var benar = 0;
var salah = 0;


function random_angka(){
    var angka1 = Math.floor(Math.random() * 100);
    var angka2 = Math.floor(Math.random() * 100);
    var hasil = angka1 + angka2;
    input_angka.value = "";

    return {
        angka1,
        angka2,
        hasil
    }
}


function display_random_angka(){
    var {angka1, angka2, hasil} = random_angka();
    hasil_aritmatika = hasil;

    display_angka.innerText = `${angka1} + ${angka2} = `;
}



form_hasil.addEventListener("submit", (e) => {
    e.preventDefault();

    // const formData = new FormData(form_hasil);
    var angka = parseInt(input_angka.value);

   display_angka.innerText += ` ${hasil_aritmatika}`;

    if(angka === hasil_aritmatika){
        display_container_angka.style.color = "rgba(72, 239, 89, 0.739)";
        benar++;
        console.log("anda Benar");
    }else{
        display_container_angka.style.color = "rgba(239, 72, 72, 0.739)";
        salah++;
        console.log("anda Salah");
    }

    setTimeout(() => {
        display_container_angka.style.color = "black";
        display_random_angka();
    }, 1000)
})

lihat_hasil.addEventListener("click", () => {
    var data = ` <h2>Hasil Anda</h2>
    <h4>Benar ${benar} | Salah : ${salah}</h4>`;
    display_hasil.innerHTML = data;
});


display_random_angka();
