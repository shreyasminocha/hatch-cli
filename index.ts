import { GraphQLClient } from 'graphql-request';
import coursesByDepartment from './queries/courses/by-department';

const ENDPOINT =
	'https://api-develop-dot-ultrascheduler.uc.r.appspot.com/graphql';

const client = new GraphQLClient(ENDPOINT, {
	headers: {
		authorization: `Bearer ${process.env.TOKEN}`,
	},
});

try {
	const data = await client.request(coursesByDepartment, {
		subject: 'COMP',
		term: 202310,
	});

	console.log(JSON.stringify(data, undefined, 2));
} catch (error) {
	console.error(JSON.stringify(error, undefined, 2));
	process.exit(1);
}
