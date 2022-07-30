#!/usr/bin/env ts-node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { GraphQLClient } from 'graphql-request';
import coursesByName from './queries/courses/by-name';
import coursesByDepartment from './queries/courses/by-department';
import coursesByDistribution from './queries/courses/by-distribution';

const ENDPOINT =
	'https://api-develop-dot-ultrascheduler.uc.r.appspot.com/graphql';

const client = new GraphQLClient(ENDPOINT, {
	headers: {
		authorization: `Bearer ${process.env.TOKEN}`,
	},
});

yargs(hideBin(process.argv))
	.command(
		'search [name]',
		'Search for courses',
		(yargs) => {
			return yargs
				.positional('name', {
					type: 'string',
				})
				.option('department', {
					alias: ['d', 'dept'],
					type: 'string',
				})
				.option('distribution', {
					alias: 'dist',
					choices: [1, 2, 3],
				})
				.conflicts({
					name: ['department', 'distribution'],
					department: ['name', 'distribution'],
					distribution: ['name', 'department'],
				});
		},
		async (argv) => {
			try {
				let query = '';
				let vars: any = { term: 202310 };

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

				const data = await client.request(
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
	)
	.parse();
