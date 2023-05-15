let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepai = document.getElementById("sepai");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hue_rotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector('span');
let imgBox = document.querySelector('.img-box');

function resetValue(){
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepai.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hue_rotate.value = '0';

}

window.onload = function(){
     download.style.display = 'none';
     reset.style.display = 'none';
     img.style.display = 'none';
     
}
upload.onchange = function(){
    resetValue();
    download.style.display = 'block';
    reset.style.display = 'block';
    img.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function (){
        img.src = file.result;
    }
}

let filters = document.querySelectorAll("ul li input");
filters.forEach( filter => {
    filter.addEventListener("input" , function(){
        `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue_rotate(${hue_rotate.value}deg)

        `     
    })
})
download.onclick = function(){
    download.href = img.src;
    
}


