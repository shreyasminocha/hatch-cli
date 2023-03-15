import GET_EVALS from '../queries/evals/get-evals';

async function evals(argv, api) {
	try {
		let query = GET_EVALS;
		let vars: any = {
			course: `${argv.department.toUpperCase()} ${argv.number}`,
		};

		const data = await api.request(
			query,
			Object.assign({ term: 202320 }, vars)
		);
		const courses = data.getEvaluationChartByCourse ?? [];

		if (courses.length > 0) {
			console.log(courses[0]);
		} else {
			console.log(courses);
		}
	} catch (error) {
		console.error(JSON.stringify(error, null, 2));
		process.exit(1);
	}
}

export default evals;
