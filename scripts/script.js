let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");

let pOpinion = document.getElementById("opinion-p");
let oName = document.getElementById("opinion-name");
let oAge = document.getElementById("opinion-age");

let quoteNum = 0;

let num1 = document.getElementById("num-1");
let num2 = document.getElementById("num-2");
let num3 = document.getElementById("num-3");
let num4 = document.getElementById("num-4");
let num5 = document.getElementById("num-5");

function quote0() {
	num2.classList.remove("slider-num-active");
	num3.classList.remove("slider-num-active");
	num4.classList.remove("slider-num-active");
	num5.classList.remove("slider-num-active");
	num1.classList.add("slider-num-active");

	pOpinion.innerHTML =
		"Dzięki Łappce bardzo szybko odnalazłam moją ukochną Calineczkę. Uciekła mi z domu nad ranem i nie mogłam jej dogonić. Zrozpaczona szybko udostępniłam wiadomość o tym w Łappce. Już wieczorem odezwał się do mnie inny użytkownik, mówiąć, że Calineczka jest u niego w ogrodzie. Jakieś 15 minut póżniej już jechałyśmy razem do domu. Cudowna aplikacja!";
	oName.innerHTML = "Malwina";
	oAge.innerHTML = "32 lata";
}

function quote1() {
	num1.classList.remove("slider-num-active");
	num3.classList.remove("slider-num-active");
	num4.classList.remove("slider-num-active");
	num5.classList.remove("slider-num-active");
	num2.classList.add("slider-num-active");

	pOpinion.innerHTML =
		"Już do jakiegoś czasu myślałam o adopcji pieska. Niestety nigdy nie miałam czasu, żeby pojechać do schroniska i znaleźć mojego nowego ukochanego 😊 dzięki Łappce wybrałam Diego, który znajdował się w schronisku blisko mnie. Wystarczyło założenie konta i kilka kliknięć. Teraz jesteśmy z Diegiem w domu i za nic nie zrozumiem dlaczego ten slodziak był w schronisku. Jeśli ktoś myśli o adopcji gorąco polecam Łappkę!";
	oName.innerHTML = "Kunegunda";
	oAge.innerHTML = "19 lat";
}

function quote2() {
	num1.classList.remove("slider-num-active");
	num2.classList.remove("slider-num-active");
	num4.classList.remove("slider-num-active");
	num5.classList.remove("slider-num-active");
	num3.classList.add("slider-num-active");

	pOpinion.innerHTML =
		"Dla mnie to fantastyczna aplikacja, bo znalazłam tam moją Jessy. To ok 8 miesięczna kicia, która przejechała się pod maską samochodu i była poparzona. Była też mocno wychudzona. Kiedy kicia trochę wydobrzała, zabrałam ją do domu. I mam cudowną, mruczącą przyjaciółkę 😊";
	oName.innerHTML = "Joanna";
	oAge.innerHTML = "23 lata";
}

function quote3() {
	num1.classList.remove("slider-num-active");
	num2.classList.remove("slider-num-active");
	num3.classList.remove("slider-num-active");
	num5.classList.remove("slider-num-active");
	num4.classList.add("slider-num-active");

	pOpinion.innerHTML =
		"Już do jakiegoś czasu myślałam o adopcji pieska. Niestety nigdy nie miałam czasu, żeby pojechać do schroniska i znaleźć mojego nowego ukochanego 😊 dzięki Łappce wybrałam Diego, który znajdował się w schronisku blisko mnie. Wystarczyło założenie konta i kilka kliknięć. Teraz jesteśmy z Diegiem w domu i za nic nie zrozumiem dlaczego ten slodziak był w schronisku. Jeśli ktoś myśli o adopcji gorąco polecam Łappkę!";
	oName.innerHTML = "Kunegunda";
	oAge.innerHTML = "19 lat";
}

function quote4() {
	num1.classList.remove("slider-num-active");
	num2.classList.remove("slider-num-active");
	num3.classList.remove("slider-num-active");
	num4.classList.remove("slider-num-active");
	num5.classList.add("slider-num-active");

	pOpinion.innerHTML =
		"Dzięki Łappce bardzo szybko odnalazłam moją ukochną Calineczkę. Uciekła mi z domu nad ranem i nie mogłam jej dogonić. Zrozpaczona szybko udostępniłam wiadomość o tym w Łappce. Już wieczorem odezwał się do mnie inny użytkownik, mówiąć, że Calineczka jest u niego w ogrodzie. Jakieś 15 minut póżniej już jechałyśmy razem do domu. Cudowna aplikacja!";
	oName.innerHTML = "Wojtek";
	oAge.innerHTML = "22 lata";
}

