import getUserSchedule from '../queries/schedule/get-schedule';

async function getSchedule(argv, api) {
	try {
		const data = await api.request(getUserSchedule, { term: '202320' });
		const schedule = data.scheduleOne ?? {};
		console.log(schedule?.draftSessions.map((session) => session.session));
	} catch (error) {
		console.error(JSON.stringify(error, null, 2));
		process.exit(1);
	}
}

export default getSchedule;
