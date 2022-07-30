import coursesByName from '../queries/courses/by-name';
import coursesByDepartment from '../queries/courses/by-department';
import coursesByDistribution from '../queries/courses/by-distribution';

async function search(argv, api) {
	try {
		let query = '';
		let vars: any = {};

		if (argv.name) {
			query = coursesByName;
			vars = { inputName: argv.name };
		} else if (argv.department) {
			query = coursesByDepartment;
			vars = {
				subject: argv.department.toUpperCase(),
			};
		} else if (argv.distribution) {
			query = coursesByDistribution;
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
