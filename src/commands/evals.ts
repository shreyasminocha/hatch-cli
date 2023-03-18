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
		const evaluations = data.getEvaluationChartByCourse ?? [];

		if (evaluations.length > 0) {
			console.log(formatEvals(evaluations[0]));
		} else {
			console.log(evaluations);
		}
	} catch (error) {
		console.error(JSON.stringify(error, null, 2));
		process.exit(1);
	}
}

function formatEvals(evals) {
	// TODO: show more details. fancy charts perhaps?
	return `${evals.courseName} ${evals.term} (${evals.enrolled_amount} enrolled)

Organization:\t${evals.organization.class_mean}
Assignments:\t${evals.assignments.class_mean}
Challenge:\t${evals.challenge.class_mean}
Workload:\t${evals.workload.class_mean}
Overall:\t${evals.overall.class_mean}

Comments:

${evals.comments.map((comment) => `> ${comment.text}`).join('\n\n')}`;
}

export default evals;
