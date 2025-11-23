const filter = getElement("filter");

function getBlogData() {
	return [
		{
			id: "3",
			date: "10 Apr 2024",
			name: "Approaching 3 years in software",
			path: "blog/approaching-3-years-in-software",
			tags: "Software development, Opinion, Rant",
		},
		{
			id: "2",
			date: "20 Nov 2022",
			name: "How to be perfect",
			path: "blog/how-to-be-perfect",
			tags: "Moral philosophy, Book review",
		},
		{
			id: "1",
			date: "15 Jun 2022",
			name: "One year in software",
			path: "blog/one-year-in-software",
			tags: "Software development",
		},
	];
}

function appendBlogLinks() {
	const container = getElement("blogLinks");
	if (!container) {
		return;
	}

	const data = getBlogData();
	for (let i = 0; i < data.length; i++) {
		let text = "(" + data[i].id + ") " + data[i].name;

		if (data[i].wip) {
			text = text + " (wip)";
		}

		text = text + " [" + data[i].tags + "]";

		li = createElement("li");
		li.appendChild(createLink(text, data[i].path + ".html"));
		container.appendChild(li);
	}
}

function appendBackButton() {
	if (!isBlogPage()) {
		return;
	}

	const main = document.getElementsByTagName("main")[0];
	main.appendChild(createBlogBackButton());
}

function assembleBlogDatum() {
	if (!isBlogPage()) {
		return;
	}

	const datum = getBlogDatum(getCurrentBlogId());
	if (!datum) {
		return;
	}

	e.appendChild(createElement("p", "Written: " + datum.date));
	e.appendChild(createElement("p", "Tag(s): " + datum.tags));
}

function getCurrentBlogId() {
	const b = document.getElementsByTagName("body")[0];
	if (b.dataset.id) {
		return b.dataset.id;
	}
}

function createBlogBackButton() {
	const p = createElement("p");
	const back = createLink("<- Back", createUrl("blog.html", getBaseUrl()));
	p.appendChild(back);

	return p;
}

function getBlogDatum(id) {
	const data = getBlogData();
	for (let i = 0; i < data.length; i++) {
		if (data[i].id === id) {
			return data[i];
		}
	}
}

function filterBlogs() {
	const val = filter.value;
	const links = getElement("blogLinks").getElementsByTagName("a");

	for (let i = 0; i < links.length; i++) {
		let show = false;
		if (links[i].innerText.toLowerCase().includes(val.toLowerCase())) {
			show = true;
		}

		links[i].style.display = show ? "flex" : "none";
	}
}

queueOnLoadMethods([appendBlogLinks, assembleBlogDatum, appendBackButton]);
