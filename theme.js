document.addEventListener("DOMContentLoaded", function() {
    var lightOption = document.getElementById('HOME');
    
    lightOption.addEventListener('click', function() {
        document.querySelector('.p3').style.color = 'black';
        document.querySelector('.home').style.color = 'black';
        document.querySelector('.p1').style.color = 'cornsilk';
        document.querySelector('.navbar').style.backgroundColor = 'crimson';
        document.querySelector('.navbar').style.boxShadow = '0 0 10px black';
        document.querySelector('.p2').style.color = 'white';
        document.querySelector('.p4').style.color = 'black';
        document.querySelector('.p5').style.color = 'black';
        document.body.style.backgroundColor = 'cornsilk'; 
        
        document.querySelector('.box').style.backgroundColor = '#F3FDE8'; 
        document.querySelector('.box').style.boxShadow = '0 0 8px black';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var lightOption = document.getElementById('light');
    
    lightOption.addEventListener('click', function() {
        
        document.querySelector('.navbar').style.backgroundColor = '#F4EEE0';
        document.querySelector('.p1').style.color = 'black';
        document.querySelector('.p2').style.color = '#331D2C';
        document.querySelector('.p3').style.color = 'black';
        document.querySelector('.home').style.color = 'black';
        document.querySelector('.p4').style.color = 'black';
        document.querySelector('.p5').style.color = 'black';
        document.body.style.backgroundColor = '#FAF0E6'; 
        
        document.querySelector('.box').style.backgroundColor = '#FBF9F1'; 
        document.querySelector('.box').style.boxShadow = '0 0 8px #E19898';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var lightOption = document.getElementById('dark');
    
    lightOption.addEventListener('click', function() { 
        document.querySelector('.p2').style.color = 'white';
        document.querySelector('.p1').style.color = 'cornsilk';
        document.querySelector('.p3').style.color = 'white';
        document.querySelector('.home').style.color = 'white';
        document.querySelector('.p4').style.color = 'white';
        document.querySelector('.p5').style.color = 'white';
        document.querySelector('.navbar').style.backgroundColor = '#363062';
        document.querySelector('.navbar').style.boxShadow = '0 0 10px white';
        
        document.body.style.backgroundColor = '#030637'; 
        
        document.querySelector('.box').style.backgroundColor = '#232D3F'; 
        document.querySelector('.box').style.boxShadow = '0 0 8px white';

    });
});
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.list');
    navbar.style.display = 'none';
});
const showMenu=()=>{
    var navbar = document.querySelector(".list");
    navbar.style.display = "block";
}
const hideMenu=()=>{
 var navbar = document.querySelector(".list");
    navbar.style.display = "none";
}

var paragraph = document.querySelector('.p5');
var font1 = document.getElementById('font1');
font1.addEventListener('click', function() {
    paragraph.style.fontFamily = 'Arial, sans-serif';
});
var font2 = document.getElementById('font2');
font2.addEventListener('click', function() {
    paragraph.style.fontFamily = 'Georgia, serif'; 
});
var font3 = document.getElementById('font3');
font3.addEventListener('click', function() {
    paragraph.style.fontFamily = 'Segoe UI, Tahoma, sans-serif'; 
});
var font4 = document.getElementById('font4');
font4.addEventListener('click', function() {
    paragraph.style.fontFamily = 'Courier New, monospace'; 
});
var font5 = document.getElementById('font5');
font5.addEventListener('click', function() {
    paragraph.style.fontFamily = 'Impact, Haettenschweiler,Arial Narrow Bold, sans-serif';
});



