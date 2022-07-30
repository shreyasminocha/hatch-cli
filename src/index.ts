#!/usr/bin/env ts-node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { GraphQLClient } from 'graphql-request';
import search from './commands/search';

const ENDPOINT =
	'https://api-develop-dot-ultrascheduler.uc.r.appspot.com/graphql';

const client = new GraphQLClient(ENDPOINT, {
	headers: {
		authorization: `Bearer ${process.env.TOKEN}`,
	},
});

yargs(hideBin(process.argv))
	.scriptName('hatch')
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
		(argv) => search(argv, client)
	)
	.command(
		'course <department> <number>',
		'Get information about a course',
		() => {},
		() => {}
	)
	.command(
		'schedule [semester] [subcommand]',
		'View and edit your schedule',
		() => {},
		() => {}
	)
	.command(
		'plan [subcommand]',
		'View and edit your degree plans',
		() => {},
		() => {}
	)
	.parse();
