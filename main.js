function createNav() {
	const nav = createElement("nav");
	const data = getNavLinks();
	for (let i = 0; i < data.length; i++) {
		nav.appendChild(createLink(data[i].name, data[i].path));
	}

	return nav;
}

function getNavLinks() {
	const baseUrl = getBaseUrl();
	return [
		{
			name: "Home",
			path: createUrl("index.html", baseUrl),
		},
		{
			name: "Blogs",
			path: createUrl("blog.html", baseUrl),
		},
	];
}

function getBaseUrl() {
	const currentUrl = window.location.href;
	return currentUrl.includes("C:/Users/")
		? "file:///C:/Users/Lachlan/Dev/mysite/"
		: "https://lachlanstephan.github.io/";
}

function createUrl(pathSuffix, baseUrl) {
	return new URL(pathSuffix, baseUrl);
}

function createFooter() {
	const footer = createElement("footer");
	footer.appendChild(createAddress());
	addClass(footer, "footer");

	return footer;
}

function createAddress() {
	const address = createElement("address");
	address.appendChild(createLink("Email", "mailto:ljstephan116@gmail.com"));

	return address;
}

function createLink(name, path) {
	const link = createElement("a");
	link.innerHTML = name;
	link.setAttribute("href", path);

	return link;
}

function addClass(element, className) {
	element.classList.add(className);
}

function createElement(name, content) {
	const el = document.createElement(name);
	if (content) {
		el.innerHTML = content;
	}

	return el;
}

function getElement(id) {
	return document.getElementById(id);
}

function appendNavToHeader() {
	const h = document.getElementById("header");
	h.prepend(createNav());
}

function appendFooterToEndOfMain() {
	const b = document.getElementsByTagName("body")[0];

	b.appendChild(createFooter());
}

function queueOnLoadMethods(methods) {
	for (let i = 0; i < methods.length; i++) {
		window.addEventListener("load", function () {
			methods[i]();
		});
	}
}

queueOnLoadMethods([appendNavToHeader, appendFooterToEndOfMain]);
