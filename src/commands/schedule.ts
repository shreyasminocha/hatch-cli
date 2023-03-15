import GET_USER_SCHEDULE from '../queries/schedule/get-schedule';
import LIST_SCHEDULES from '../queries/schedules/list';

async function schedule(argv, api) {
	switch (argv.subcommand) {
		case 'list':
			return listSchedules(argv, api);
		case 'view':
			return getSchedule(argv, api);
		case 'add-course':
			return addCourse(argv, api);
		case 'toggle-course':
			return toggleCourse(argv, api);
		case 'remove-course':
			return removeCourse(argv, api);
	}
}

async function listSchedules(argv, api) {
	try {
		const data = (await api.request(LIST_SCHEDULES)) ?? {};
		const schedules = data?.scheduleMany;
		console.log(schedules);
	} catch (error) {
		console.error(JSON.stringify(error, null, 2));
		process.exit(1);
	}
}

async function getSchedule(argv, api) {
	try {
		const data = await api.request(GET_USER_SCHEDULE, { term: '202320' });
		const schedule = data?.scheduleOne ?? {};
		console.log(schedule?.draftSessions.map((session) => session.session));
	} catch (error) {
		console.error(JSON.stringify(error, null, 2));
		process.exit(1);
	}
}

async function addCourse(argv, api) {
	console.error('unimplemented');
	process.exit(1);
}

async function toggleCourse(argv, api) {
	console.error('unimplemented');
	process.exit(1);
}

async function removeCourse(argv, api) {
	console.error('unimplemented');
	process.exit(1);
}

export default schedule;
