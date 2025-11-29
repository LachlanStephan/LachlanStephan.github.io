const filter = getElement("filter");

function getBlogData() {
	return [
		getBlogDataStructure(
			"3",
			"10 Apr 2024",
			"Approaching 3 years in software",
			"blog/approaching-3-years-in-software",
			"Software development, Opinion, Rant"
		),
		getBlogDataStructure(
			"2",
			"20 Nov 2022",
			"How to be perfect",
			"blog/how-to-be-perfect",
			"Moral philosophy, Book review"
		),
		getBlogDataStructure(
			"1",
			"15 Jun 2022",
			"One year in software",
			"blog/one-year-in-software",
			"Software development"
		),
	];
}

function getBlogDataStructure(id, date, title, path, tags) {
	return {
		id: id,
		date: date,
		title: title,
		path: path,
		tags: tags,
	};
}

function appendBlogLinks() {
	const container = getElement("blogLinks");
	if (!container) {
		return;
	}

	const data = getBlogData();
	for (let i = 0; i < data.length; i++) {
		let text = "(" + data[i].id + ") " + data[i].title;

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

	const main = getElement("main");
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

	const e = getElement("blogData");
	if (!e) {
		return;
	}

	e.appendChild(createElement("h3", "Written: " + datum.date));
	e.appendChild(createElement("h3", "Tag(s): " + datum.tags));
}

function getCurrentBlogId() {
	const b = getElement("body");
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

queueOnLoadMethods([
	{
		function: appendBlogLinks,
		args: [],
	},
	{
		function: assembleBlogDatum,
		args: [],
	},
	{
		function: appendBackButton,
		args: [],
	},
]);
