const main_1 = document.getElementById("landing_main");

const fetchText = async() => {
	let data = await fetch('http://localhost:8888/mysite/api/text/text.php');
	data = await data.json();
	createTexts(main_1, data);
};

fetchText();
