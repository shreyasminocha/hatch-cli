import COURSE_BY_NUMBER from '../queries/course/by-number';

async function course(argv, api) {
	try {
		let vars: any = {
			subject: argv.department.toUpperCase(),
			number: argv.number,
		};

		const data = await api.request(
			COURSE_BY_NUMBER,
			Object.assign({ term: 202320 }, vars)
		);
		const course = data.courseOne ?? {};
		console.log(formatCourse(course));
	} catch (error) {
		console.error(JSON.stringify(error, null, 2));
		process.exit(1);
	}
}

function formatCourse(course) {
	return `${course.subject} ${course.courseNum}: ${course.longTitle}

${course.sessions.map(formatSession).join('\n')}`;
}

function formatSession(session) {
	const components = [
		`[${session.crn}]`,
		`${session.class.days} ${session.class.startTime}–${session.class.endTime}`,
	];

	if (session?.lab?.days.length > 0) {
		components.push(
			`(+ ${session.lab.days} ${session.lab.startTime}–${session.lab.endTime})`
		);
	}

	components.push(
		session.instructors.map((i) => `${i.firstName} ${i.lastName}`).join(', ')
	);

	return components.join('\t');
}

export default course;
