import COURSES_BY_NAME from '../queries/courses/by-name';
import COURSES_BY_DEPARTMENT from '../queries/courses/by-department';
import COURSES_BY_DISTRIBUTION from '../queries/courses/by-distribution';

async function search(argv, api) {
	try {
		let query = '';
		let vars: any = {};

		if (argv.name) {
			query = COURSES_BY_NAME;
			vars = { inputName: argv.name };
		} else if (argv.department) {
			query = COURSES_BY_DEPARTMENT;
			vars = {
				subject: argv.department.toUpperCase(),
			};
		} else if (argv.distribution) {
			query = COURSES_BY_DISTRIBUTION;
			vars = {
				distribution: `Distribution ${'I'.repeat(argv.distribution)}`,
			};
		}

		const data = await api.request(
			query,
			Object.assign({ term: 202310 }, vars)
		);
		const courses = data.courseMany ?? [];

		console.log(
			courses.map((course) => [
				course.subject,
				course.courseNum,
				course.longTitle,
			])
		);
	} catch (error) {
		console.error(JSON.stringify(error, null, 2));
		process.exit(1);
	}
}

export default search;
