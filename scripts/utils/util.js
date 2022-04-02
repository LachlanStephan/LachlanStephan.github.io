const preventFormDefault = (event) => {
	if (typeof event.cancelable !== "boolean" || event.cancelable) {
		event.preventDefault();
	}
};

const toggleDisplay = (ele, string) => {
	ele.style.display = string;
};

const createTexts = (ele, obj) => {
	Object.keys(obj).forEach((key) => {
		const sect = document.createElement("section");

		const h3 = document.createElement("h3");
		const p = document.createElement("p");
		const br = document.createElement("br");

		h3.innerHTML = obj[key].title;
		p.innerHTML = obj[key].content;

		ele.appendChild(sect);
		sect.appendChild(h3);
		sect.appendChild(p);

		sect.appendChild(br);
	});
};
