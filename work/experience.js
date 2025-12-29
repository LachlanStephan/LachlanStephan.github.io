const softwareExperience = createExperience(getSoftwareJobs());
const tennisExperience = createExperience(getTennisJobs());
const experienceTypes = {
	tennis: "tennis",
	software: "software",
};

function getSoftwareJobs() {
	return [
		getJobDataStructure(
			"Nov 2022",
			"",
			"Software Engineer",
			"Squiz",
			"PHP, Typescript, React, Postgres, Cloudformation, Bash, PHPUnit, Cypress"
		),
		getJobDataStructure(
			"Sep 2021",
			"Nov 2022",
			"Junior Software Engineer",
			"Truckit.net",
			"PHP, Typescript, Angular, MySQL, CSS modules"
		),
		getJobDataStructure(
			"Jun 2021",
			"Sep 2021",
			"Graduate Software Engineer",
			"CompliantERP",
			"Javascript, XML, NodeJS, SQL"
		),
	];
}

function getTennisJobs() {
	return [
		getJobDataStructure(
			"Jan 2020",
			"Jun 2021",
			"Regional Coordinator / Senior Coach",
			"Tennis for Kids"
		),
		getJobDataStructure(
			"Jan 2012",
			"Dec 2019",
			"Coach / Head Coach",
			"Top Tennis Academy"
		),
	];
}

function getJobDataStructure(start, end, title, company, skills) {
	return {
		start: start,
		end: end,
		title: title,
		company: company,
		skills: skills,
	};
}

function createExperience(data) {
	const container = createElement("article");

	data.forEach((datum) => {
		const wrapper = createElement("section");
		const start = createElement("p", "From: " + datum.start);
		const end = createElement(
			"p",
			"To: " + (datum.end === "" ? "Present" : datum.end)
		);
		const title = createElement("p", "Title: " + datum.title);
		const company = createElement("p", "Company: " + datum.company);
		const skills = createElement(
			"p",
			"Skills: " + "[" + datum.skills + "]"
		);

		wrapper.appendChild(title);
		wrapper.appendChild(company);
		wrapper.appendChild(start);
		wrapper.appendChild(end);
		if (datum.skills !== undefined) {
			wrapper.appendChild(skills);
		}
		container.appendChild(wrapper);
	});

	return container;
}

function appendExperienceHHTML(html) {
	const container = getElement("experienceData");
	if (!container) {
		return;
	}

	container.appendChild(html);
}

function toggleExperience(type) {
	removeExperience();
	if (type === experienceTypes.tennis) {
		appendExperienceHHTML(tennisExperience);
	} else {
		appendExperienceHHTML(softwareExperience);
	}

	updateHeaderText(capitliseFirstLetter(type));
}

function removeExperience() {
	const container = getElement("article");
	if (!container) {
		return;
	}

	container.remove();
}

function updateHeaderText(text) {
	const heading = getElement("h1");
	heading.innerHTML = "Experience " + "(" + text + ")";
}

queueOnLoadMethods([
	{
		function: appendExperienceHHTML,
		args: [softwareExperience],
	},
]);
