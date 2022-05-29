
// footer
const om = document.getElementById('om')
om.innerText = 'Bertelsen Blomster historie';

const vores = document.getElementById('vores')
vores.innerText = 'Vores blomster';

const pleje = document.getElementById('pleje')
pleje.innerText = 'Pleje';

const betaling = document.getElementById('betaling')
betaling.innerText = 'Betaling';

const levering = document.getElementById('levering')
levering.innerText = 'Levering';

const open = document.getElementById('open')
open.innerText = 'Åbningstider';

const tlf = document.getElementById('tlf')
tlf.innerText = 'Tlf: 26 70 17 37';

// udvalg.html
// billede 1
let flower1 = document.getElementById("flower1");

window.addEventListener('scroll', function() {
  let value = window.scrollY;

  flower1.style.bottom = value * 0.2 + 'px';
})

// billede 2
let flower2 = document.getElementById("flower2");

window.addEventListener('scroll', function() {
  let value = window.scrollY;

  flower2.style.bottom = value * 0.4 + 'px';
});

// billede 3
let flower3 = document.getElementById("flower3");

window.addEventListener('scroll', function() {
  let value = window.scrollY;

  flower3.style.top = value * 0.1 + 'px';
});

// billede 4
let flower4 = document.getElementById("flower4");

window.addEventListener('scroll', function() {
  let value = window.scrollY;

  flower4.style.bottom = value * 0.2 + 'px';
});

// billede 5
let flower5 = document.getElementById("flower5");

window.addEventListener('scroll', function() {
  let value = window.scrollY;

  flower5.style.top = value * 0.2 + 'px';
});


// billede 6
let flower6 = document.getElementById("flower6");

window.addEventListener('scroll', function() {
  let value = window.scrollY;

  flower6.style.bottom = value * 0.1 + 'px';
});



// parallax effekt på udvalg.html (virkede ikke)

//function myFunktion(flower) {
//if (flower.mathes) {
//  document.flower2.style.scrollY = " value * 0.4 + 'px'";

//} else {
//  document.flower2.style.scrollY = " value * 0 +"'px'";
//  }
//}

//let flower = window.matchMedia("(max-width:768px)")
//myFunction(flower)
//flower.addListener(myFunction);
